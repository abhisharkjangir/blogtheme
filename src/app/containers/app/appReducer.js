import { fromJS } from "immutable";

import {
  SET_DATA,
  FETCHING_CATEGORY,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR,
  FETCHING_TRENDING_BLOGS,
  FETCH_TRENDING_BLOGS_SUCCESS,
  FETCH_TRENDING_BLOGS_ERROR
} from "./appConstants";

const appInitialState = fromJS({});

export default (state = appInitialState, { type, data }) => {
  switch (type) {
    case SET_DATA:
      return state.merge(fromJS(data));
    default:
      return state;
  }
};

const categoryInitialState = fromJS({
  isFetching: false,
  list: fromJS([]),
  error: null
});

export const categoryReducer = (
  state = categoryInitialState,
  { type, data }
) => {
  switch (type) {
    case FETCHING_CATEGORY:
      return state.set("isFetching", true);
    case FETCH_CATEGORY_SUCCESS:
      return state.set("isFetching", false).set("list", fromJS(data));
    case FETCH_CATEGORY_ERROR:
      return state.set("isFetching", false).set("error", data);
    default:
      return state;
  }
};

const trendingBlogsInitialState = fromJS({
  isFetching: false,
  list: fromJS([]),
  error: null
});

export const trendingBlogsReducer = (
  state = trendingBlogsInitialState,
  { type, data }
) => {
  switch (type) {
    case FETCHING_TRENDING_BLOGS:
      return state.set("isFetching", true);
    case FETCH_TRENDING_BLOGS_SUCCESS:
      return state.set("isFetching", false).set("list", fromJS(data));
    case FETCH_TRENDING_BLOGS_ERROR:
      return state.set("isFetching", false).set("error", data);
    default:
      return state;
  }
};
