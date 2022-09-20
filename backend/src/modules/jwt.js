const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const redisClient = require('./redis');
const secretKey = require('../config/secretKey').secretKey;
const options = require('../config/secretKey').options;
const refreshOptions = require('../config/secretKey').refreshOptions;
module.exports = {
  sign: (user) => { // access token 발급
    const payload = { // access token에 들어갈 payload
      user_id: user.user_id,
      user_email: user.user_email,
    };

    return jwt.sign(payload, secretKey, options);
  },
  verify: (token) => { // access token 검증
    let decoded = null;
    try {
      decoded = jwt.verify(token, secretKey);
      return {
        ok: true,
        user_id: decoded.user_id,
        user_email: decoded.user_email,
      };
    } catch (err) {
      return {
        ok: false,
        message: err.message,
      };
    }
  },
  refresh: () => { // refresh token 발급
    return jwt.sign({}, secretKey, refreshOptions);
  },
  refreshVerify: async (token, user_id) => { // refresh token 검증
    /* redis 모듈은 기본적으로 promise를 반환하지 않으므로,
       promisify를 이용하여 promise를 반환하게 해줍니다.*/
    const getAsync = promisify(redisClient.get).bind(redisClient);
    
    try {
      const data = await getAsync(user_id); // refresh token 가져오기
      if (token === data) {
        try {
          jwt.verify(token, secretKey);
          return true;
        } catch (err) {
          return false;
        }
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  },
  logout: async (token) =>{
    
  }
};