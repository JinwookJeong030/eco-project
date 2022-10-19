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
  this.user_leader_plant= user.user_leader_plant;
  this.user_point = user.user_point;
  this.user_admin = user.user_admin;
  this.user_total_point = user.user_admin; 
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



User.updatePassword = (user, result)=> {
  
  const salt =crypto.randomBytes(128).toString('base64');
  
  user.user_password = hashPassword(user.user_password, salt);

  sql.query("UPDATE user SET user_password = '"+user.user_password+"'  WHERE user_id = " +
  user.user_id +
  " ;", 
  (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    const SaltInfo =new Salt({salt_user_email:user.user_email,
      salt:salt});

    sql.query('UPDATE salt SET salt = "'+ SaltInfo.salt +'" WHERE salt_user_email ="'+SaltInfo.salt_user_email+'" ;', (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }}
      );
    
    console.log('updatePassword : ', res);
    result(null,  res);
  });
};

User.plusPoint = ({user_id, category}, result)=> {
  if(!(category==='4')){
  sql.query(
    "UPDATE user SET user_point = user_point+100 ,user_total_point = user_total_point + 100   WHERE user_id = " +
      user_id +
      ";",
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
      console.log('plusPoint100: ', res);
      result(null, res);
    },
  );}
  else{

    sql.query(
      "UPDATE user SET user_point = user_point+400 ,user_total_point = user_total_point + 400   WHERE user_id = " +
        user_id +
        ";",
      (err, res) => {
        if (err) {
          console.log('error: ', err);
          result(err, null);
          return;
        }
        console.log('plusPoint100: ', res);
        result(null, res);
      },
    );



  }
};

  //user 전체수 조회
User.selectAllUsersCnt = (result) => {
    sql.query('SELECT COUNT(*) AS user_count FROM user', (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
      }
      result(null,  res);
    });
};
  //user 전체 조회
User.selectAllUsers = ({start, end},result) => {
    sql.query(`SELECT user.*  FROM user ORDER BY user_total_point DESC LIMIT ${start}, ${end}`, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
      // console.log('Select All users: ',  res );
      result(null,  res );
    });
  };

User.selectAllUsersCntFromUser = ({search_contents},result) => {
    sql.query(`SELECT COUNT(*) AS user_count FROM user WHERE user.user_name = '"${search_contents}"' ;`, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
 
      }

      result(null,  res);
    });
  };


// user 이름 조회 
User.selectAllUsersFromUser = ({start, end, search_contents} ,result) => {
  sql.query(`SELECT user.*, planting.* FROM user,planting WHERE AND user.user_name = '"${search_contents}"' AND user.user_id = planting.pt_user ORDER BY user_total_point DESC LIMIT ${start}, ${end}`, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    console.log('selectAllUsersFromUser All Posts: ',  res );
    result(null,  res );
  });
};

module.exports = User;
