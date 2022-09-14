import axios from '../../../node_modules/axios/index';
import client from './client';

const JWT_EXPIRRY_TIME = 24 * 3600 * 1000;

export const login = ({ email, password }) =>
  client
    .post('/api/auth/login', { email, password })
    .then(onLoginSuccess)
    .catch((error) => {});

const onSilentRefresh = () => {
  axios
    .post('/api/auth/silent-refresh')
    .then(onLoginSuccess)
    .catch((error) => {
      // ... 로그인 실패 처리
    });
};

const onLoginSuccess = (response) => {
  const { accessToken } = response.data;

  // accessToken 설정
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

  // accessToken 만료하기 1분 전에 로그인 연장
  setTimeout(onSilentRefresh, JWT_EXPIRRY_TIME - 60000);
};

export const register = ({ email, password, name }) =>
  client.post('/api/auth/register', { email, password, name }).then().catch();

export const check = () => client.get('/api/auth/check');

export const logout = () => client.post('/api/auth/logout');
