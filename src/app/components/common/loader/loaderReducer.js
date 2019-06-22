import { fromJS } from "immutable";

import {
  SHOW_LOADER,
  HIDE_LOADER
} from "./loaderConstants";


const loaderInitialState = fromJS({
  value: false
});

export default (state = loaderInitialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return state.set("value", true).set("message", action.data);
    case HIDE_LOADER:
    return state.set("value", false).set("message", undefined);
    default:
      return state;
  }
};
