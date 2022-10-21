const Plant = require('../models/plant.model.js');
const Planting = require('../models/planting.model.js');
const User = require('../models/user.model.js');
const jwt = require('../modules/jwt.js');
const redisClient = require('../modules/redis.js');


exports.delete =async (req,res) =>{

}
exports.select =async (req,res) =>{
const user_id = req.params.user_id;
Planting.selectAllPlantFromUser(user_id,(err,data)=>{
    if (!data) {
    return res.status(419).send({
    code: 419,
    message: 'selectAllPlantFromUser is error!',
    });
    } else {
      return res.send({
        code:200,
        message: 'selectAllPlantFromUser is successful',      
        planting:data
    })
}}
    
    )


}
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