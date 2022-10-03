const Commu = require('../models/commu.model.js');
const jwt = require('../modules/jwt.js');
const redisClient = require('../modules/redis.js');
// 보내는 방식 res.send()
// 새 객체 생성
exports.create = async (req,res)=>{

  const commuReq = new Commu({
      commu_leader : req.user_id,
      commu_name : req.body.commu_name,
      commu_contents: req.body.commu_contents,
  });
  //db저장
  Commu.insertCommu(commuReq, (err, data) =>{
    if(err){
       return res.status(500).send({
          code: 500,  
          message:err.message || "fail."
        }
        );
    }else{
      return res.send({
        code: 200,
        message:'insertCommu is successful!',
      })
    }


})
};
// 전체 조회 
exports.list = (req,res)=>{
  Commu.selectAllCommus((err, data) => {
      if (err)
        res.status(400).send({
          code: 400,
          message: err.message || "fail."
        });
      else res.send({
        code: 200,
        message:'selectAllCommus is seccessful!',
        result:{
          commus:data
        }
      });
    });
};
// commu_id로 조회
exports.view = (req,res)=>{
  Commu.findCommu(req.params.commuId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Commu with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Commu with id " + req.params.customerId
          });
        }
      } else res.send({data});
    });
};
// commu_id로 삭제
exports.delete = (req,res)=>{
  Commu.deleteCommu(req.params.commu_id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Commu with id ${req.params.commu_id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Commu with id " + req.params.commu_id
          });
        }
      } else res.send({ message: `Commu was deleted successfully!` });
    });
};
  //함수 어떻게 보낼지