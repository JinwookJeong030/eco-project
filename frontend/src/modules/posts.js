import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as postsAPI from '../lib/api/post';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'posts/INITIALIZE'; // 모든 내용 초기화



const CHANGE_FIELD = 'posts/CHANGE_FIELD'; // 특정 key 값 바꾸기

const [
  LIST_POSTS,
  LIST_POSTS_SUCCESS,
  LIST_POSTS_FAILURE,
] = createRequestActionTypes('posts/LIST_POSTS');


export const initialize = createAction(INITIALIZE);

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const listPosts = createAction(
  LIST_POSTS,
  ({ search_type, search_contents, page }) => ({search_type, search_contents, page }),
);

const listPostsSaga = createRequestSaga(LIST_POSTS, postsAPI.listPosts);

export function* postsSaga() {
  yield takeLatest(LIST_POSTS, listPostsSaga);
}



const initialState = {
  search_type:"title",
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
  },
  initialState,
);

export default posts;