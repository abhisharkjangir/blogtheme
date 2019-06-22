import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import { fetchCategory } from "../appActions";

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ "./home"),
  loading: () => null
});

const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: "notfound" */ "./notfound"),
  loading: () => null
});

export const Routes = [
  {
    path: "/",
    component: Home,
    fetchRouteData: [fetchCategory]
  },
  {
    path: "/not-found",
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
