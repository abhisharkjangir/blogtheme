import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ "./home"),
  loading: () => null
});


const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: "notfound" */ "./notfound"),
  loading: () => null
});

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
);
