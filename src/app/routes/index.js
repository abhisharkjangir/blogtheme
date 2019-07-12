import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import {
  fetchCategory,
  fetchTrendingBlogs
} from "../containers/app/appActions";

const Home = Loadable({
  loader: () =>
    import(/* webpackChunkName: "home" */ "../containers/pages/home"),
  loading: () => null,
  modules: ["home"]
});

const NotFound = Loadable({
  loader: () =>
    import(/* webpackChunkName: "notfound" */ "../containers/pages/notfound"),
  loading: () => null,
  modules: ["notfound"]
});

export const Routes = [
  {
    path: "/",
    component: Home,
    fetchRouteData: [fetchCategory, fetchTrendingBlogs],
    exact: true
  },
  {
    component: NotFound
  }
];

export default () => (
  <Switch>
    {Routes.map((route, index) => (
      <Route key={index} {...route} />
    ))}
  </Switch>
);
