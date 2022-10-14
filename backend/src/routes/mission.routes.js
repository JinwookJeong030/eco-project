module.exports = (app) => {
  
    const mission = require('../controllers/mission.controller.js');
    const authJwt = require('../middlewares/authJWT.js');
    const refresh = require('./refresh');
    
   
   
    app.get('/api/mission', mission.list);
    app.get('/api/allMission', mission.AllList);



  };
  