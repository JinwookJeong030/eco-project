const Post = require('../models/post.model.js');
const jwt = require('../modules/jwt.js');
const redisClient = require('../modules/redis.js');

exports.list = async (req, res) => {

    Post.selectAllPosts((err, data) => {
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
            posts:data
          }
        });
    } 
    });
  };

exports.view = async (req, res) =>{


    
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
           post_recommand:data.post_recommand,
           post_report:data.post_report,
           user_name:data.user_name,
          }
        }});
    } 
    });


  
};
exports.write = async (req, res) =>{

  const postReq = new Post(
    {
      post_user: req.user_id,
      post_title: req.body.post_title,
      post_contents: req.body.post_contents,
    }
  )
  Post.insertPost(postReq, (err,data)=>{
    if(!data){
      return res.status(419).send({
        code: 419,
        message: 'insertPost is error!',
      });
    }else{
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

exports.reply_write = async (req,res) =>{

}
exports.reply_delete = async (req,res) =>{

}
exports.reply_select = async (req,res) =>{

}