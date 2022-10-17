const Post = require('../models/post.model.js');
const User = require('../models/user.model.js')
const Reply = require('../models/reply.model.js');
const PF = require('../models/post_file.model.js');
const Category = require('../models/category.model.js');
const jwt = require('../modules/jwt.js');
const redisClient = require('../modules/redis.js');
const multer = require('multer'); // 이미지 파일 처리
// 전체 조회
 exports.list = async (req, res) => {

    const {page, search_type,search_contents} = req.query;
  
    const end = 5;
    let start = 0;
  
    if (page <= 0) {
       start = 0;
    } else {
        start = (page - 1) * end;
    }
      // 제목 검색
      if(search_type === "title"){
        Post.selectAllPostsCntFromTitle({search_type,search_contents}, (err, data) => {
          if (!data) {
            return res.status(419).send({
              code: 419,
              message: 'selectAllPostsCntFromTitle is error!',
            });
          } else {
            const lastPage = Math.ceil(parseInt(data[0].post_count)/end);
            if (page > Math.ceil(parseInt(data[0].post_count) / end)) {
              return res.send({
                code:200,
                message: 'selectAllPostsCntFromTitle is null',
                result:{
                  posts:[],
                  lastPage: lastPage
                }
              })
            }else{
             
        Post.selectAllPostsFromTitle({start,end,search_contents}, (err, data) => {
          if (!data) {
            return res.status(419).send({
              code: 419,
              message: 'selectAllPostsFromTitle is error!',
            });
          } else {
            return res.send({
              code:200,
              message: 'selectAllPostsFromTitle is successful',
              result:{
                posts:data,
                lastPage: lastPage
              }
            });
        } 
        })
      }
    } 
    })
      }
        //글로 검색
        else if(search_type === "contents"){
          Post.selectAllPostsCntFromContents({search_type,search_contents}, (err, data) => {
            if (!data) {
              return res.status(419).send({
                code: 419,
                message: 'selectAllPostsCntFromContents is error!',
              });
            } else {
              const lastPage = Math.ceil(parseInt(data[0].post_count)/end);
              if (page > Math.ceil(parseInt(data[0].post_count) / end)) {
                return res.send({
                  code:200,
                  message: 'selectAllPostsCntFromContents is null',
                  result:{
                    posts:[],
                    lastPage: lastPage
                  }
                })
              }else{
                const lastPage = Math.ceil(parseInt(data[0].post_count)/end);
        Post.selectAllPostsFromContents({start,end,search_contents}, (err, data) => {
          if (!data) {
            return res.status(419).send({
              code: 419,
              message: 'selectAllPostsFromContents is error!',
            });
          } else {
            return res.send({
              code:200,
              message: 'selectAllPostsFromContents is successful',
              result:{
                posts:data,
                lastPage: lastPage
              }
            });
        } 
        })
      }
    } 
    })
      }
      
      // 작성자 검색
     else if(search_type === "user"){
      Post.selectAllPostsCntFromUser({search_type,search_contents}, (err, data) => {
          if (!data) {
            return res.status(419).send({
              code: 419,
              message: 'selectAllPostsCntFromUser is error!',
            });
          } else {
            const lastPage = Math.ceil(parseInt(data[0].post_count)/5);
            if (page > Math.ceil(parseInt(data[0].post_count) / end)) {
              return res.send({
                code:200,
                message: 'selectAllPostsCntFromUser is null',
                result:{
                  posts:[],
                  lastPage: lastPage
                }
              })
            }else{
              const lastPage = Math.ceil(parseInt(data[0].post_count)/5);
        Post.selectAllPostsFromUser({start,end,search_contents}, (err, data) => {
          if (!data) {
            return res.status(419).send({
              code: 419,
              message: 'selectAllPostsFromUser is error!',
            });
          } else {
            return res.send({
              code:200,
              message: 'selectAllPostsFromUser is successful',
              result:{
                posts:data,
                lastPage: lastPage
              }
            });
        } 
        });
      }
    } 
    })
}
      // 카테고리 검색
      else if(search_type === "category"){
        Post.selectAllPostsCntFromCategory({search_type,search_contents}, (err, data) => {
          if (!data) {
            return res.status(419).send({
              code: 419,
              message: 'selectAllPostsCntFromCategory is error!',
            });
          } else {
            const lastPage = Math.ceil(parseInt(data[0].post_count)/5);
            if (page > Math.ceil(parseInt(data[0].post_count) / end)) {
              return res.send({
                code:200,
                message: 'selectAllPostsCntFromCategory is null',
                result:{
                  posts:[],
                  lastPage: lastPage
                }
              })
            }else{
              const lastPage = Math.ceil(parseInt(data[0].post_count)/5);
        Post.selectAllPostsFromCategory({start,end,search_contents}, (err, data) => {
          if (!data) {
            return res.status(419).send({
              code: 419,
              message: 'selectAllPostsFromUser is error!',
            });
          } else {
            return res.send({
              code:200,
              message: 'selectAllPostsFromUser is successful',
              result:{
                posts:data,
                lastPage: lastPage
              }
            });
        } 
        });
      }
    } 
    })

      }
      
else
{

    Post.selectAllPostsCnt( (err, data) => {
      if (!data) {
        return res.status(419).send({
          code: 419,
          message: 'selectAllPostsFromTitle is error!',
        });
      } else {
        const lastPage = Math.ceil(parseInt(data[0].post_count)/5);
        if (page > Math.ceil(parseInt(data[0].post_count) / end)) {
          return res.send({
            code:200,
            message: 'selectAllPostsCnt is null',
            result:{
              posts:[],
              lastPage: lastPage
              
            }
          })
        }else{
      
          Post.selectAllPosts({start, end,search_contents},(err, data) => {
            if (!data) {
              return res.status(419).send({
                code: 419,
                message: 'selectAllPost is error!',
              });
            } else {
              return res.send({
                code:200,
                message: 'selectAllPosts is successful',
                result:{
                  posts:data,
                  lastPage: lastPage
                }
              });
          } 
          })

        }
    } 
    })


    
  }
  

}
    
