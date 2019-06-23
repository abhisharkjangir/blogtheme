import { takeLatest, put, call } from "redux-saga/effects";
import { FETCH_CATEGORY, FETCH_TRENDING_BLOGS } from "./appConstants";
import {
  fetchingCategory,
  fetchCategorySuccess,
  fetchCategoryError,
  fetchTrendingBlogsSuccess,
  fetchTrendingBlogsError,
  fetchingTrendingBlogs
} from "./appActions";
import ApiService from "../../utils/services";

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

function* fetchTrendingBlogs() {
  try {
    yield put(fetchingTrendingBlogs());
    const {
      data: { success, message, data }
    } = yield call(ApiService, {
      method: "POST",
      url: "blogs",
      data: { isTrending: "1", offset: 0, limit: 10 }
    });

    if (success) {
      return yield put(fetchTrendingBlogsSuccess(data));
    } else {
      return yield put(fetchTrendingBlogsError(message));
    }
  } catch (err) {
    return yield put(fetchTrendingBlogsError(err));
  }
}

export function* appSaga() {
  yield takeLatest(FETCH_CATEGORY, fetchCategory);
  yield takeLatest(FETCH_TRENDING_BLOGS, fetchTrendingBlogs);
}

export default appSaga;
