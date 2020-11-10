import createRequestSaga,{createRequestActionTypes} from "../lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as postAPI from "../lib/api/post";

const [
    GET_POST,
    GET_POST_SUCCESS,
    GET_POST_FAILURE
] = createRequestActionTypes("post/GET_POST");

export const getPost = createAction(GET_POST);

const getPostSaga =createRequestSaga(GET_POST,postAPI.getPost);

export function* postSaga() {
  yield takeLatest(GET_POST, getPostSaga);
}
// export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

const initState = {
  post: null,
  error: null,
};

const user = handleActions(
  {
    [GET_POST_SUCCESS]: (state, { payload: posts }) => ({
      ...state,
      posts,
    }),
    [GET_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initState
);

export default user;
