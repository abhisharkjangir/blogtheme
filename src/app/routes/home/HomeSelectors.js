import { createSelector } from "reselect";
import { HOME_STATE_KEY } from "./HomeConstants";

export const makeSelectHomeState = state => {
  return state[HOME_STATE_KEY];
};

export const selectUsers = createSelector(
  makeSelectHomeState,
  homeState => homeState["users"]
);
