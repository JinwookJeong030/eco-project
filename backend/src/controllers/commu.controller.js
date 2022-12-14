const { findCommu } = require('../models/commu.model.js');
const Commu = require('../models/commu.model.js');
const Commu_Notice = require('../models/commu_notice.model.js');
const Commu_Reply = require('../models/commu_reply.model.js');
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
exports.myList = async (req,res)=>{
  const user_id = req.user_id;
  const {page} = req.query;

  const end = 4;
  let start = 0;

  if (page <= 0) {
     start = 0;
  } else {
      start = (page - 1) * end;
  }
  Commu.selectAllMyCommusCnt(user_id,(err, data) => {
    if (!data) {
      return res.status(419).send({
        code: 419,
        message: 'selectAllMyCommusCnt is error!',
      });
    } else {
      const lastPage = Math.ceil(parseInt(data[0].commu_count)/end);
      if (page > Math.ceil(parseInt(data[0].commu_count) / end)) {
        return res.send({
          code:200,
          message: 'selectAllMyCommusCnt is null',
          result:{
            myCommus:[],
            lastPage: lastPage
            
          }
        })
      }else{
        const lastPage = Math.ceil(parseInt(data[0].commu_count)/end);
        Commu.selectMyCommus({user_id,start,end},(err, data) => {
          if (err)
            res.status(400).send({
              code: 400,
              message: err.message || "fail."
            });
          else res.send({
            code: 200,
            message:'selectMyCommus is seccessful!',
            result:{
              myCommus:data,
              lastPage: lastPage
            }
          });
        });
      

      }

}})};


// 조회 기능
exports.list = async (req,res)=>{

  const{page, search_type,search_contents} = req.query;

  const end = 5;
  let start = 0;

  if (page <= 0) {
     start = 0;
  } else {
      start = (page - 1) * end;
  }

  //모임제목으로 검색
  if(search_type === "title"){
    Commu.selectCommusFromTitleCnt(search_contents,(err, data) => {
    if (!data) {
      return res.status(419).send({
        code: 419,
        message: 'selectCommusFromTitleCnt is error!',
      });
    } else {
      const lastPage = Math.ceil(parseInt(data[0].commu_count)/end);
      if (page > Math.ceil(parseInt(data[0].commu_count) / end)) {
        return res.send({
          code:200,
          message: 'selectCommusFromTitleCnt is null',
          result:{
            myCommus:[],
            lastPage: lastPage
            
          }
        })
      }else{
        const lastPage = Math.ceil(parseInt(data[0].commu_count)/end);
    Commu.selectCommusFromTitle({start,end,search_contents}, (err, data) => {
      if (!data) {
        return res.status(419).send({
          code:419,
          message: 'selectCommusFromTitle is error!',
        });
      } else {
        return res.send({
          code:200,
          message: 'selectCommusFromTitle is succesful',
          result:{
            commus:data,
            lastPage: lastPage
          }
        });
      }
  })
}

}})
}
  //모임장으로 검색
  else if(search_type === "user"){

    Commu.selectCommusFromUserCnt(search_contents,(err, data) => {
      if (!data) {
        return res.status(419).send({
          code: 419,
          message: 'selectCommusFromUserCnt is error!',
        });
      } else {
        const lastPage = Math.ceil(parseInt(data[0].commu_count)/end);
        if (page > Math.ceil(parseInt(data[0].commu_count) / end)) {
          return res.send({
            code:200,
            message: 'selectCommusFromUserCnt is null',
            result:{
              myCommus:[],
              lastPage: lastPage
              
            }
          })
        }else{
          const lastPage = Math.ceil(parseInt(data[0].commu_count)/end);
        Commu.selectCommusFromUser({start,end,search_contents}, (err, data) => {
        if (!data) {
          return res.status(419).send({
            code:419,
            message: 'selectCommusFromUser is error!',
          });
        } else {
          return res.send({
            code:200,
            message: 'selectCommusFromUser is succesful',
            result:{
              commus:data,
              lastPage:lastPage
            }
          });
        }
  
    })
  
  }

}})


  }
    else
  {

    Commu.selectAllCommusCnt((err, data) => {
      if (!data) {
        return res.status(419).send({
          code: 419,
          message: 'selectAllCommusCnt is error!',
        });
      } else {
        const lastPage = Math.ceil(parseInt(data[0].commu_count)/end);
        if (page > Math.ceil(parseInt(data[0].commu_count) / end)) {
          return res.send({
            code:200,
            message: 'selectAllCommusCnt is null',
            result:{
              myCommus:[],
              lastPage: lastPage         
            }
          })
        }else{
          const lastPage = Math.ceil(parseInt(data[0].commu_count)/end);
    //전체 조회
  Commu.selectAllCommus({ start, end },(err, data) => {
      if (err)
        res.status(400).send({
          code: 400,
          message: err.message || "fail."
        });
      else res.send({
        code: 200,
        message:'selectAllCommus is seccessful!',
        result:{
          commus:data,
          lastPage: lastPage
        }
      });
    });}

  }});
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

  // 모임공지 작성
  exports.commumissioncreate = async (req, res) => {

    const commu_missionReq = new Commu_Mission({
      cm_id : req.cm_id,
      cm_commu: req.body.cm_commu,
      cm_mission: req.body.cm_mission,
    });
    //db저장
    Commu_Mission.insertCommuMission(commu_missionReq, (err, data) => {
      if(!data){
        return res.status(419).send({
          code: 419,
          message: 'insertCommuMission is error!',
        });
      }else{
        return res.send({
          code:200,
          message: 'insertCommuMission is successful', 
         });
      }
    })
  };

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


  // 모임공지 작성
exports.noticecreate = async (req, res) => {

  const commu_noticeReq = new Commu_Notice({
    cn_commu : req.commu_id,
    cn_title: req.body.cn_title,
    cn_contents: req.body.cn_contents,
  });
  //db저장
  Commu_Notice.insertCommuNotice(commu_noticeReq, (err, data) => {
    if(!data){
      return res.status(419).send({
        code: 419,
        message: 'noticecreate is error!',
      });
    }else{
      return res.send({
        code:200,
        message: 'noticecreate is successful', 
       });
    }
  })
};

//모임공지 수정
exports.editcommunotice =async (req,res) =>{

  const commu_noticeReq = new Commu_Notice(
    {
      cn_commu: req.commu_id,
      cn_id:  req.body.cn_id,
      cn_title: req.body.cn_title,
      cn_contents: req.body.post_contents,
    }
  )
  Commu_Notice.editCommuNotice(commu_noticeReq, (err,data)=>{
    if(!data){
      return res.status(419).send({
        code: 419,
        message: 'editCommuNotice is error!',
      });
    }else{
      return res.send({
        code:200,
        message: 'editCommuNotice is successful', 
       });
    }
  })

}
//모임공지 삭제
exports.deletecommunotice =async (req,res) =>{

  const commu_noticeReq = new Commu_Notice({
    cn_commu: req.commu_id,
    cn_id: req.params.cn_id
  })   
    Commu_Notice.deleteCommuNotice(commu_noticeReq, (err,data)=>{
      if(!data){
        return res.status(419).send({
          code: 419,
          message: 'deletecommunotice is error!',
        });
      }else{
        return res.send({
          code:200,
          message: 'deletecommunotice is successful', 
         });
      }
    })
}

// 모임공지조회 기능
exports.noticelist = async (req, res) => {

  const { search_type, search_contents } = req.query;

  // 제목 검색
  if (search_type === "title") {
    Commu_Notice.SearchNoticeTitle(search_contents, (err, data) => {
      if (!data) {
        return res.status(419).send({
          code: 419,
          message: 'SearchNoticeTitle is error!',
        });
      } else {
        return res.send({
          code: 200,
          message: 'SearchNoticeTitle is successful',
          result: {
            posts: data
          }
        });
      }
    })
  }
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
          code: 200,
          message: 'SearchNoticeContents is successful',
          result: {
            posts: data
          }
        });
      }
    })
  }
}



