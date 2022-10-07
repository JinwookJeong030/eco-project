import axios from 'axios';


const client = axios.create(
);
client.defaults.baseURL = 'http://www.hs-eco-web.link:4000/api'
client.defaults.headers['Access-Control-Allow-Origin'] = '*';
client.defaults.withCredentials = true;
client.interceptors.request.use(function (config){
   client.defaults.headers.common["authorization"] = `Bearer ${localStorage.getItem('accessToken')}`;
   client.defaults.headers.common["refresh"] = localStorage.getItem('refreshToken');
   return config;
});

/**
 * //api 주소 다른곳 사용
 * client.defaults.baseURL = 'https://external-api-server.com/'
 *
 * //헤더설정
 * client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4'
 *
 * //인터셉터 설정
 * axios.intercepter.response.use(\
 * response=>{
 *
 * //요청 성공시
 * return response;},
 * error=>{
 * //요청 실패시
 * return Promise.reject(error);
 * }
 * )
 *
 */

export default client;
