import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as commuAPI from '../lib/api/commu';
import { takeLatest } from 'redux-saga/effects';

const [
  READ_COMMU,
  READ_COMMU_SUCCESS,
  READ_COMMU_FAILURE,
] = createRequestActionTypes('commu/READ_COMMU');
const UNLOAD_COMMU = 'commu/UNLOAD_POST'; // 포스트 페이지에서 벗어날 때 데이터 비우기

export const readCommu = createAction(READ_COMMU, id => id);
export const unloadPost = createAction(UNLOAD_COMMU);

const readCommuSaga = createRequestSaga(READ_COMMU, commuAPI.readCommu);
export function* postSaga() {
  yield takeLatest(READ_COMMU, readCommuSaga);
}
const initialState = {
  commu: null,
  error: null,
};

const post = handleActions(
  {
    [READ_COMMU_SUCCESS]: (state, { payload: post }) => ({
      ...state,
       post: post.result.post,
    }),
    [READ_COMMU_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_COMMU]: () => initialState,
  },
  initialState,
);

export default post;