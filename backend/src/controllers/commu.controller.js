const { findCommu } = require('../models/commu.model.js');
const Commu = require('../models/commu.model.js');
const Commu_Notice = require('../models/commu_notice.model.js');
const Commu_Mission = require('../models/commu_mission.model.js');
const jwt = require('../modules/jwt.js');
const redisClient = require('../modules/redis.js');
// 보내는 방식 res.send()
// 모임 생성
exports.create = async (req,res)=>{

  const commuReq = new Commu({
      commu_leader : req.user_id,
      commu_name : req.body.commu_name,
      commu_contents: req.body.commu_contents,
      commu_region : req.body.commu_region
  });
  //db저장
Commu.insertCommu(commuReq, (err, data) =>{
    if(err){
       return res.status(500).send({
          code: 500,  
          message:err.message || "fail."
        }
        );
    }
})

Commu.selectFirstCommusFromLeader(commuReq.commu_leader, (err, data) =>{
  

  if(err){
     return res.status(500).send({
        code: 500,  
        message:err.message || "fail."
      }
      );
  }else{
    const belongReq ={
      belong_commu: data.commu_id,
      belong_user : req.user_id,

    }

    Commu.insertBelong(belongReq, (err, data) =>{
      
      if(err){
         return res.status(500).send({
            code: 500,  
            message:err.message || "fail."
          }
          );
      } else{
        res.send({
          code: 200,
          message:'selectFirstCommusFromLeader is seccessful!',
        });
      }
    } )

  }
})


};

//내 모임 조회
exports.mylist = async (req,res)=>{
  const user_id = req.user_id;

  
    //전체 조회
  Commu.selectMyCommus(user_id,(err, data) => {
      if (err)
        res.status(400).send({
          code: 400,
          message: err.message || "fail."
        });
      else res.send({
        code: 200,
        message:'selectMyCommus is seccessful!',
        result:{
          myCommus:data
        }
      });
    });
  
};
// 조회 기능
exports.list = async (req,res)=>{
  const{page, search_type,search_contents} = req.query;
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

//모임 수정
exports.edit =async (req, res)=>{
  const commuReq = new Commu({
    commu_leader: req.user_id,
    commu_id: req.params.commu_id,
    commu_title: req.body.commu_title,
    commu_contents: req.body.commu_contents,
    commu_region: req.body.commu_region,
  });
  Commu.editCommu(commuReq, (err, data) => {
    if(!data){
      return res.status(419).send({
        code: 419,
        message: 'editCommu is error!',
      });
    }else{
      return res.send({
        code:200,
        message: 'editCommu is successful', 
       });
    }
    })


}


// 모임 삭제
exports.delete =async (req,res)=>{
  const commuReq = new Commu({
    commu_leader: req.user_id,
    commu_id: req.params.commu_id,
  });
  Commu.deleteCommu(commuReq, (err, data) => {
    if(!data){
      return res.status(419).send({
        code: 419,
        message: 'deleteCommu is error!',
      });
    }else{
      return res.send({
        code:200,
        message: 'deleteCommu is successful', 
       });
    }
    })
}
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