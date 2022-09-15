const sql = require('./db.js');

// 생성자
const User = function (user) {
  this.userNo = user.userNo;
  this.email = user.email;
  this.password = user.password;
  this.name = user.name;
};

// user 튜플 추가
User.register = (user, result) => {
  sql.query('INSERT INTO user SET ?', user, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    console.log('Created user: ', { userNo: res.inseertId, ...user });
    result(null, { userNo: res.inseertId, ...user });
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

module.exports = User;
