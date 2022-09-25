const Post = require('../models/post.model.js');
const jwt = require('../modules/jwt.js');
const redisClient = require('../modules/redis.js');

exports.posts = async (req, res) => {

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
exports.post = async (req, res) =>{
  
}
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

}
exports.delete =async (req,res) =>{

}
exports.reply_write = async (req,res) =>{

}
exports.reply_delete = async (req,res) =>{

}
exports.reply_select = async (req,res) =>{

}