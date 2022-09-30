import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as postsAPI from '../lib/api/post';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'write/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'write/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [
  WRITE_POST,
  WRITE_POST_SUCCESS,
  WRITE_POST_FAILURE,
] = createRequestActionTypes('write/WRITE_POST'); // 포스트 작성
const [
  CATEGORYS, 
  CATEGORYS_SUCCESS, 
  CATEGORYS_FAILURE
] = createRequestActionTypes('write/CATEGORY');//카테고리 조회
const [
  MISSIONS, 
  MISSIONS_SUCCESS, 
  MISSIONS_FAILURE
] = createRequestActionTypes('write/MISSION');//카테고리 조회

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writePost = createAction(WRITE_POST, ({ post_title, post_contents,post_category, post_mission }) => ({
  post_title,
  post_contents,
  post_category,
  post_mission
}));
export const categorys = createAction(CATEGORYS);
export const missions = createAction(MISSIONS);
// 사가 생성
const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
const categorysSaga = createRequestSaga(CATEGORYS, postsAPI.categorysPost);
const missionsSaga = createRequestSaga(MISSIONS, postsAPI.missionsPost);
export function* writeSaga() {
  yield takeLatest(CATEGORYS, categorysSaga);
  yield takeLatest(MISSIONS, missionsSaga);
  yield takeLatest(WRITE_POST, writePostSaga);
}




const initialState = {
  post_title: '',
  post_contents: '',
  post_category: 1,
  post_mission:0,
  categorys:[],
  categorysError:null,
  missions:[],
  missionError:null,
  post: null,
  postError: null,
};

const write = handleActions(
  {
    [INITIALIZE]: state => initialState, // initialState를 넣으면 초기 상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [WRITE_POST]: state => ({
      ...state,
      // post와 postError를 초기화
      categorys:[],
      categorysError:null,
      missions:[],
      missionsError:null,
      post: null,
      postError: null,
    }),
    // 포스트 작성 성공
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    // 포스트 작성 실패
    [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
    [CATEGORYS]: state => ({
      ...state,
      // post와 postError를 초기화
      categorys:[],
      categorysError:null,
      missions:[],
      missionsError:null,
      post: null,
      postError: null,
    }),
    // 포스트 작성 성공
    [CATEGORYS_SUCCESS]: (state, { payload: categorys }) => ({
      ...state,
      categorys:categorys.result.categorys,
    }),
    // 포스트 작성 실패
    [CATEGORYS_FAILURE]: (state, { payload: categorysError }) => ({
      ...state,
      categorysError,
    }),
    [MISSIONS]: state => ({
      ...state,
      // post와 postError를 초기화
      categorys:[],
      categorysError:null,
      missions:[],
      missionsError:null,
      post: null,
      postError: null,
    }),
    // 포스트 작성 성공
    [MISSIONS_SUCCESS]: (state, { payload: missions }) => ({
      ...state,
      categorys:missions.result.missions,
    }),
    // 포스트 작성 실패
    [MISSIONS_FAILURE]: (state, { payload: missionsError }) => ({
      ...state,
      missionsError,
    }),


  },
  initialState,
)

export default write;