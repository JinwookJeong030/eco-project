import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as postsAPI from '../lib/api/post';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_REPLYS,
  LIST_REPLYS_SUCCESS,
  LIST_REPLYS_FAILURE,
] = createRequestActionTypes('replys/LIST_POSTS');

export const listReplys = createAction(
    LIST_REPLYS,
  ({ user_name, page }) => ({  user_name, page }),
);

const listReplysSaga = createRequestSaga(LIST_REPLYS, postsAPI.listReplys);
export function* replysSaga() {
  yield takeLatest(LIST_REPLYS, listReplysSaga);
}

const initialState = {
  replys: null,
  error: null,
};

const replys = handleActions(
  {
    [LIST_REPLYS_SUCCESS]: (state, { payload: replys }) => ({
      ...state,
      replys: replys.result.replys,
    }),
    [LIST_REPLYS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default replys;