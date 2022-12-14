import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as postsAPI from '../lib/api/post';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'write/INITIALIZE'; // 모든 내용 초기화
const INITWRITE = 'write/INITWRITE'; // 글내용만 초기화
const CHANGE_FIELD = 'write/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [
  WRITE_POST,
  WRITE_POST_SUCCESS,
  WRITE_POST_FAILURE,
] = createRequestActionTypes('write/WRITE_POST'); // 포스트 작성 
const [
  EDIT_POST,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILURE,
] = createRequestActionTypes('write/EDIT_POST'); // 포스트 작성
const [
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
] = createRequestActionTypes('write/DELETE_POST'); // 포스트 작성

const [
  CATEGORYS, 
  CATEGORYS_SUCCESS, 
  CATEGORYS_FAILURE
] = createRequestActionTypes('write/CATEGORY');//카테고리 조회
const [
  MISSION, 
  MISSION_SUCCESS, 
  MISSION_FAILURE
] = createRequestActionTypes('write/MISSION');//미션 조회

const SET_ORIGINAL_POST = 'write/SET_ORIGINAL_POST';

export const initialize = createAction(INITIALIZE);
export const initWrite = createAction(INITWRITE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writePost = createAction(WRITE_POST, ({ post_title, post_contents,post_category, post_mission, formdata, config }) => ({
  post_title,
  post_contents,
  post_category,
  post_mission, 
  formdata, 
  config
}));


export const editPost = createAction(EDIT_POST, ({ post_id, post_title, post_contents, post_category, post_mission }) => ({
  post_id,
  post_title,
  post_contents,
  post_category,
  post_mission
}));
export const deletePost = createAction(DELETE_POST, id => id);

export const categorys = createAction(CATEGORYS);
export const mission = createAction(MISSION);
export const setOriginalPost = createAction(SET_ORIGINAL_POST, post => post);


// 사가 생성
const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
const editPostSaga = createRequestSaga(EDIT_POST, postsAPI.editPost);
const deletePostSaga = createRequestSaga(DELETE_POST, postsAPI.deletePost);
const categorysSaga = createRequestSaga(CATEGORYS, postsAPI.categorysPost);
const missionSaga = createRequestSaga(MISSION, postsAPI.mission);
export function* writeSaga() {
  yield takeLatest(CATEGORYS, categorysSaga);
  yield takeLatest(MISSION, missionSaga);
  yield takeLatest(WRITE_POST, writePostSaga);
  yield takeLatest(EDIT_POST, editPostSaga);
  yield takeLatest(DELETE_POST, deletePostSaga);
}




const initialState = {
  post_title: '',
  post_contents: '',
  post_category: 1,
  post_image:[],
  categorys:[],
  categorysError:null,
  mission:null,
  missionError:null,
  post: null,
  postError: null,
  originalPostId: null,
};

const write = handleActions(
  {
    [INITIALIZE]: state => initialState, // initialState를 넣으면 초기 상태로 바뀜
    [INITWRITE]: state =>({
      ...state,
      post_title: '',
      post_contents: '',
      post_image:[],
      post_category: 1,
      categorysError:null,
      missionError:null,
      postError: null,
      originalPostId: null,
    }),

    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [WRITE_POST]: state => ({
      ...state,
      // post와 postError를 초기화
      categorys:[],
      categorysError:null,
      mission:null,
      missionError:null,
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
    [EDIT_POST]: state => ({
      ...state,
      // post와 postError를 초기화
      categorys:[],
      categorysError:null,
      mission:null,
      missionError:null,
      post: null,
      postError: null,
    }),
    // 포스트 수정 성공
    [EDIT_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    // 포스트 수정 실패
    [EDIT_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
    // 포스트 삭제 성공
    [DELETE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    // 포스트 삭제 실패
    [DELETE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),


    [CATEGORYS]: state => ({
      ...state,
      // post와 postError를 초기화
      categorys:[],
      categorysError:null,
      mission:null,
      missionError:null,
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
    
    [MISSION]: state => ({
      ...state,
      // post와 postError를 초기화
      categorys:[],
      categorysError:null,
      mission:null,
      missionError:null,
      post: null,
      postError: null,
    }),
 
    [MISSION_SUCCESS]: (state, { payload: mission }) => ({
      ...state,
      mission:mission.result.mission,
    }),
   
    [MISSION_FAILURE]: (state, { payload: missionError }) => ({
      ...state,
      missionError,
    }),
    [SET_ORIGINAL_POST]:(state, {payload:post})=>({
      ...state,
      post_title: post.post_title,
      post_contents: post.post_contents,
      post_category: post.post_category,
      post_mission: post.post_mission,
      originalPostId: post.post_id,
    })


  },
  initialState,
)

export default write;