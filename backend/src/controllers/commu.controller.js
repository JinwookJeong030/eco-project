const commu = require('../models/commu.model.js');
const jwt = require('../modules/jwt.js');
const redisClient = require('../modules/redis.js');
// 보내는 방식 res.send()
exports.list = async (req, res) => {

    commu.selectAllCommus((err, data) => {
      if (!data) {
        return res.status(419).send({
          code: 419,
          message: 'selectAllcommu is error!',
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
  //함수 어떻게 보낼지