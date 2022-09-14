const User = require('../models/user.model.js');
const jwt = require('../modules/jwt.js');

exports.register = (req, res) => {
  if (!(req.body.email && req.body.password && req.body.name)) {
    return res.status(400).send({
      message: 'Content can not be empty',
    });
  }
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
  });
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const pwRegex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

  if (!(emailRegex.test(user.email) && pwRegex.test(user.password))) {
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

// 전체 조회
exports.login = (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  User.login(user, (err, data) => {
    if (err)
      return res.status(500).send({
        message: 'error',
      });
    else {
      const jwtToken = jwt.sign(data);
      return res.send({
        token: jwtToken.token,
      });
    }
  });
};
