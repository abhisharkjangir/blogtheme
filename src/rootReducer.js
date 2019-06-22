import { combineReducers } from "redux-immutable";

// App Reducer
import { APP_STATE_KEY } from "./app/appConstants";
import AppReducer from "./app/appReducer";

// Home Reducer
import { HOME_STATE_KEY } from "./app/routes/home/HomeConstants";
import HomeReducer from "./app/routes/home/HomeReducer";

// Loader Reducer
import { LOADER_STATE_KEY } from "./app/components/common/loader/loaderConstants";
import loaderReducer from "./app/components/common/loader/loaderReducer";


export default combineReducers({
  [APP_STATE_KEY]: AppReducer,
  [LOADER_STATE_KEY]: loaderReducer,
  [HOME_STATE_KEY]: HomeReducer,
});
