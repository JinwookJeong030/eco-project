const Mission = require('../models/mission.model.js');
const jwt = require('../modules/jwt.js');
const redisClient = require('../modules/redis.js');
// 새 객체 생성
exports.create = async (req,res)=>{

  const missionReq = new Mission({
      mission_id : req.mission_id,
      mission_title : req.body.mission_title,
      mission_contents: req.body.mission_contents,
  });
};
//현재 미션 조회
exports.list = (req,res)=>{
     

    Mission.selectMission((err, data) => {
        if (err)
          res.status(400).send({
            code: 400,
            message: err.message || "fail."
          });
        else res.send({
          code: 200,
          message:'selectAllMission is seccessful!',
          result:{
            mission:data
          }
        });
      });
  };

  //모든 미션 조회
exports.allList = (req,res)=>{
     

  Mission.selectAllMission((err, data) => {
      if (err)
        res.status(400).send({
          code: 400,
          message: err.message || "fail."
        });
      else res.send({
        code: 200,
        message:'selectAllMission is seccessful!',
        result:{
          allMission:data
        }
      });
    });
};