exports.view = async (req, res) =>{
 await Post.updatePostViews(req.params.post_id,(err, data) => {
    if (!data) {
      return res.status(419).send({
        code: 419,
        message: 'updatePostViews is error!'
      });
    } 
  });
     Post.selectPostFromId(req.params.post_id,(err, data) => {
      if (!data) {
        return res.status(419).send({
          code: 419,
          message: 'selectPostFromId is error!'
        });
      } else {
        
        return res.send({
          code:200,
          message: 'selectPostFromId is successful',
          result:{
           post:{
           post_id:data.post_id,
           post_user:data.post_user,
           post_category:data.post_category,
           post_title:data.post_title,
           post_contents:data.post_contents,
           post_regdate:data.post_regdate,
           post_update:data.post_update,
           post_views:data.post_views,
           post_recommend:data.post_recommend,
           post_report:data.post_report,
           user_name:data.user_name,
           replyCnt: data.replyCnt,
          }
        }});
    } 
    });
  
}

exports.categorys = async (req, res)=>{
  Post.selectAllCategory((err, data) => {
    if (!data) {
      return res.status(419).send({
        code: 419,
        message: 'selectAllCategory is error!',
      });
    } else {
      return res.send({
        code:200,
        message: 'selectAllCategory is successful',
        result:{
          categorys:data
        }
      });
  } 
  });

}

exports.missions =async (req, res)=>{
  return res.send({
    code:200,
    message: 'selectAllCategory is successful',
    result:{
      missions:[]
    }
  });
}

