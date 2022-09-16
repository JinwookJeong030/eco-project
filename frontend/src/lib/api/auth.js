import axios from '../../../node_modules/axios/index';
import client from './client';

const JWT_EXPIRRY_TIME = 24 * 3600 * 1000;

export const login = ({ email, password }) =>
  client
    .post('/auth/login', { email, password }).then(response=>{      
  onLoginSuccess(response);
return response;})
.catch((error) => {
  // ... 로그인 실패 처리
});

export const onRefresh = () => {
  axios
    .get('/auth/refresh')
    .then(response=>{
      onLoginSuccess(response);
      
    return response;})
    .catch((error) => {
      // ... 로그인 실패 처리
    });
};

const onLoginSuccess = (response) => {

  localStorage.setItem('accessToken',response.data.data.accessToken);
  localStorage.setItem('refreshToken',response.data.data.refreshToken);
  client.defaults.headers.common["authorization"] = `Bearer ${localStorage.getItem('accessToken')}`;
  client.defaults.headers.common["refresh"] = `${localStorage.getItem('refreshToken')}`;
  // accessToken 만료하기 1분 전에 로그인 연장
  setTimeout(onRefresh, JWT_EXPIRRY_TIME - 60000);
};

export const register = ({ email, password, name }) =>
  client.post('/auth/register', { email, password, name }).then().catch();

export const check = () => client.get('/auth/check');

export const logout = () => client.post('/auth/logout');
