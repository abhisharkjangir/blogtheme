import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import {
  fetchCategory,
  fetchTrendingBlogs
} from "../containers/app/appActions";
import { fetchTodaySpotlight } from "../containers/todaysSpotlight/todaysSpotlightActions";

const Loading = props => {
  if (props.error) {
    return (
      <div>
        Error! <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else if (props.pastDelay) {
    return <div>.</div>;
  } else {
    return null;
  }
};

const Home = Loadable({
  loader: () =>
    import(/* webpackChunkName: "home" */ "../containers/pages/home"),
  loading: () => Loading,
  modules: ["home"]
});

const NotFound = Loadable({
  loader: () =>
    import(/* webpackChunkName: "notfound" */ "../containers/pages/notfound"),
  loading: () => Loading,
  modules: ["notfound"]
});

export const Routes = [
  {
    path: "/",
    component: Home,
    fetchRouteData: [fetchCategory, fetchTrendingBlogs, fetchTodaySpotlight],
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
