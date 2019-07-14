import { fromJS } from "immutable";
import {
  FETCHING_BLOG_DETAIL,
  FETCH_BLOG_DETAIL_SUCCESS,
  FETCH_BLOG_DETAIL_ERROR,
  RESET_BLOG_DETAIL
} from "./blogdetailConstants";

const initialState = fromJS({
  isFetching: false,
  data: fromJS({}),
  error: null
});

export const blogDetailReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case FETCHING_BLOG_DETAIL:
      return state.set("isFetching", true);
    case FETCH_BLOG_DETAIL_SUCCESS:
      return state.set("isFetching", false).set("data", fromJS(data));
    case FETCH_BLOG_DETAIL_ERROR:
      return state.set("isFetching", false).set("error", data);
    case RESET_BLOG_DETAIL:
      return initialState;
    default:
      return state;
  }
};

export default blogDetailReducer;
