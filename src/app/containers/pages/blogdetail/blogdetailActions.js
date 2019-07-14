import {
  FETCHING_BLOG_DETAIL,
  FETCH_BLOG_DETAIL,
  FETCH_BLOG_DETAIL_SUCCESS,
  FETCH_BLOG_DETAIL_ERROR,
  RESET_BLOG_DETAIL
} from "./blogdetailConstants";

// Blog Detail
export const fetchBlogDeatil = blogId => ({ type: FETCH_BLOG_DETAIL, blogId });
export const fetchingBlogDeatil = () => ({
  type: FETCHING_BLOG_DETAIL
});
export const fetchBlogDeatilSuccess = data => ({
  type: FETCH_BLOG_DETAIL_SUCCESS,
  data
});
export const fetchBlogDeatilError = data => ({
  type: FETCH_BLOG_DETAIL_ERROR,
  data
});
export const resetBlogDetail = () => ({ type: RESET_BLOG_DETAIL });
