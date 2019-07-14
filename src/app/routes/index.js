import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import {
  fetchCategory,
  fetchTrendingBlogs
} from "../containers/app/appActions";
import { fetchTodaySpotlight } from "../containers/todaysSpotlight/todaysSpotlightActions";
import { fetchBlogDeatil } from "../containers/pages/blogdetail/blogdetailActions";

const Loading = <span />;

const Home = Loadable({
  loader: () =>
    import(/* webpackChunkName: "home" */ "../containers/pages/home"),
  loading: () => Loading,
  modules: ["home"]
});

const BlogDeatail = Loadable({
  loader: () =>
    import(/* webpackChunkName: "blogdeatil" */ "../containers/pages/blogdetail"),
  loading: () => Loading,
  modules: ["blogdeatil"]
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
    path: "/blog/:blogName/:blogId",
    component: BlogDeatail,
    fetchRouteData: [fetchBlogDeatil, fetchCategory],
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
