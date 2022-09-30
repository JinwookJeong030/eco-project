module.exports = (app) => {
  
    const post = require('../controllers/commu.controller.js');
    const authJwt = require('../middlewares/authJWT.js');
    const refresh = require('./refresh');
    
    // 글작성
    app.post('/api/post/write',authJwt, post.write);
    // 글수정
    app.post('/api/post/eidt',authJwt, post.edit);
    // //글삭제
    app.delete('/api/post/delete',authJwt, post.delete);
    // 글조회
    app.get('/api/post/${id}', post.post);
    // 전체글 조회 -
    app.get('/api/post/posts', post.posts);
   

    // 댓글작성
    app.post('/api/reply/write',authJwt, post.reply_write);
    // 댓글삭제
    app.delete('/api/reply/delete',authJwt, post.reply_delete);
    // 댓글조회
    app.get('/api/reply/${id}', post.reply_select);

    //모임 생성
    app.post('/api/commu/create', commu.create);
    //모임 전체조회
    app.get('/api/commu/search', commu.search);
    //commu_id로 조회
    app.get('/api/commu/findcommu', commu.findcommu);
    //commu_id로 삭제
    app.delete('/api/commu/deletecommu', commu.deletecommu);

  };
  