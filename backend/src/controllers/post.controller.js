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
        posts.push(data);
  
        res.status(200).send({ // client에게 토큰 모두를 반환합니다.
            ok: true,
            data: {
              posts
            },
      });
    } 
    });
  };