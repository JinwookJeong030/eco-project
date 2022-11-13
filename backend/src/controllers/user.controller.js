const User = require('../models/user.model.js');
const jwt = require('../modules/jwt.js');
const Plant = require('../models/plant.model.js');
const Planting = require('../models/planting.model.js');
const redisClient = require('../modules/redis.js');
exports.register = async (req, res) => {

  if (!(req.body.user_email && req.body.user_password && req.body.user_name)) {
    return res.status(400).send({
      code:400,
      message: 'Content can not be empty',
    });
  }
  const user = new User({
    user_email: req.body.user_email,
    user_password: req.body.user_password,
    user_name: req.body.user_name,
    user_point: 0,
    user_total_point: 0,
    user_admin:0
  });

  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (!(emailRegex.test(user.user_email))) {
    return res.status(400).send({
      code: 400,
      message: 'Email or password format is incorrect'
    });
  }
// 데이터베이스에 저장
  User.register(user, (err, data) => {
    if (err) {
      if (
        err.sqlMessage ===
        "Duplicate entry '" + user.user_email + "' for key 'user.user_email'"
      ) {
        return res.status(429).send({ 
          code: 429,
          message: err.sqlMessage 
        });
      } else if (
        err.sqlMessage ===
        "Duplicate entry '" + user.user_name + "' for key 'user.user_name'"
      ) {
        return res.status(439).send({ 
          code:439,
          message: err.sqlMessage 
        });
      } else {
        return res.status(500).send({
           code: 500,
           message: 'error', 
          });
      }
    } else {
      console.log("user email:"+user.user_email)
      User.selectUserFromUserEmail(user.user_email,(err,data)=>{
        if (!data)  return res.status(419).send({
          code: 419,
          message: 'selectUserFromUserEmail is error!',
        });
        const pt_user = data.user_id;
        //전체 개수 조회
        Plant.selectAllPlantLevel1Cnt((err,data)=>{
        if (!data)  return res.status(419).send({
            code: 419,
            message: 'selectAllPlantLevel1Cnt is error!',
          });
        const pt_plant = Math.floor(Math.random() * data.plant_cnt)+1;
        //식물 랜덤 생성
          Planting.createPlanting({pt_user,pt_plant},(err,data)=>{
          if (!data) {
          return res.status(419).send({
          code: 419,
          message: 'createPlanting is error!',
          });
          } else {
            return res.send({
              code:200,
              message: 'registor &&createPlanting is successful',      
          });
  } 
}
)
}
)
      })
      ;

    
  

    }
  });
};
// 로그인
exports.login = async (req, res) => {
  if (!(req.body.user_email && req.body.user_password)) {
    return res.status(400).send({
      code:400,
      message: 'Content can not be empty',
    });
  }
  const user = new User({
    user_email: req.body.user_email,
    user_password: req.body.user_password,
  });

  User.selectSalt(user,(err,data)=> {
    if(!data){
      return res.status(409).send({
        code: 419,
        message: 'email is incorrect'
      });
    }else {
      const resSalt = data.salt;
    User.login(user,resSalt, (err, data) => {
      if (!data) {
        return res.status(419).send({
          code: 419,
          message: 'password is incorrect'
        });
      } else {
        const resUser = data;
        const accessToken = jwt.sign(resUser);
        const refreshToken = jwt.refresh();
              //발급한 refresh token을 redis에 key를 user의 userNo로 하여 저장합니다.
        redisClient.set(user.user_email, refreshToken);
        res.status(200).send({ 
              //client에게 토큰 모두를 반환합니다.
        code: 200,
        message:"login is successful",
        result:{
          accessToken,
          refreshToken,
        }
      });
     } 
    });

  }
  }
  
  
  )

 
};
// 유저 이름
exports.check =async (req,res) =>{
  const reqUser = new User({
    user_id: req.user_id ,
  });
   User.selectUserInfo(reqUser, (err, data) => {
    if (!data) {
      return res.status(419).send({
        code: 419,
        message: 'onLogin is incorrect',
      });
    } else {
      res.send({
        code: 200,
        message:"onLogin is successful",
        result:{
            user_id: data.user_id,
            user_email : data.user_email,
            user_name : data.user_name,
            user_admin: data.user_admin,
            user_regdate: data.user_regdate,
            user_total_point:data.user_total_point,
            user_point: data.user_point,
            user_leader_plant: data.user_leader_plant
        }
      })
    };
   }
  );
};
exports.logout =async (req,res) =>{
  jwt.logout();
  res.send({
    code: 200,
    message: 'logout is successful'
  })
};
exports.changePw =async (req,res) =>{

  const reqUser = new User({
    user_id: req.user_id ,
    user_email: req.user_email,
    user_password: req.body.user_password,
  });
  User.updatePassword(reqUser, (err, data) => {
    if (!data) {
      return res.status(419).send({
        code: 419,
        message: 'changePw is incorrect',
      });
    } else {
      res.send({
        code: 200,
        message:"changePw is successful",
      })
    };
   }
  );
};



exports.ranking = async (req,res) =>{
  const {page, search_type,search_contents} = req.query;

  const end = 4;
  let start = 0;

  if (page <= 0) {
     start = 0;
  } else {
      start = (page - 1) * end;
  }

  if(search_type === "user"){
    User.selectAllUsersCntFromUser({search_type,search_contents}, (err, data) => {
      if (!data) {
        return res.status(419).send({
          code: 419,
          message: 'selectAllUsersCntFromTitle is error!',
        });
      } else {
        const lastPage = Math.ceil(parseInt(data[0].user_count)/end);
        if (page > Math.ceil(parseInt(data[0].user_count) / end)) {
          return res.send({
            code:200,
            message: 'selectAllUsersCntFromTitle is null',
            result:{
              ranking:[],
              lastPage: lastPage
            }
          })
        }else{
         
          User.selectAllUsersFromUser({start,end,search_contents}, (err, data) => {
      if (!data) {
        return res.status(419).send({
          code: 419,
          message: 'selectAllUsersFromTitle is error!',
        });
      } else {
        return res.send({
          code:200,
          message: 'selectAllUsersFromTitle is successful',
          result:{
            ranking:data,
            lastPage: lastPage
          }
        });
    } 
    })
  }
} 
})
  }
  else
  {
    User.selectAllUsersCnt( (err, data) => {
      if (!data) {
        return res.status(419).send({
          code: 419,
          message: 'selectAllUsersCnt is error!',
        });
      } else {
        const lastPage = Math.ceil(parseInt(data[0].user_count)/end);
        if (page > Math.ceil(parseInt(data[0].user_count) / end)) {
          return res.send({
            code:200,
            message: 'selectAllUsersCnt is null',
            result:{
              ranking:[],
              lastPage: lastPage
              
            }
          })
        }else{
      
          User.selectAllUsers({start, end,search_contents},(err, data) => {
            if (!data) {
              return res.status(419).send({
                code: 419,
                message: 'selectAllUsers is error!',
              });
            } else {
              return res.send({
                code:200,
                message: 'selectAllUsers is successful',
                result:{
                  ranking:data,
                  lastPage: lastPage
                }
              });
          } 
          })

        }
  }
});
    
}
}
