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

// Home Reducer
import { HOME_STATE_KEY } from "./app/containers/pages/home/homeConstants";
import HomeReducer from "./app/containers/pages/home/homeReducer";

// Loader Reducer
import { LOADER_STATE_KEY } from "./app/components/common/loader/loaderConstants";
import loaderReducer from "./app/components/common/loader/loaderReducer";

export default combineReducers({
  [APP_STATE_KEY]: AppReducer,
  [LOADER_STATE_KEY]: loaderReducer,
  [HOME_STATE_KEY]: HomeReducer,
  [CATEGORY_STATE_KEY]: categoryReducer,
  [TRENDING_BLOGS_STATE_KEY]: trendingBlogsReducer
});
