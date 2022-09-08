import axios from 'axios';
const client = axios.create();

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
