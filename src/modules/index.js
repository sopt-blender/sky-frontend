import { combineReducers } from "redux";
import loading from "./loading";
import post from "./post";
import { all } from "redux-saga/effects";
import {postSaga} from "../modules/post";

const rootReducer = combineReducers({
  loading,
  post
});

export function* rootSaga() {
  yield all([postSaga()]);
}

export default rootReducer;
