

module.exports = (app) => {
  
  const user = require('../controllers/user.controller.js');
  const authJwt = require('../middlewares/authJWT.js');
  const refresh = require('./refresh');
  
  // 회원 가입
  app.post('/api/auth/register', user.register);
  //로그인
  app.post('/api/auth/login', user.login);
  //유저확인
  app.get('/api/auth/check',authJwt, user.check);
  //로그아웃
  app.post("/api/auth/logout",authJwt, user.logout);
  //토큰 재설정
  app.get('/api/auth/refresh',refresh);
  // 비밀번호 변경
  app.post('/api/mypage/changePw',authJwt, user.changePw);
  //랭킹조회
  app.get('/api/ranking',user.ranking);


};
