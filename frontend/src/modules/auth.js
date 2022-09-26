import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
  createRequestActionTypes('auth/REGISTER');

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes('auth/LOGIN');

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  }),
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const register = createAction(REGISTER, ({ user_email, user_password, user_name }) => ({
  user_email,
  user_password,
  user_name,
}));
export const login = createAction(LOGIN, ({ user_email, user_password }) => ({
  user_email,
  user_password,
}));

const registerSaga = createRequestSaga(REGISTER, authAPI.register);

const loginSaga = createRequestSaga(LOGIN, authAPI.login);

export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  register: {
    user_email: '',
    user_password: '',
    passwordConfirm: '',
    user_name: '',
  },
  login: {
    user_email: '',
    user_password: '',
  },
  auth: null,
  authError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      auth:null,
      authError: null,
    }),
    [REGISTER_SUCCESS]: (state, { payload: result }) => ({
      ...state,
      authError: null,
      auth:result,
    }),
    [REGISTER_FAILURE]: (state, { payload: result }) => ({
      ...state,
      authError: result,
    }),
    [LOGIN_SUCCESS]: (state, { payload: result }) => ({
      ...state,
      authError: null,
      auth: result,
    }),
    [LOGIN_FAILURE]: (state, { payload: result }) => ({
      ...state,
      authError: result,
    }),
  },
  initialState,
);
export default auth;
