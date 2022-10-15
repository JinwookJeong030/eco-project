import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as commuAPI from '../lib/api/ranking';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'ranking/INITIALIZE'; // 모든 내용 초기화



const CHANGE_FIELD = 'ranking/CHANGE_FIELD'; // 특정 key 값 바꾸기


const [
  MY_RANKING,
  MY_RANKING_SUCCESS,
  MY_RANKING_FAILURE,
] = createRequestActionTypes('ranking/MY_RANKING');
const [
    LIST_RANKING,
    LIST_RANKING_SUCCESS,
    LIST_RANKING_FAILURE,
] = createRequestActionTypes('ranking/LIST_RANKING');
const [
    LIST_COMMU_MEMBER,
    LIST_COMMU_MEMBER_SUCCESS,
    LIST_COMMU_MEMBER_FAILURE,
] = createRequestActionTypes('ranking/LIST_COMMU_MEMBER');
  


export const initialize = createAction(INITIALIZE);

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const listRanking = createAction(
    LIST_RANKING,
  ({ search_type, search_contents, page }) => ({search_type, search_contents, page }),
);
export const listMyRanking = createAction(
    MY_RANKING,
  ({ user_id }) => ({ user_id }),
);
export const listCommuMember = createAction(
    LIST_COMMU_MEMBER,
  ({ commu_id , page }) => ({commu_id , page }),
);

const listRankingSaga = createRequestSaga(LIST_RANKING, commuAPI.readRanking);
const listMyRankingSaga = createRequestSaga(MY_RANKING, commuAPI.readMyRanking);
const listCommuMemberSaga = createRequestSaga(LIST_COMMU_MEMBER, commuAPI.readCommuMember);


export function* rankingSaga() {
  yield takeLatest(LIST_RANKING, listRankingSaga);
  yield takeLatest(MY_RANKING, listMyRankingSaga);
  yield takeLatest(LIST_COMMU_MEMBER, listCommuMemberSaga);
}



const initialState = {
  search_type:"name",
  search_contents: null,
  lastPage:null,
  page:1,
  ranking:null,
  rankingError:null,
  myRanking:null,
  myRankingError:null,
  commuMembers:null,
  commuMembersError:null,
};

const classList = handleActions(
  {
    [INITIALIZE]: state => initialState, // initialState를 넣으면 초기 상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [MY_RANKING_SUCCESS]: (state, { payload: myRanking }) => ({
      ...state,
      myRanking: myRanking.result.myRanking
    }),
    [MY_RANKING_FAILURE]: (state, { payload: error }) => ({
      ...state,
      myRankingError: error,
    }),
    [LIST_RANKING_SUCCESS]: (state, { payload: ranking }) => ({
        ...state,
        ranking: ranking.result.ranking,
        lastPage: ranking.result.lastPage,

      }),
    [LIST_RANKING_FAILURE]: (state, { payload: error }) => ({
        ...state,
        rankingError: error,
    }),
    [LIST_COMMU_MEMBER_SUCCESS]: (state, { payload: commuMembers }) => ({
        ...state,
        commuMembers: commuMembers.result.commuMembers,
        lastPage: commuMembers.result.lastPage,

      }),
    [LIST_COMMU_MEMBER_FAILURE]: (state, { payload: error }) => ({
        ...state,
        commuMembersError: error,
    }),
  },
  initialState,
);

export default classList;