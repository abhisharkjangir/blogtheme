import {
  FETCH_TODAY_SPOTLIGHT,
  FETCHING_TODAY_SPOTLIGHT,
  FETCH_TODAY_SPOTLIGHT_SUCCESS,
  FETCH_TODAY_SPOTLIGHT_ERROR
} from "./todaysSpotlightConstants";

// Today's Spotlight
export const fetchTodaySpotlight = () => ({ type: FETCH_TODAY_SPOTLIGHT });
export const fetchingTodaySpotlight = () => ({
  type: FETCHING_TODAY_SPOTLIGHT
});
export const fetchTodaySpotlightSuccess = data => ({
  type: FETCH_TODAY_SPOTLIGHT_SUCCESS,
  data
});
export const fetchTodaySpotlightError = data => ({
  type: FETCH_TODAY_SPOTLIGHT_ERROR,
  data
});
