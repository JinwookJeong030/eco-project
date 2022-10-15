import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import write,{writeSaga} from './write';
import post,{postSaga} from './post';
import posts,{postsSaga} from './posts';
import replys,{replysSaga} from './replys';
import commus,{commusSaga} from './commus'
import commu,{commuSaga} from './commu';
import ranking,{rankingSaga} from './ranking';

import loading from './loading';

const rootReducer = combineReducers({
  loading,
  auth,
  user,
  write,
  post,
  posts,
  replys,
  commus,
  commu,
  ranking,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), 
    postSaga(),postsSaga(),replysSaga(),
    commusSaga(), commuSaga(),rankingSaga()]);
}

export default rootReducer;
