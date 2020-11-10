import { combineReducers } from "redux";
import loading from "./loading";
import modal from "./modal";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  loading,
  modal,
});

export function* rootSaga() {
  yield all([]);
}

export default rootReducer;
