const Post = require('../models/post.model.js');
const jwt = require('../modules/jwt.js');
const redisClient = require('../modules/redis.js');

exports.posts = async (req, res) => {
    const posts = new Array();
  
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
            data
          }
         } );
    } 
    });
  };