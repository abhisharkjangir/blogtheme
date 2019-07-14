import { combineReducers } from "redux-immutable";

// App & Category Reducer
import {
  APP_STATE_KEY,
  CATEGORY_STATE_KEY,
  TRENDING_BLOGS_STATE_KEY
} from "./app/containers/app/appConstants";
import AppReducer, {
  categoryReducer,
  trendingBlogsReducer
} from "./app/containers/app/appReducer";

// Loader Reducer
import { LOADER_STATE_KEY } from "./app/components/common/loader/loaderConstants";
import loaderReducer from "./app/components/common/loader/loaderReducer";

// Today's Spotlight
import { TODAYS_SPOTLIGHT_STATE_KEY } from "./app/containers/todaysSpotlight/todaysSpotlightConstants";
import todaysSpotlightReducer from "./app/containers/todaysSpotlight/todaysSpotlightReducer";

export default combineReducers({
  [APP_STATE_KEY]: AppReducer,
  [LOADER_STATE_KEY]: loaderReducer,
  [CATEGORY_STATE_KEY]: categoryReducer,
  [TRENDING_BLOGS_STATE_KEY]: trendingBlogsReducer,
  [TODAYS_SPOTLIGHT_STATE_KEY]: todaysSpotlightReducer
});
