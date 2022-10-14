module.exports = (app) => {
  
    const commu = require('../controllers/commu.controller.js');
    const authJwt = require('../middlewares/authJWT.js');
   
    
   
    //모임 전체조회
    app.get('/api/commu/list', commu.list);
    //내모임 조회
    app.get('/api/commu/myList',authJwt, commu.mylist);
    //모임 생성
    app.post('/api/commu/create',authJwt,  commu.create);
    //모임 수정
    app.post('/api/commu/edit/:commu_id',authJwt,  commu.edit);
    //모임 삭제
    app.delete('/api/commu/delete/:commu_id',authJwt, commu.delete);
    //내 모임 조회
    app.get('/api/commu/myCommuList',authJwt,commu.myCommuList);


    //모임장 공지 생성
    app.post('/api/commu/noticcreate',authJwt, commu.noticecreate);
    //모임공지 조회
    app.get('/api/commu/noticelist',commu.noticelist);
    //모임장 공지 수정
    app.post('/api/commu/editcommunotice/:cn_id',authJwt,commu.editcommunotice);
    //모임장 공지 삭제
    app.delete('/api/commu/deletecommunotice/:cn_id',authJwt, commu.deletecommunotice);
   

    //모임 댓글 조회
    app.get('/api/commu/commureplyselect/:commu_id', commu.commureplyselect);
    //모임 댓글 작성
    app.post('/api/commu/commureplywrite',authJwt, commu.commureplywrite);
    //모임 댓글 삭제
    app.delete('/api/commu/deltecommureply/:cr_id',authJwt, commu.deltecommureply);
    
    //모임 미션 조회
    app.get('/api/commu/CommuMission',commu.CommuMission);
    //모임 미션 생성
    app.post('/api/commu/commumissioncreate',authJwt, commu.commumissioncreate);

    //모임 멤버 조회
    app.get('/api/commu/commumemberlist/:commu_id',commu.commumemberlist);
  };
  