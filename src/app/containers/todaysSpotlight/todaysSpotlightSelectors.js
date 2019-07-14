import { createSelector } from "reselect";
import { TODAYS_SPOTLIGHT_STATE_KEY } from "./todaysSpotlightConstants";

// Select App State
export const todaysSpotlightState = state =>
  state.get(TODAYS_SPOTLIGHT_STATE_KEY);

// Today's Spotlight Selectors
export const selectTodaysSpolightBlogsIsFetching = createSelector(
  todaysSpotlightState,
  state => state.get("isFetching")
);
export const selectTodaysSpolightBlogsList = createSelector(
  todaysSpotlightState,
  state => state && state.get("list").toJS()
);
export const selectTodaysSpolightBlogsError = createSelector(
  todaysSpotlightState,
  state => state.get("error")
);
