import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import write,{writeSaga} from './write';
import post,{postSaga} from './post';
import posts,{postsSaga} from './posts';
import replys,{replysSaga} from './replys';
import loading from './loading';

const rootReducer = combineReducers({
  loading,
  auth,
  user,
  write,
  post,
  posts,
  replys,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), postSaga(),postsSaga(),replysSaga()]);
}

export default rootReducer;
