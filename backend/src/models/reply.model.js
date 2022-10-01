const sql = require("./db.js");

//생성자
const Reply = function (reply) {
    this.reply_id =reply.reply_id;
    this.reply_post = reply.reply_post;
    this.reply_user = reply.reply_user;
    this.reply_contents = reply.reply_contents;
    this.reply_regdate = new Date();
    this.reply_type = reply.reply_type;
    this.reply_order = reply.reply_order;
    this.reply_group_id = reply.reply_group_id;
};
  //post_id를 통한 replys 조회 
  Reply.selectReplysFromPostId =(post_id,result)=>{
    sql.query('SELECT reply.* ,user.user_name FROM reply,user WHERE reply.reply_user =user.user_id AND reply.reply_post = '+post_id+" ORDER BY reply.reply_group_id", (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
  
      console.log('selectReplysFromPostId Post: ',  res);
      result(null,  res);
    });
  
  };

//댓글 삽입
Reply.insertReply =(reply ,result) =>{

    const replyReq = new Reply({
        reply_post: reply.reply_post,
        reply_user: reply.reply_user,
        reply_contents: reply.reply_contents,
        reply_type: reply.reply_type,
        reply_order: reply.reply_order,
        reply_group_id: reply.reply_group_id,
    })
  
    sql.query("INSERT INTO reply SET ?",replyReq, (err,res)=>{
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
      console.log('Insert a Reply: ',  res);
      result(null,  res);
  
    });

  
  }
  Reply.SelectReplyIdFromUserId=(reply, result)=>{
    const replyReq = new Reply({
      reply_post: reply.reply_post,
      reply_user: reply.reply_user,
      reply_contents: reply.reply_contents,
      reply_type: reply.reply_type,
      reply_order: reply.reply_order,
      reply_group_id: reply.reply_group_id,
  })

  sql.query("Select reply_id FROM reply WHERE reply_user = " + replyReq.reply_user+" ORDER BY reply_id DESC ;", (err,res)=>{
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    console.log('SelectReplyIdFromUserId : ',  res[0]);
    result(null,  res[0]);

  });
  };


  Reply.UpdateReplyGroupId =(reply_id, result)=>{
    

  sql.query("UPDATE reply SET reply_group_id = "+reply_id+" WHERE reply_id = "+reply_id+" ;",(err,res)=>{
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    console.log('UpdateReplyGroupId ',  res);
    result(null,  res);

  });
    
  }

 //내가 쓴 댓글 조회 
 Reply.selectMyReplys =(reply_user,result)=>{
  sql.query('SELECT reply.* ,user.user_name FROM reply,user WHERE reply.reply_user =user.user_id AND reply.reply_user = '+reply_user+" ;", (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    console.log('selectMyReplys : ',  res);
    result(null,  res);
  });

};



  module.exports = Reply;