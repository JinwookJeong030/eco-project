import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as commuAPI from '../lib/api/commu';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'commus/INITIALIZE'; // 모든 내용 초기화



const CHANGE_FIELD = 'commus/CHANGE_FIELD'; // 특정 key 값 바꾸기


const [
  LIST_COMMUS,
  LIST_COMMUS_SUCCESS,
  LIST_COMMUS_FAILURE,
] = createRequestActionTypes('commus/LIST_COMMUS');
const [
    LIST_MY_COMMUS,
    LIST_MY_COMMUS_SUCCESS,
    LIST_MY_COMMUS_FAILURE,
  ] = createRequestActionTypes('commus/LIST_MY_COMMUS');
  


export const initialize = createAction(INITIALIZE);

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const listCommus = createAction(
    LIST_COMMUS,
  ({ search_type, search_contents, page }) => ({search_type, search_contents, page }),
);
export const listMyCommus = createAction(
    LIST_MY_COMMUS,
  ({ page }) => ({ page }),
);


const listCommusSaga = createRequestSaga(LIST_COMMUS, commuAPI.listCommus);
const listMyCommusSaga = createRequestSaga(LIST_MY_COMMUS, commuAPI.listMyCommus);

export function* commusSaga() {
  yield takeLatest(LIST_COMMUS, listCommusSaga);
  yield takeLatest(LIST_MY_COMMUS, listMyCommusSaga);
}



const initialState = {
  search_type:"title",
  search_contents: null,
  myCommusLastPage:null,
  myCommusPage:1,
  myCommus: null,
  commusLastPage:null,
  commusPage:1,
  commus: null,
  myCommuError: null,
  commuError: null,
};

const classList = handleActions(
  {
    [INITIALIZE]: state => initialState, // initialState를 넣으면 초기 상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [LIST_COMMUS_SUCCESS]: (state, { payload: commus }) => ({
      ...state,
      commus: commus.result.commus,
      commusLastPage: commus.result.lastPage,
    }),
    [LIST_COMMUS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      commuError: error,
    }),
    [LIST_MY_COMMUS_SUCCESS]: (state, { payload: myCommus }) => ({
        ...state,
        myCommus: myCommus.result.myCommus,
        myCommusLastPage: myCommus.result.lastPage,

      }),
    [LIST_MY_COMMUS_FAILURE]: (state, { payload: error }) => ({
        ...state,
        myCommuError: error,
    }),
  },
  initialState,
);

export default classList;