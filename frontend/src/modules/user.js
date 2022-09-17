import { createAction, handleActions } from 'redux-actions';
import { useSelector } from 'react-redux';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';

const TEMP_SET_USER = 'user/TEMP_SET_USER';
const HIDING_MENU ='user/HIDING_MENU'; 
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] =
  createRequestActionTypes('user/CHECK');
const LOGOUT = 'user/LOGOUT';

export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
export const check = createAction(CHECK,(user)=>(user));
export const hidingMenu = createAction(HIDING_MENU,(hidingState)=>(hidingState));
export const logout = createAction(LOGOUT);

const checkSaga = createRequestSaga(CHECK, authAPI.check);

function checkFailureSaga() {
  try {
    localStorage.removeItem('user');
  } catch (e) {
    console.log('localStorage is not working');
  }
}

function* logoutSaga() {
  try {
    yield call(authAPI.logout);
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  } catch (e) {
    console.log(e);
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}
const initialState = {
  user: null,
  hidingState:false,
  checkError: null,
};

const user = handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({ ...state, user }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
    [LOGOUT]: (state) => ({ ...state, user: null }),
    [HIDING_MENU]: (state,{payload: hidingState}) =>({...state, hidingState})
  },
  initialState,
);
export default user;
