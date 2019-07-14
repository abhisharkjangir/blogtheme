import { all } from "redux-saga/effects";
import app from "./app/containers/app/appSaga";
import todaysSpotlightSaga from "./app/containers/todaysSpotlight/todaysSpotlightSaga";

const callSagas = sagas => {
  const calledSagaList = [];
  sagas.forEach(saga => {
    calledSagaList.push(saga());
  });
  return calledSagaList;
};

export default function* rootSaga() {
  yield all([...callSagas([app, todaysSpotlightSaga])]);
}
