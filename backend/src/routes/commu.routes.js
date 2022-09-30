module.exports = (app) => {
  
    const commu = require('../controllers/commu.controller.js');
    const authJwt = require('../middlewares/authJWT.js');
    const refresh = require('./refresh');
    
   
    //모임 전체조회
    app.get('/api/commu/list', commu.list);
     //모임 생성
    app.post('/api/commu/create',authJwt,  commu.create);
    // //commu_id로 조회
    // app.get('/api/commu/findcommu',authJwt, commu.findcommu);
    // //commu_id로 삭제
    // app.delete('/api/commu/deletecommu',authJwt, commu.deletecommu);



  };
  