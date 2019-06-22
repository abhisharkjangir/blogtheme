import "@babel/polyfill";
import React from "react";
import { render, hydrate } from "react-dom";
import { Provider } from "react-redux";
import Loadable from "react-loadable";
import { Frontload } from "react-frontload";
import { Router } from "react-router-dom";
import createStore from "./store";
import * as serviceWorker from "./serviceWorker";
import 'react-quill/dist/quill.snow.css';
import 'react-toastify/dist/ReactToastify.min.css';
import "./app/styles/main.scss";
import App from "./app";
import rootSaga from "./rootSagas";

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

// Create a store and get back itself and its history object
const { store, history } = createStore();
store.runSaga(rootSaga);

// Running locally, we should run on a <ConnectedRouter /> rather than on a <StaticRouter /> like on the server
// Let's also let React Frontload explicitly know we're not rendering on the server here
const Application = (
  <Provider store={store}>
    <Router history={history}>
      <Frontload noServerRender={true}>
        <App />
      </Frontload>
    </Router>
  </Provider>
);

const root = document.querySelector("#root");

if (root.hasChildNodes() === true) {
  // If it's an SSR, we use hydrate to get fast page loads by just
  // attaching event listeners after the initial render
  Loadable.preloadReady().then(() => {
    hydrate(Application, root);
  });
} else {
  // If we're not running on the server, just render like normal
  render(Application, root);
}
