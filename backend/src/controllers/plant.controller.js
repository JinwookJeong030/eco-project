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
  const page= req.params.page;
  const end = 9;
  let start = 0;
  
  if (page <= 0) {
    start = 0;
 } else {
     start = (page - 1) * end;
 }

 if(!user_id)
 return res.send({
   code: 419,
   message: 'user_id is error!',
   result:{plant:[]}
   });

  Planting.selectCompletePlantCnt(user_id, (err, data) => {
    if (!data) {
      return res.status(419).send({
        code: 419,
        message: 'selectCompletePlantCnt is error!',
      });
    } else {
      const lastPage = Math.ceil(parseInt(data[0].cp_count)/end);
      console.log(lastPage)
      if (page > Math.ceil(parseInt(data[0].cp_count) / end)) {
        return res.send({
          code:200,
          message: 'selectCompletePlantCnt is null',
          result:{
            plant:[],
            lastPage: lastPage
          }
        })
      }else{
  Planting.selectCompletePlantFromUser({start,end,user_id},(err,data)=>{
      if (!data) {
      return res.status(419).send({
      code: 419,
      message: 'selectAllPlantFromUser is error!',
      });
      } else {
        
        return res.send({
          code:200,
          message: 'selectAllPlantFromUser is successful',      
          result:{plant:data,
            lastPage: lastPage},
       
      })
  }}
      )   }
    } 
    })
  
  };


exports.point =async (req,res) =>{
  const user_id = req.user_id;
  const point = req.body.point;
  const pt_id = req.body.growPlant.pt_id;
  const pt_point = req.body.growPlant.pt_point;
  const plant_total_point = req.body.growPlant.plant_total_point;
  const plant_name = req.body.growPlant.plant_name;
  const plant_level = req.body.growPlant.plant_level;
  const plant_total_level = req.body.growPlant.plant_total_level;

  //전체 포인트보다 적게 부여했을때
  if(plant_total_point>(point+pt_point)){
    Planting.plusPointPlant({user_id,pt_id, point},(err,data)=>{
      if (!data) {
      return res.status(419).send({
      code: 419,
      message: 'updatePlant is error!',
      });
      } 
        
      User.minusPoint({user_id, point},(err,data)=>{
          if (!data) {
          return res.status(419).send({
          code: 419,
          message: 'minusPoint is error!',
          });
          } else {
            
            return res.send({
              code:200,
              message: 'plusPointPlant && minusPoint is successful',      
          })
        
      }});
    

  });
  }
  else{

    Plant.selectNextPlant({plant_name,plant_level},(err,data)=>{
      if (!data) {
      return res.status(419).send({
      code: 419,
      message: 'selectNextPlant is error!',
      });
      } 
      if(data.plant_total_level === data.plant_level){

        Planting.plantingCntFromUser(user_id,(err,data)=>{
          if (!data) {
          return res.status(419).send({
          code: 419,
          message: 'completePlant is error!',
          });
          } else {
            const pt_cnt = data.pt_cnt;
            //전체 개수 조회
            Plant.selectAllPlantLevel1Cnt((err,data)=>{
              if (!data)  return res.status(419).send({
                  code: 419,
                  message: 'selectAllPlantLevel1Cnt is error!',
                });
              const pt_plant = Math.floor(Math.random() * data.plant_cnt)+1;
             
              //식물 랜덤 생성
                Planting.createPlanting({pt_user:user_id,pt_plant},(err,data)=>{
                if (!data) {
                return res.status(419).send({
                code: 419,
                message: 'createPlanting is error!',
                });
                }});
                console.log("*********************************");
                console.log(pt_cnt);
                console.log("*********************************");
         
          }
          )
          }});

        Planting.completePlant({user_id, pt_id , pt_plant:data.plant_id},(err,data)=>{
          if (!data) {
          return res.status(419).send({
          code: 419,
          message: 'completePlant is error!',
          });
          } else {
            User.minusPoint({user_id, point},(err,data)=>{
              if (!data) {
              return res.status(419).send({
              code: 419,
              message: 'minusPoint is error!',
              });
              } else {
                
                return res.send({
                  code:200,
                  message: 'completePlant && minusPoint is successful',      
              })
            
        
          }});
          }});


      }
      else{
      Planting.upgradePlant({user_id, pt_id , pt_plant:data.plant_id},(err,data)=>{
        if (!data) {
        return res.status(419).send({
        code: 419,
        message: 'updatePlant is error!',
        });
        } else {
          User.minusPoint({user_id, point},(err,data)=>{
            if (!data) {
            return res.status(419).send({
            code: 419,
            message: 'minusPoint is error!',
            });
            } else {
              
              return res.send({
                code:200,
                message: 'completePlant && minusPoint is successful',      
            })
          
      
        }});
        }});
      }


    });
    


    
  }

  



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