import { createSelector } from "reselect";
import { LOADER_STATE_KEY } from "./loaderConstants";

// Select App State
export const loaderState = state => state.get(LOADER_STATE_KEY);

// Select loader -> value
export const makeSelectLoaderValue = () =>
  createSelector(
    loaderState,
    loader => loader.get("value")
  );

  // Select loader -> message
export const makeSelectLoaderMessage = () =>
  createSelector(
    loaderState,
    loader => loader.get("message")
  );
