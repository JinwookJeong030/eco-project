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

//커뮤 미션 조회
const [
  READ_COMMU_MISSION,
  READ_COMMU_MISSION_SUCCESS,
  READ_COMMU_MISSION_FAILURE,
] = createRequestActionTypes('commu/READ_COMMU_MISSION');
//커뮤 미션 선택
const [
  SELECT_COMMU_MISSION,
  SELECT_COMMU_MISSION_SUCCESS,
  SELECT_COMMU_MISSION_FAILURE,
] = createRequestActionTypes('commu/SELECT_COMMU_MISSION');


const UNLOAD_COMMU = 'commu/UNLOAD_POST'; // 포스트 페이지에서 벗어날 때 데이터 비우기

export const readCommu = createAction(READ_COMMU, id => id);
export const unloadPost = createAction(UNLOAD_COMMU);

const readCommuSaga = createRequestSaga(READ_COMMU, commuAPI.readCommu);
export function* commuSaga() {
  yield takeLatest(READ_COMMU, readCommuSaga);
}
const initialState = {
  commu: null,
  error: null,
  allMission:null,
  errorAllMission:null,
  cMission:null,
  errorCMission:null,

};

const post = handleActions(
  {
    [READ_COMMU_SUCCESS]: (state, { payload: commu }) => ({
      ...state,
      commu: commu.result.commu,
    }),
    [READ_COMMU_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [READ_COMMU_MISSION_SUCCESS]: (state, { payload: commu }) => ({
      ...state,
       allMission: commu.result.allMission,
    }),
    [READ_COMMU_MISSION_FAILURE]: (state, { payload: errorAllMission }) => ({
      ...state,
      errorAllMission,
    }),
    [UNLOAD_COMMU]: () => initialState,
  },
  initialState,
);

export default post;