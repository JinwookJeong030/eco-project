import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as postsAPI from '../lib/api/post';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'replys/INITIALIZE'; 
const CHANGE_FIELD = 'replys/CHANGE_FIELD';
const [
  LIST_REPLYS,
  LIST_REPLYS_SUCCESS,
  LIST_REPLYS_FAILURE,
] = createRequestActionTypes('replys/LIST_POSTS');


const [
  WRITE_REPLY,
  WRITE_REPLY_SUCCESS,
  WRITE_REPLY_FAILURE,
] = createRequestActionTypes('replys/WRITE_REPLYS');


const UNLOAD_REPLYS = 'replys/UNLOAD_REPLYS'; // 포스트 페이지에서 벗어날 때 데이터 비우기

export const initialize = createAction(INITIALIZE);
export const listReplys = createAction(
    LIST_REPLYS, id=>id
);

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const unloadReplys = createAction(UNLOAD_REPLYS);
export const writeReply = createAction(WRITE_REPLY, ({ reply_post, reply_contents,reply_type, reply_order,reply_group_id }) => ({
  reply_post,
  reply_contents,
  reply_type,
  reply_order,
  reply_group_id
}));

const writeReplySaga = createRequestSaga(WRITE_REPLY, postsAPI.writeReply);
const listReplysSaga = createRequestSaga(LIST_REPLYS, postsAPI.listReplys);
export function* replysSaga() {
  yield takeLatest(LIST_REPLYS, listReplysSaga);
  yield takeLatest(WRITE_REPLY,writeReplySaga);
}

const initialState = {
  addReplyState: null,
  reply_contents: null,
  reply_type: 0,
  reply_order: 0,
  reply_group_id: 0,
  reply:null,
  replyError:null,
  replys: null,
  replysError: null,
 
};

const replys = handleActions(
  {

    [CHANGE_FIELD]:(state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [LIST_REPLYS_SUCCESS]: (state, { payload: replys }) => ({
      ...state,
      replys: replys.result.replys,
    }),
    [LIST_REPLYS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [WRITE_REPLY]: state => ({
      ...state,
      reply: null,
      replyError: null,
    }),
    [WRITE_REPLY_SUCCESS]: (state, { payload: reply }) => ({
      ...state,
      reply,
    }),

    [WRITE_REPLY_FAILURE]: (state, { payload: replyError }) => ({
      ...state,
      replyError,
    }),


    [UNLOAD_REPLYS]: () => initialState,
    
  },
  initialState,
);

export default replys;