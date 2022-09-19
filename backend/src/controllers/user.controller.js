const User = require('../models/user.model.js');
const jwt = require('../modules/jwt.js');
const redisClient = require('../modules/redis.js');

exports.register = (req, res) => {
  if (!(req.body.user_email && req.body.user_password && req.body.user_name)) {
    return res.status(400).send({
      message: 'Content can not be empty',
    });
  }
  const user = new User({
    user_email: req.body.user_email,
    user_password: req.body.user_password,
    user_name: req.body.user_name,
  });
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;


  if (!(emailRegex.test(user.user_email))) {
    return res.status(400).send({
      message: 'Email or password format is incorrect',
    });
  }
  // 데이터베이스에 저장
  User.register(user, (err, data) => {
    if (err) {
      if (
        err.sqlMessage ===
        "Duplicate entry '" + user.email + "' for key 'user.email'"
      ) {
        return res.status(429).send({ message: err.sqlMessage });
      } else if (
        err.sqlMessage ===
        "Duplicate entry '" + user.name + "' for key 'user.name'"
      ) {
        return res.status(439).send({ message: err.sqlMessage });
      } else {
        return res.status(500).send({ message: 'error' });
      }
    } else {
      return res.send({
        message: 'register is successful!',
      });
    }
  });
};

// 로그인
exports.login = async (req, res) => {
  if (!(req.body.email && req.body.password)) {
    
    return res.status(400).send({
      message: 'Content can not be empty',
    });
  }
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  User.login(user, (err, data) => {
    if (!data) {
      return res.status(419).send({
        code: 419,
        message: 'password is incorrect',
      });
    } else {
      const resUser = data;

      const accessToken = jwt.sign(resUser);
      const refreshToken = jwt.refresh();
      // 발급한 refresh token을 redis에 key를 user의 userNo로 하여 저장합니다.
    redisClient.set(user.email, refreshToken);

    res.status(200).send({ // client에게 토큰 모두를 반환합니다.
      ok: true,
      data: {
        accessToken,
        refreshToken,
      },
    });
  } 
  });
};
// 유저 이름
exports.check =async (req,res) =>{


  const reqUser = new User({
    userNo: req.userNo ,
  });

  User.selectUserInfo(reqUser, (err, data) => {
    if (!data) {
      return res.status(419).send({
        code: 419,
        message: 'onLogin is incorrect',
      });
    } else {

      res.send({
        userNo: data.userNo,
        email : data.email,
        name : data.name,
        message:"onLogin is successful"
    
      })
    };
  
  }
  );
};
exports.logout =async (req,res) =>{
  jwt.logout();
  res.send({
    message: 'logout is successful'
  })
};


