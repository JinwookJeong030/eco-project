module.exports = (app) => {
    const authJwt = require('../middlewares/authJWT.js');
    const refresh = require('./refresh');
    const plant = require('../controllers/plant.controller.js');


    //식물 삭제 후 새로고침 planting
    app.delete('/api/plant/delete',authJwt, plant.delete);
    //유저 식물 조회 planting 
    app.get('/api/plant/select/:user_id', plant.select);
    //식물 포인트 증가 (유저 포인트 소모)
    app.post('/api/plant/point',authJwt, plant.point);
    //유저 대표식물 설정
    app.post('/api/plant/leader',authJwt, plant.leader);

}