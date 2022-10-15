import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as postsAPI from '../lib/api/commu';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'write/INITIALIZE'; // 모든 내용 초기화
const INITWRITE = 'write/INITWRITE'; // 글내용만 초기화
const CHANGE_FIELD = 'write/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [
  WRITE_COMMU,
  WRITE_COMMU_SUCCESS,
  WRITE_COMMU_FAILURE,
] = createRequestActionTypes('commuMG/WRITE_COMMU'); 
const [
  EDIT_COMMU,
  EDIT_COMMU_SUCCESS,
  EDIT_COMMU_FAILURE,
] = createRequestActionTypes('commuMG/EDIT_COMMU'); 
const [
  DELETE_COMMU,
  DELETE_COMMU_SUCCESS,
  DELETE_COMMU_FAILURE,
] = createRequestActionTypes('commuMG/DELETE_COMMU'); 


const SET_ORIGINAL_COMMU = 'commuMG/SET_ORIGINAL_COMMU';

export const initialize = createAction(INITIALIZE);
export const initWrite = createAction(INITWRITE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writeCommu = createAction(WRITE_COMMU, ({ commu_name, commu_contents,
    commu_region}) => ({
  commu_name,
  commu_contents,
  commu_region,
}));


export const editCommu = createAction(EDIT_COMMU, ({ commu_id, commu_name, 
    commu_contents, commu_region }) => ({
        commu_id,
  commu_name,
  commu_contents,
  commu_region
}));
export const deleteCommu = createAction(DELETE_COMMU, id => id);
export const setOriginalCommu = createAction(SET_ORIGINAL_COMMU, commu => commu);


// 사가 생성
const writeCommuSaga = createRequestSaga(WRITE_COMMU, postsAPI.writeCommu);
const editCommuSaga = createRequestSaga(EDIT_COMMU, postsAPI.editCommu);
const deleteCommuSaga = createRequestSaga(DELETE_COMMU, postsAPI.deleteCommu);

export function* writeSaga() {
  yield takeLatest(WRITE_COMMU, writeCommuSaga);
  yield takeLatest(EDIT_COMMU, editCommuSaga);
  yield takeLatest(DELETE_COMMU, deleteCommuSaga);
}




const initialState = {
  commu_title: '',
  commu_contents: '',
  commu_category: 1,
  commu_image:[],
  commu: null,
  commuError: null,
  originalCommuId: null,
};

const writeCM = handleActions(
  {
    [INITIALIZE]: state => initialState, // initialState를 넣으면 초기 상태로 바뀜
    [INITWRITE]: state =>({
      ...state,
      commu_title: '',
      commu_contents: '',
      commu_category: 1,
      commu_image:[],
      commu: null,
      commuError: null,
      originalCommuId: null,
    }),

    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [WRITE_COMMU]: state => ({
      ...state,
      // post와 postError를 초기화
      categorys:[],
      categorysError:null,
      mission:null,
      missionError:null,
      post: null,
      postError: null,
    }),
   
    [WRITE_COMMU_SUCCESS]: (state, { payload: commu }) => ({
      ...state,
      commu,
    }),
   
    [WRITE_COMMU_FAILURE]: (state, { payload: commuError }) => ({
      ...state,
      commuError,
    }),
    [EDIT_COMMU]: state => ({
      ...state,
      commu: null,
      commuError: null,
    }),

    [EDIT_COMMU_SUCCESS]: (state, { payload: commu }) => ({
      ...state,
      commu,
    }),

    [EDIT_COMMU_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
  
    [DELETE_COMMU_SUCCESS]: (state, { payload: commu }) => ({
      ...state,
      commu,
    }),
  
    [DELETE_COMMU_FAILURE]: (state, { payload: commuError }) => ({
      ...state,
      commuError,
    }),
    [SET_ORIGINAL_COMMU]:(state, {payload:commu})=>({
      ...state,
      commu_name: commu.commu_name,
      commu_contents: commu.commu_contents,
      commu_region: commu.commu_region,
      originalCommuId: commu.commu_id,
    })
  },
  initialState,
)

export default writeCM;