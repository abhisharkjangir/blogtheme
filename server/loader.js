// Express requirements
import path from "path";
import fs from "fs";

// React requirements
import React from "react";
import { matchPath } from "react-router-dom";
import { renderToString } from "react-dom/server";
import Helmet from "react-helmet";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router";

import { END } from "redux-saga";
import Loadable from "react-loadable";

// Our store, entrypoint, and manifest
import createStore from "../src/store";
import App from "../src/app/containers/app";
import manifest from "../build/asset-manifest.json";
import { Routes } from "../src/app/routes";
import rootSaga from "../src/rootSagas";

const inlineResource = (resourcePath, encoding = "utf8") => {
  let resource = "";
  try {
    resource = fs.readFileSync(
      path.resolve(__dirname, `../build/${resourcePath}`),
      encoding
    );
  } catch (e) {
    console.log("Error loading:", resourcePath, e.stack); // eslint-disable-line no-console
  }
  return resource;
};

/**
 * Get Chunk Name
 * @param {array} chunks | ex: ['./home', './home']
 */
const getChunkName = chunks => {
  if (chunks && chunks.length) {
    let chunkName = chunks[0]; // "./home"
    chunkName = chunkName.replace("./", ""); // "home";
    return chunkName || null;
  }
  return undefined;
};

/*
    A simple helper function to prepare the HTML markup. This loads:
      - Page title
      - SEO meta tags
      - Preloaded state (for Redux) depending on the current route
      - Code-split script tags depending on the current route
  */
const injectHTML = (
  data,
  { html, title, meta, body, scripts, state, style }
) => {
  data = data.replace("<html>", `<html ${html}>`);
  data = data.replace(/<title>.*?<\/title>/g, title);
  data = data.replace("</head>", `${meta}${style}</head>`);
  data = data.replace(
    '<div id="root"></div>',
    `<div id="root">${body}</div><script>window.__PRELOADED_STATE__ = ${state}</script>`
  );
  data = data.replace("</body>", scripts.join("") + "</body>");

  return data;
};

// LOADER
function loader(req, res) {
  // Load in our HTML file from our build
  fs.readFile(
    path.resolve(__dirname, "../build/index.html"),
    "utf8",
    async function(err, htmlData) {
      // If there's an error... serve up something nasty
      if (err) {
        console.error("Read error", err);
        return res.status(404).end();
      }

      // Create a store (with a memory history) from our current url
      const { store } = createStore(req.url);
      const saga = store.runSaga(rootSaga);
      // If the user has a cookie (i.e. they're signed in) - set them as the current user
      // Otherwise, we want to set the current state to be logged out, just in case this isn't the default
      if ("mywebsite" in req.cookies) {
        // store.dispatch(setCurrentUser(req.cookies.mywebsite));
      } else {
        // store.dispatch(logoutUser());
      }

      const context = {};
      const modules = [];

      let actions = [];
      Routes.some(route => {
        const match = matchPath(req.path, route);
        if (match) {
          if (route.fetchRouteData) {
            actions = [...actions, ...route.fetchRouteData];
          }
        }
        return match;
      });

      actions.map(action => {
        store.dispatch(action());
        return action;
      });
      store.dispatch(END);
      try {
        saga.done.then(() => {
          const markup = renderToString(
            <Loadable.Capture report={m => modules.push(m)}>
              <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                  <App />
                </StaticRouter>
              </Provider>
            </Loadable.Capture>
          );

          if (context.url) {
            // If context has a url property, then we need to handle a redirection in Redux Router
            res.writeHead(302, {
              Location: context.url
            });

            res.end();
          } else {
            // Otherwise, we carry on...

            // Let's give ourself a function to load all our page-specific JS assets for code splitting
            const extractAssets = (assets, chunks) =>
              Object.keys(assets)
                .filter(asset => chunks.indexOf(asset.replace(".js", "")) > -1)
                .map(k => assets[k]);

            // Let's format those assets into pretty <script> tags
            const extraChunks = extractAssets(manifest, modules).map(
              c =>
                `<script type="text/javascript" src="/${c.replace(
                  /^\//,
                  ""
                )}"></script>`
            );

            const extractAssetsCss = (assets, chunks) => {
              const chunkName = getChunkName(chunks);
              const objectKeys = Object.keys(assets).reverse();
              const filteredAssets = objectKeys.filter(asset => {
                return (
                  (asset.includes("main.css") ||
                    asset.includes(`${chunkName}.css`)) &&
                  !asset.includes(".css.map")
                );
              });
              console.log("162", filteredAssets, chunks);

              return filteredAssets.map(k => assets[k]);
            };

            const extraCSSChunks = extractAssetsCss(manifest, modules)
              .map(
                c =>
                  `<style type="text/css">${inlineResource(
                    c.replace(/^\//, "")
                  )}></style>`
              )
              .join("");

            // We need to tell Helmet to compute the right meta tags, title, and such
            const helmet = Helmet.renderStatic();

            // NOTE: Disable if you desire
            // Let's output the title, just to see SSR is working as intended
            // console.log("THE TITLE", helmet.style.toString());

            // Pass all this nonsense into our HTML formatting function above
            const html = injectHTML(htmlData, {
              html: helmet.htmlAttributes.toString(),
              title: helmet.title.toString(),
              meta: helmet.meta.toString(),
              body: markup,
              scripts: extraChunks,
              style: extraCSSChunks,
              state: JSON.stringify(store.getState()).replace(/</g, "\\u003c")
            });

            // We have all the final HTML, let's send it to the user already!
            res.send(html);
          }
        });
      } catch (error) {
        console.log("something wrong");
      }
    }
  );
}

export default loader;
