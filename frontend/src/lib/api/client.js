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


export default client;
