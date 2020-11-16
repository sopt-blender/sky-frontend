import createRequestSaga,{createRequestActionTypes} from "../lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as postAPI from "../lib/api/post";

const [
    GET_POST,
    GET_POST_SUCCESS,
    GET_POST_FAILURE
] = createRequestActionTypes("post/GET_POST");

const [
  GET_ADDIT_POST,
  GET_ADDIT_POST_SUCCESS,
  GET_ADDIT_POST_FAILURE
] = createRequestActionTypes("post/GET_ADDIT_POST");

export const getPost = createAction(GET_POST);
export const getAddPost = createAction(GET_ADDIT_POST);

const getPostSaga = createRequestSaga(GET_POST,postAPI.getPost);
const getAddPostSaga = createRequestSaga(GET_ADDIT_POST,postAPI.getAddPost);

export function* postSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_ADDIT_POST, getAddPostSaga);
}

const initState = {
  posts: null,
  error: null,
};

const post = handleActions(
  {
    [GET_POST_SUCCESS]: (state, { payload: posts }) => ({
      ...state,
      posts
    }),
    [GET_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [GET_ADDIT_POST_SUCCESS]: (state, { payload: posts }) => ({
      ...state,
      posts: [...state.posts,...posts]
    }),
    [GET_ADDIT_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initState
);

export default post;
