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

    console.log('Created customer: ', { userNo: res.inseertId, ...user });
    result(null, { userNo: res.inseertId, ...user });
  });
};

User.login = (user, result) => {
  sql.query(
    'SELECT * FROM user WHERE email = ? AND password = ?',
    [user.email, user.password],
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }

      console.log('Created customer: ', { userNo: res.inseertId, ...user });
      result(null, { userNo: res.inseertId, ...user });
    },
  );
};

module.exports = User;
