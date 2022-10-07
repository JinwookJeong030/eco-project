const { findCommu } = require('../models/commu.model.js');
const Commu = require('../models/commu.model.js');
const Commu_Notice = require('../models/commu_notice.model.js');
const Commu_Mission = require('../models/commu_mission.model.js');
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
// 조회 기능
exports.list = (req,res)=>{
  const{search_type,search_contents} = req.query;
  //모임제목으로 검색
  if(search_type === "title"){
    Commu.findCommu(req.params.commuId, (err, data) => {
      if (!data) {
        return res.status(419).send({
          code:419,
          message: 'findCommu is error!',
        });
      } else {
        return res.send({
          code:200,
          message: 'findCommu is succesful',
          result:{
            commus:data
          }
        });
      }

  })}
  else
  {
    //전체 조회
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
  }
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
  //내 모임 조회
  exports.myCommuList = async(req,res) =>{

    Commu.myCommu(req.user_id,(err,data) =>{
      if(!data) {
        return res.status(500).send({
          code:500,
          message: 'fail',
        });
      }else{
        return res.send({
          code:200,
          message: 'myCommu is successful',
          result: {
            myCommus:data
          }
        });
      }
    });
  }
  //모임미션 조회
  exports.CommuMission = async(req, res) =>{
    Commu_Mission.Searchmission(req.commu_id,(err,data)=>{
      if(!data) {
        return res.status(419).send({
          code:419,
          message: 'CommuMission is error',
        });
      }else{
        return res.send({
          code:200,
          message: 'CommuMission is successful',
          result: {
            CommuMission:data
          }
        });
      }
    });
  }


  // 모임공지조회 기능
  exports.noticelist = async (req, res) => {

    const {search_type,search_contents} = req.query;
      
      // 제목 검색
      if(search_type === "title"){
        Commu_Notice.SearchNoticeTitle(search_contents, (err, data) => {
          if (!data) {
            return res.status(419).send({
              code: 419,
              message: 'SearchNoticeTitle is error!',
            });
          } else {
            return res.send({
              code:200,
              message: 'SearchNoticeTitle is successful',
              result:{
                posts:data
              }
            });
        }
        })}
        //글로 검색
        else {
        Commu_Notice.SearchNoticeContents(search_contents, (err, data) => {
          if (!data) {
            return res.status(419).send({
              code: 419,
              message: 'SearchNoticeContents is error!',
            });
          } else {
            return res.send({
              code:200,
              message: 'SearchNoticeContents is successful',
              result:{
                posts:data
              }
            });
        }
        })
      }
      }