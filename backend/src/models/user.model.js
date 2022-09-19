const sql = require('./db.js');
const crypto = require('crypto');
const salt = crypto.randomBytes(128).toString('base64');
const hashPassword =(password)=>{ 
  
  return crypto.createHash('sha512').update(password + salt).digest('hex');
};

// 생성자
const User = function (user) {
  this.user_id = user.user_id;
  this.user_email = user.user_email;
  this.user_password = hashPassword(user.user_password);
  this.user_name = user.user_name;
  this.user_regdate = user.user_regdate;
  this.user_point = user.user_point;
};

// user 튜플 추가
User.register = (user, result) => {
  sql.query('INSERT INTO user SET ?', user, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    console.log('Created user: ', {  ...user });
    result(null, { ...user });
  });
};

User.login = (user, result) => {
  sql.query(
    "SELECT * FROM user WHERE email ='" +
      user.email +
      "' AND password = '" +
      user.password +
      "';",
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }

      console.log('login user: ', res[0]);
      result(null, res[0]);
    },
  );
};

User.selectUserInfo = (user, result)=> {
  sql.query(
    "SELECT * FROM user WHERE userNo = " +
      user.userNo +
      ";",
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }

      console.log('selectUserInfo: ', res[0]);
      result(null, res[0]);
    },
  );
};



module.exports = User;
