

module.exports = (app) => {
  
  const user = require('../controllers/user.controller.js');
  const authJwt = require('../middlewares/authJWT.js');
  const refresh = require('./refresh');
  // 회원 가입
  app.post('/api/auth/register', user.register);

  //로그인
  app.post('/api/auth/login', user.login);
 
  app.get('/api/auth/check',authJwt, user.check);
  // //로그아웃
  app.post("/api/auth/logout",authJwt, user.logout);
  app.get('/api/auth/refresh',refresh);
};
