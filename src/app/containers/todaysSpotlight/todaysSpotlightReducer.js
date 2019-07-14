import { fromJS } from "immutable";
import {
  FETCHING_TODAY_SPOTLIGHT,
  FETCH_TODAY_SPOTLIGHT_SUCCESS,
  FETCH_TODAY_SPOTLIGHT_ERROR
} from "./todaysSpotlightConstants";

const initialState = fromJS({
  isFetching: false,
  list: fromJS([]),
  error: null
});

export const todaysSpotlightReducer = (
  state = initialState,
  { type, data }
) => {
  switch (type) {
    case FETCHING_TODAY_SPOTLIGHT:
      return state.set("isFetching", true);
    case FETCH_TODAY_SPOTLIGHT_SUCCESS:
      return state.set("isFetching", false).set("list", fromJS(data));
    case FETCH_TODAY_SPOTLIGHT_ERROR:
      return state.set("isFetching", false).set("error", data);
    default:
      return state;
  }
};

export default todaysSpotlightReducer;
