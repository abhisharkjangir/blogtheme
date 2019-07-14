import { takeLatest, put, call } from "redux-saga/effects";
import ApiService from "../../../utils/services";
import { FETCH_BLOG_DETAIL } from "./blogdetailConstants";
import {
  fetchingBlogDeatil,
  fetchBlogDeatilSuccess,
  fetchBlogDeatilError
} from "./blogdetailActions";

function* fetchBlogDetail(payload) {
  try {
    yield put(fetchingBlogDeatil());
    const {
      data: { success, message, data }
    } = yield call(ApiService, {
      method: "GET",
      url: "blogDetails",
      appendUrl: `/${payload.blogId}`
    });

    if (success) {
      return yield put(fetchBlogDeatilSuccess(data));
    } else {
      return yield put(fetchBlogDeatilError(message));
    }
  } catch (err) {
    return yield put(fetchBlogDeatilError(err));
  }
}

export function* blogDetailSaga() {
  yield takeLatest(FETCH_BLOG_DETAIL, fetchBlogDetail);
}

export default blogDetailSaga;
