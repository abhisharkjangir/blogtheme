import { fromJS } from "immutable";

import { SET_DATA } from "./appConstants";

const appInitialState = fromJS({});

export default (state = appInitialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return state.merge(fromJS(action.data));
    default:
      return state;
  }
};