//모임 댓글 조회
exports.commureplyselect = async (req, res) =>{
  Commu_Reply.selectReplysFromCommuId(req.params.commu_id,(err, data) => {
    if (!data) {
      return res.status(419).send({
        code: 419,
        message: 'selectReplysFromCommuId is error!',
      });
    } else {
      return res.send({
        code:200,
        message: 'selectReplysFromCommuId is successful',
        result:{
          commu_replys:data
        }
      });
  } 
  });
}

//모임 댓글 작성
exports.commureplywrite = async (req,res) =>{
  
  const commu_replyReq = new Commu_Reply(
    {
      commu_reply_user: req.user_id,
      commu_reply_commu: req.body.cr_commu,
      commu_reply_contents: req.body.cr_contents
    }
  )
   Commu_Reply.insertCommuReply(commu_replyReq, (err,data)=>{
    if(!data){
      return res.status(419).send({
        code: 419,
        message: 'insertCommuReply is error!',
      });
    } else {
      return res.send({
        code:200,
        message: 'insertCommuReply is successful',
        result:{
          commu_reply:data
        }
      });
  } 
  })
}


//모임 댓글 삭제
exports.deltecommureply = async (req,res) =>{
  const commu_replyReq = new Commu_Reply(
    {
      cr_id: req.params.cr_id,
      cr_user: req.cr_user,
    }
  )
    
  Commu_Reply.deleteCommuReply(commu_replyReq, (err,data)=>{
    if(!data){
      return res.status(419).send({
        code: 419,
        message: 'deleteCommuReply is error!',
      });
    }else{
      return res.send({
        code:200,
        message: 'deleteCommuReply is successful', 
       });
    }
  })

}


  //모임 멤버 조회
  exports.commumemberlist = async(req,res) =>{

    Commu.ListCommuMember(req.commu_id,(err,data) =>{
      if(!data) {
        return res.status(500).send({
          code:500,
          message: 'fail',
        });
      }else{
        return res.send({
          code:200,
          message: 'ListCommuMember is successful',
          result: {
            myCommus:data
          }
        });
      }
    });
  }