module.exports = (app) => {
  const user = require('../controllers/user.controller.js');

  // 회원 가입
  app.post('/api/auth/register', user.register);

  // //로그인
  // app.get('/api/auth/login',user.);
  // //로그인 상태 체크
  // app.post('/api/auth/check', user.);
  // //로그아웃
  // app.post("/api/auth/logout", user.);
};