exports.write = async (req, res) =>{

  const postReq = new Post(
    {
      post_user: req.user_id,
      post_title: req.body.post_title,
      post_contents: req.body.post_contents,
      post_category: req.body.post_category,
      post_mission: 0,
    }
  )



  Post.insertPost(postReq, (err,data)=>{
    if(!data){
      return res.status(419).send({
        code: 419,
        message: 'insertPost is error!',
      });
    }else{
      
      User.plusPoint({user_id:postReq.post_user , 
        category:postReq.post_category}, (err,data)=>{
        if(!data){
          return res.status(419).send({
            code: 419,
            message: 'plusPoint is error!',
          }); }    }
        )





      return res.send({
        code:200,
        message: 'insertPost is successful', 
       });
    }
  })

}
exports.edit =async (req,res) =>{

  const postReq = new Post(
    {
      post_user: req.user_id,
      post_id:  req.body.post_id,
      post_title: req.body.post_title,
      post_contents: req.body.post_contents,
      post_category: req.body.post_category,
      post_mission: req.body.post_mission,
      post_update: new Date().toISOString().slice(0, 19).replace('T', ' '),
      post_mission: 0,
    }
  )
  Post.updatePost(postReq, (err,data)=>{
    if(!data){
      return res.status(419).send({
        code: 419,
        message: 'updatePost is error!',
      });
    }else{
      return res.send({
        code:200,
        message: 'updatePost is successful', 
       });
    }
  })

}
exports.delete =async (req,res) =>{
  const postReq = new Post(
    {
      post_user: req.user_id,
      post_id:  req.params.post_id,
    });
    Post.deletePost(postReq, (err,data)=>{
      if(!data){
        return res.status(419).send({
          code: 419,
          message: 'deletePost is error!',
        });
      }else{
        return res.send({
          code:200,
          message: 'deletePost is successful', 
         });
      }
    })
}

exports.reply_select = async (req, res) =>{
  Reply.selectReplysFromPostId(req.params.post_id,(err, data) => {
    if (!data) {
      return res.status(419).send({
        code: 419,
        message: 'selectReplysFromPostId is error!',
      });
    } else {
      return res.send({
        code:200,
        message: 'selectReplysFromPostId is successful',
        result:{
          replys:data
        }
      });
  } 
  });
}

exports.reply_write = async (req,res) =>{
  
  const replyReq = new Reply(
    {
      reply_post: req.body.reply_post,
      reply_user: req.user_id,
      reply_contents: req.body.reply_contents,
      reply_type: req.body.reply_type,
      reply_order: req.body.reply_order,
      reply_group_id: req.body.reply_group_id,
    }
  )
   Reply.insertReply(replyReq, (err,data)=>{
    if(!data){
      return res.status(419).send({
        code: 419,
        message: 'insertReply is error!',
      });
    }
  })
if(replyReq.reply_type===1){
  return res.send({
    code:200,
    message: 'insertReply,UpdateReplyGroupId is successful', 
   });
}

  Reply.SelectReplyIdFromUserId(replyReq , (err,data)=>{
    if(!data){
      console.log("data:",data);
      data;
      return;
    }
    Reply.UpdateReplyGroupId(data.reply_id , (err,data)=>{
      if(!data){
        return res.status(419).send({
          code: 419,
          message: 'UpdateReplyGroupId is error!',
        });
      }else{
        return res.send({
          code:200,
          message: 'insertReply,UpdateReplyGroupId is successful', 
         });
      }
    })
  
  });
   
}

exports.reply_delete = async (req,res) =>{
  const replyReq = new Reply(
    {
      reply_id: req.params.reply_id,
      reply_user: req.user_id,
    }
  )
    

  Reply.deleteMyReply(replyReq, (err,data)=>{
    if(!data){
      return res.status(419).send({
        code: 419,
        message: 'deleteMyReply is error!',
      });
    }else{
      return res.send({
        code:200,
        message: 'deleteMyReply is successful', 
       });
    }
  })

}



//추천수 증가
exports.recommendsUp = async(req, res) =>{
  Post.updatePostRecommend(req.params.post_id,(err, data) => {
    if (!data) {
      return res.status(419).send({
        code: 419,
        message: 'updatePostViews is error!'
      });
    } else {
      
      return res.send({
        code:200,
        message: 'updatePostViews is successful',
        });
  } 
  });
}


exports.myPostList = async(req, res) =>{

  Post.selectMyPosts(req.user_id,(err, data) => {
    if (!data) {
      return res.status(419).send({
        code: 419,
        message: 'selectMyPosts is error!',
      });
    } else {
      return res.send({
        code:200,
        message: 'selectMyPosts is successful',
        result:{
          myPosts:data
        }
      });
  } 
  });
}



exports.myReplyList = async(req, res) =>{
  
  Reply.selectMyReplys(req.user_id,(err, data) => {
    if (!data) {
      return res.status(419).send({
        code: 419,
        message: 'selectMyPosts is error!',
      });
    } else {
      return res.send({
        code:200,
        message: 'selectMyPosts is successful',
        result:{
          myReplys:data
        }
      });
  } 
  });
}

exports.postImageUpload = async(req, res) =>{

  


}
