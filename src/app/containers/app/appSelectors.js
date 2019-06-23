import { createSelector } from "reselect";
import {
  APP_STATE_KEY,
  CATEGORY_STATE_KEY,
  TRENDING_BLOGS_STATE_KEY
} from "./appConstants";

// Select App State
export const appState = state => state.get(APP_STATE_KEY);

// Category Selectors
export const categoryState = state => state.get(CATEGORY_STATE_KEY);
export const selectCategoryIsFetching = createSelector(
  categoryState,
  state => state.get("isFetching")
);
export const selectCategoryList = createSelector(
  categoryState,
  state => state && state.get("list").toJS()
);
export const selectCategoryError = createSelector(
  categoryState,
  state => state.get("error")
);

// Trending Blogs Selectors
export const trendingBlogsState = state => state.get(TRENDING_BLOGS_STATE_KEY);
export const selectTrendingBlogsIsFetching = createSelector(
  trendingBlogsState,
  state => state.get("isFetching")
);
export const selectTrendingBlogsList = createSelector(
  trendingBlogsState,
  state => state && state.get("list").toJS()
);
export const selectTrendingBlogsError = createSelector(
  trendingBlogsState,
  state => state.get("error")
);
