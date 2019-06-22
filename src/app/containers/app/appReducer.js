import { fromJS } from "immutable";

import {
  SET_DATA,
  FETCHING_CATEGORY,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR
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
