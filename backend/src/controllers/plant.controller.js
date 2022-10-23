const Plant = require('../models/plant.model.js');
const Planting = require('../models/planting.model.js');
const User = require('../models/user.model.js');
const jwt = require('../modules/jwt.js');
const redisClient = require('../modules/redis.js');


exports.delete =async (req,res) =>{
  const pt_id = req.body.pt_id;
  const pt_user = req.user_id;
  Planting.deletePlanting({pt_id,pt_user} , (err,data)=>{
    if (!data) {
    return res.status(419).send({
    code: 419,
    message: 'deletePlanting is error!',
    });
    } 
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
          message: 'deletePlanting &&createPlanting is successful',      
      });
} 
}
)
}
)
})


}
exports.selectGrow =async (req,res) =>{
const user_id = req.params.user_id;
if(!user_id)
return res.send({
  code: 419,
  message: 'user_id is error!',
  result:{plant:[]}
  });
Planting.selectGrowingPlantFromUser(user_id,(err,data)=>{
    if (!data) {
    return res.status(419).send({
    code: 419,
    message: 'selectAllPlantFromUser is error!',
    });
    } else {
      return res.send({
        code:200,
        message: 'selectAllPlantFromUser is successful',      
        result:{plant:data}
    })
}}
    )
};
exports.selectComplete =async (req,res) =>{
  const user_id = req.params.user_id;
  if(!user_id)
  return res.send({
    code: 419,
    message: 'user_id is error!',
    result:{plant:[]}
    });
  Planting.selectCompletePlantFromUser(user_id,(err,data)=>{
      if (!data) {
      return res.status(419).send({
      code: 419,
      message: 'selectAllPlantFromUser is error!',
      });
      } else {
        return res.send({
          code:200,
          message: 'selectAllPlantFromUser is successful',      
          result:{plant:data}
      })
  }}
      )
  
  };


exports.point =async (req,res) =>{

}
exports.leader =async (req,res) =>{
    const user_id = req.user_id;
    const user_leader_plant = req.body.user_leader_plant;

    User.updateLeaderPlant({user_id, user_leader_plant},(err,data)=>{
    if (!data) {
    return res.status(419).send({
    code: 419,
    message: 'selectAllPlantFromUser is error!',
    });
    } else {
      return res.send({
        code:200,
        message: 'selectAllPlantFromUser is successful',      
    })
}})

}