import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as postsAPI from '../lib/api/post';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'write/INITIALIZE'; // 모든 내용 초기화

const CHANGE_FIELD = 'write/CHANGE_FIELD'; // 특정 key 값 바꾸기

const [
  LIST_POSTS,
  LIST_POSTS_SUCCESS,
  LIST_POSTS_FAILURE,
] = createRequestActionTypes('posts/LIST_POSTS');



const [SEARCH_POSTS,
  SEARCH_POSTS_SUCCESS,
  SEARCH_POSTS_FAILURE,
] = createRequestActionTypes('posts/SEARCH_POSTS');


export const initialize = createAction(INITIALIZE);

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const listPosts = createAction(
  LIST_POSTS,
  ({ page }) => ({ page }),
);

export const searchPosts = createAction(
  SEARCH_POSTS,
  ({  search_type, search_contents, page }) => ({search_type, search_contents, page }),
);

const listPostsSaga = createRequestSaga(LIST_POSTS, postsAPI.listPosts);
export function* postsSaga() {
  yield takeLatest(LIST_POSTS, listPostsSaga);
}



const initialState = {
  search_type:null,
  search_contents: null,
  posts: null,
  error: null,
};

const posts = handleActions(
  {
    [INITIALIZE]: state => initialState, // initialState를 넣으면 초기 상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [LIST_POSTS_SUCCESS]: (state, { payload: posts }) => ({
      ...state,
      posts: posts.result.posts,
    }),
    [LIST_POSTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [SEARCH_POSTS_SUCCESS]: (state, { payload: posts }) => ({
      ...state,
      posts: posts.result.posts,
    }),
    [SEARCH_POSTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default posts;