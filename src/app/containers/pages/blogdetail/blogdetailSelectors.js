import { createSelector } from "reselect";
import { BLOG_DETAIL_STATE_KEY } from "./blogdetailConstants";

// Select blog deatil State
export const blogDetailState = state => state.get(BLOG_DETAIL_STATE_KEY);

// Blog Detail Selectors
export const selectBlogDetailIsFetching = createSelector(
  blogDetailState,
  state => state.get("isFetching")
);
export const selectBlogDetail = createSelector(
  blogDetailState,
  state => state && state.get("data").toJS()
);
export const selectBlogDetailError = createSelector(
  blogDetailState,
  state => state.get("error")
);
