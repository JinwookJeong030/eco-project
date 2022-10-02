module.exports = (app) => {
  
    const post = require('../controllers/post.controller.js');
    const authJwt = require('../middlewares/authJWT.js');
    const refresh = require('./refresh');
    
    // 글작성
    app.post('/api/post/write',authJwt, post.write);
    // 글수정
    app.post('/api/post/edit',authJwt, post.edit);
    // //글삭제
    app.delete('/api/post/delete/:post_id',authJwt, post.delete);
    // 글조회
    app.get('/api/post/view/:post_id', post.view);
    // 전체글 조회 -
    app.get('/api/post/list', post.list);

    // 댓글조회
    app.get('/api/reply/list/:post_id', post.reply_select);
    // 댓글작성
    app.post('/api/reply/write',authJwt, post.reply_write);
    // 댓글삭제
    app.delete('/api/reply/delete',authJwt, post.reply_delete);
    
    //카테고리 조회
    app.get('/api/categorys',post.categorys);
    //미션 조회 => 내 미션조회로 수정해야됨
    app.get('/api/missions',post.missions);

    

    app.get('/api/post/recommendsUp/:post_id',authJwt, post.recommendsUp);

    // 내가 쓴 글 조회
    app.get('/api/mypage/myPostList',authJwt,post.myPostList);
    // 내가 쓴 댓글 조회
    app.get('/api/mypage/myReplyList',authJwt,post.myReplyList);


  };
  