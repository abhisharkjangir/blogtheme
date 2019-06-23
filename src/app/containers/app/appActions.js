import {
  SET_DATA,
  FETCH_CATEGORY,
  FETCHING_CATEGORY,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR,
  FETCH_TRENDING_BLOGS,
  FETCHING_TRENDING_BLOGS,
  FETCH_TRENDING_BLOGS_SUCCESS,
  FETCH_TRENDING_BLOGS_ERROR
} from "./appConstants";

// APP DATA
export const setAppData = data => ({ type: SET_DATA, data });

// CATEGORY
export const fetchCategory = () => ({ type: FETCH_CATEGORY });
export const fetchingCategory = () => ({ type: FETCHING_CATEGORY });
export const fetchCategorySuccess = data => ({
  type: FETCH_CATEGORY_SUCCESS,
  data
});
export const fetchCategoryError = data => ({
  type: FETCH_CATEGORY_ERROR,
  data
});

// TRENDING CATEGORY
export const fetchTrendingBlogs = () => ({ type: FETCH_TRENDING_BLOGS });
export const fetchingTrendingBlogs = () => ({ type: FETCHING_TRENDING_BLOGS });
export const fetchTrendingBlogsSuccess = data => ({
  type: FETCH_TRENDING_BLOGS_SUCCESS,
  data
});
export const fetchTrendingBlogsError = data => ({
  type: FETCH_TRENDING_BLOGS_ERROR,
  data
});
