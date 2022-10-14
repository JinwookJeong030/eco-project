const sql = require("./db.js");

//생성자
const Commu_Reply = function (commu_reply) {
    this.cr_id = commu_reply.cr_id;
    this.cr_commu = commu_reply.cr_commu;
    this.cr_user = commu_reply.cr_user;
    this.cr_contents = commu_reply.cr_contents;
    this.cr_regdate = new Date();
};


//commu_id를 통한 replys 조회 
Commu_Reply.selectReplysFromCommuId =(commu_id,result)=>{
    sql.query('SELECT commu_reply.* ,user.user_name FROM commu_reply,user WHERE commu_reply.cr_user =user.user_id ORDER BY commu_reply.cr_id', (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
  
      console.log('selectReplysFromCommuId: ',  res);
      result(null,  res);
    });
  
  };


 //모임 댓글 생성
Commu_Reply.insertCommuReply =(commu_reply ,result) =>{

    const commu_replyReq = new Commu_Reply({
        commu_reply_commu: commu_reply.cr_commu,
        commu_reply_user: commu_reply.cr_user,
        commu_reply_contents: commu_reply.cr_contents
    })
  
    sql.query("INSERT INTO commu_reply SET ?",commu_replyReq, (err,res)=>{
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
      console.log('Insert commuReply: ',  res);
      result(null,  res);
  
    });

  
  } 
  
  // 모임 댓글 삭제(cr_id) 
  Commu_Reply.deleteCommuReply =(commu_reply, result)=>{
  const commu_replyReq = new Commu_Reply({
    cr_id: commu_reply.cr_id,
    cr_user: commu_reply.cr_user,
  })
  sql.query("DELETE FROM commu_reply WHERE cr_id = "+commu_replyReq.cr_id+" AND cr_user = "+commu_replyReq.cr_user+" ;", 
   (err,res)=>{
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
      console.log('Delete Commu_reply: ',  res);
      result(null,  res);
    
    });
    }
  
module.exports = Commu_Reply;