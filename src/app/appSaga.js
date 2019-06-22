import { takeLatest, put, call } from "redux-saga/effects";
import { FETCH_CATEGORY } from "./appConstants";
import {
  fetchingCategory,
  fetchCategorySuccess,
  fetchCategoryError
} from "./appActions";
import ApiService from "./utils/services";

function* fetchCategory() {
  try {
    yield put(fetchingCategory());
    const {
      data: { success, message, data }
    } = yield call(ApiService, {
      method: "GET",
      url: "categories"
    });

    if (success) {
      return yield put(fetchCategorySuccess(data));
    } else {
      return yield put(fetchCategoryError(message));
    }
  } catch (err) {
    return yield put(fetchCategoryError(err));
  }
}

export function* appSaga() {
  yield takeLatest(FETCH_CATEGORY, fetchCategory);
}

export default appSaga;
