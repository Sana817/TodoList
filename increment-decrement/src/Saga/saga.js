// sagas.js
import { delay } from "redux-saga/effects";
import { put, takeEvery } from "redux-saga/effects";

function* incrementAsync() {
  yield delay(1000); // Simulate async delay
  yield put({ type: "INCREMENT" });
}

function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export default watchIncrementAsync;
