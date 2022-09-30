const commu = require('../models/commu.model.js');
const jwt = require('../modules/jwt.js');
const redisClient = require('../modules/redis.js');
// 보내는 방식 res.send()
// 새 객체 생성
exports.create = (req,res)=>{
  if(!req.body){
      res.status(400).send({
          message: "Content can not be empty!"
      });
  };

  const commu = new Commu({
      commu_id : req.body.commu_id,
      commu_name : req.body.commu_name,
      commu_leader : req.body.commu_leader
  });
  //db저장
  Commu.create(commu, (err, data) =>{
    if(err){
        res.status(500).send({
            message:
            err.message || "fail."
        });
    };
})
};
// 전체 조회 
exports.search = (req,res)=>{
  Commu.selectAllCommus((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "fail."
        });
      else res.send(data);
    });
};
// commu_id로 조회
exports.findcommu = (req,res)=>{
  Commu.findCommuFromId(req.params.commuId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Customer with id " + req.params.customerId
          });
        }
      } else res.send(data);
    });
};
// commu_id로 삭제
exports.delete = (req,res)=>{
  Commu.deleteCommu(req.params.commuId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Customer with id " + req.params.customerId
          });
        }
      } else res.send({ message: `Customer was deleted successfully!` });
    });
};
  //함수 어떻게 보낼지