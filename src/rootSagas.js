import { all } from "redux-saga/effects";
import app from "./app/containers/app/appSaga";

export default function* rootSaga() {
  yield all([app()]);
}
