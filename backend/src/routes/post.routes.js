module.exports = (app) => {
  
    const post = require('../controllers/post.controller.js');
    const authJwt = require('../middlewares/authJWT.js');
    const refresh = require('./refresh');
    
    // 글작성
    // app.post('/api/post', post.);
    // 글조회
    // app.get('/api/post/${id}', post.);
    //전체글 조회
    app.get('/api/posts', post.posts);
   

  };
  