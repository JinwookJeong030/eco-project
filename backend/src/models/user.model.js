const sql = require('./db.js');
const crypto = require('crypto');

const Salt = function (salt) {
 this.salt_user_email = salt.salt_user_email;
 this.salt = salt.salt;
};


/**salt 수정해야됨... */
const hashPassword =(password, salt)=>{ 
  return crypto.createHash('sha512').update(password + salt).digest('hex');
};



// 생성자
const User = function (user) {
  this.user_id = user.user_id;
  this.user_email = user.user_email;
  this.user_password = user.user_password;
  this.user_name = user.user_name;
  this.user_regdate = user.user_regdate;
  this.user_mission_cnt = user.user_mission_cnt;
  this.user_ranking = user.user_ranking;
  this.user_leader_plant= user.user_leader_plant;
  this.user_point = user.user_point;
};



// user 튜플 추가
User.register = (user, result) => {
  const salt =crypto.randomBytes(128).toString('base64');
  
  user.user_password = hashPassword(user.user_password, salt);

  sql.query('INSERT INTO user SET ?', user, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    const SaltInfo =new Salt({salt_user_email:user.user_email,
      salt:salt});

    sql.query('INSERT INTO salt SET ?', SaltInfo, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }}
      );
    
    console.log('Created user: ', {  ...user });
    result(null, { ...user });
  });
};
User.selectSalt = (user, result) =>{
  sql.query("SELECT * FROM salt WHERE salt_user_email ='"+user.user_email+"';", (err, res) => {
    if (err) {
      console.log('salt: ', err);
      result(err, null);
      return;
    }
    console.log('salt: ', res);
    result(null, res[0]);
  
  })
};

User.login = (user,salt, result) => {

    sql.query(
      "SELECT * FROM user WHERE user_email ='" +
        user.user_email +
        "' AND user_password = '" +
        hashPassword(user.user_password , salt)+
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
    "SELECT * FROM user WHERE user_id = " +
      user.user_id +
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
