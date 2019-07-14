import { takeLatest, put, call } from "redux-saga/effects";
import { FETCH_TODAY_SPOTLIGHT } from "./todaysSpotlightConstants";
import {
  fetchingTodaySpotlight,
  fetchTodaySpotlightSuccess,
  fetchTodaySpotlightError
} from "./todaysSpotlightActions";
import ApiService from "../../utils/services";

function* fetchTodaysSpotlight() {
  try {
    yield put(fetchingTodaySpotlight());
    const {
      data: { success, message, data }
    } = yield call(ApiService, {
      method: "POST",
      url: "blogs",
      data: { isFeatured: "1", offset: 0, limit: 20 }
    });

    if (success) {
      return yield put(fetchTodaySpotlightSuccess(data));
    } else {
      return yield put(fetchTodaySpotlightError(message));
    }
  } catch (err) {
    return yield put(fetchTodaySpotlightError(err));
  }
}

export function* todaysSpotlightSaga() {
  yield takeLatest(FETCH_TODAY_SPOTLIGHT, fetchTodaysSpotlight);
}

export default todaysSpotlightSaga;
