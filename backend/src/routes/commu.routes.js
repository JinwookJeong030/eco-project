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
    //모임미션 조회
    app.get('/api/commu/CommuMission',commu.CommuMission);
    //미션공지 조회
    app.get('/api/commu/noticelist/',commu.noticelist);



  };
  