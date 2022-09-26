import axios from '../../../node_modules/axios/index';
import client from './client';

const JWT_EXPIRRY_TIME = 24 * 3600 * 1000;

export const login = ({ user_email, user_password }) =>
  client
    .post('/auth/login', { user_email, user_password }).then(response=>{      
  onLoginSuccess(response);
return response;});

export const onRefresh = () => {
  axios
    .get('/auth/refresh')
    .then(response=>{
      onLoginSuccess(response);
    return response;})
    ;
};

const onLoginSuccess = (response) => {

  localStorage.setItem('accessToken',response.data.result.accessToken);
  localStorage.setItem('refreshToken',response.data.result.refreshToken);
  client.defaults.headers.common["authorization"] = `Bearer ${localStorage.getItem('accessToken')}`;
  client.defaults.headers.common["refresh"] = `${localStorage.getItem('refreshToken')}`;
  // accessToken 만료하기 1분 전에 로그인 연장
  setTimeout(onRefresh, JWT_EXPIRRY_TIME - 60000);
};

export const register = ({ user_email, user_password, user_name }) =>
  client.post('/auth/register', { user_email, user_password, user_name });

export const check = () => client.get('/auth/check');

export const logout = () => client.post('/auth/logout');
