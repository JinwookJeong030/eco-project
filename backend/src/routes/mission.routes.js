module.exports = (app) => {
  
    const mission = require('../controllers/mission.controller.js');
    const authJwt = require('../middlewares/authJWT.js');
    const refresh = require('./refresh');
    
   
    //미션 전체조회
    app.get('/api/missions/list', mission.list);



  };
  