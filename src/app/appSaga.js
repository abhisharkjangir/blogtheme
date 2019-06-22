import { takeLatest } from "redux-saga/effects";

function* app(payload) {
  try {
    yield 'app'
  } catch (error) {}
}

export function* appSaga() {
  yield takeLatest("APP", app);
}

export default appSaga;
