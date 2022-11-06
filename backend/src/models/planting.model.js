const sql = require("./db.js");

//생성자
const Planting = function (planting) {
    this.pt_id =planting.pt_id;
    this.pt_plant = planting.pt_plant;
    this.pt_user = planting.pt_user;
    this.pt_point = planting.pt_point||0;
    this.pt_regdate = new Date();
    this.pt_complete_date = planting.pt_complete_date;
    this.pt_grow_plant = planting.pt_grow_plant;
};

Planting.createPlanting=({pt_user,pt_plant},result)=>{
    const reqPT = new Planting(
        {   pt_plant:pt_plant,
            pt_user:pt_user,
            pt_poitn:0,
            pt_complete_date:null,
            pt_grow_plant:true,
        }
    )
    sql.query(`INSERT INTO planting SET ?`, reqPT, (err, res) => {
        if (err) {
          console.log('error: ', err);
          result(err, null);
        }
        console.log('plant_cnt: ', res);
        result(null,  res);
      });

}

Planting.deletePlanting = ({pt_id, pt_user}, result)=>{

  sql.query(`DELETE FROM planting WHERE pt_id = ${pt_id} AND pt_user =${pt_user}`, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    }
    console.log('deletePlanting: ', res);
    result(null,  res);
  });
}


Planting.selectGrowingPlantFromUser =(user_id, result)=>{
    sql.query(`SELECT planting.*, plant.*  FROM planting, plant WHERE planting.pt_plant = plant.plant_id AND pt_user = ${user_id} AND pt_grow_plant = 1;`, (err, res) => {
        if (err) {
          console.log('error: ', err);
          result(err, null);
        }
        console.log('plant: ', res);
        result(null,  res);
      });
}

  //전체 갯수 조회
Planting.selectCompletePlantCnt = (user_id,result) => {
    sql.query(`SELECT COUNT(*) AS cp_count FROM planting WHERE pt_user = ${user_id} ;`, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
 
      }
    
      result(null,  res);
    });
  };



Planting.selectCompletePlantFromUser =({start, end, user_id}, result)=>{
  sql.query(`SELECT planting.*, plant.*  FROM planting, plant WHERE planting.pt_plant = plant.plant_id AND pt_user = ${user_id} AND pt_grow_plant = 0 ORDER BY pt_regdate DESC LIMIT ${start}, ${end}`, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
      }
      console.log('plant: ', res);
      result(null,  res);
    });
}


Planting.plusPointPlant = ({user_id,pt_id,point}, result)=>{
  sql.query(`Update planting SET pt_point = pt_point + ${point}  WHERE pt_id = ${pt_id} AND pt_user = ${user_id}`, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
      }
      console.log('plant: ', res);
      result(null,  res);
    });

}


Planting.upgradePlant =({user_id, pt_id, pt_plant},result)=>{
  sql.query(`Update planting SET pt_point = 0 ,pt_plant = ${pt_plant}  WHERE pt_id = ${pt_id} AND pt_user = ${user_id}`, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    }
    console.log('upgradePlant: ', res);
    result(null,  res);
  });

}
Planting.completePlant =({user_id, pt_id, pt_plant},result)=>{
   const pt_complete_date = new Date();
  sql.query(`Update planting SET pt_point = 0 , pt_plant = ${pt_plant},  pt_complete_date = "${pt_complete_date}" , pt_grow_plant = 0 WHERE pt_id = ${pt_id} AND pt_user = ${user_id} ;`, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    }
    console.log('upgradePlant: ', res);
    result(null,  res);
  });

}

Planting.plantingCntFromUser = (user_id, result) =>{
  sql.query(`SELECT COUNT(*) AS pt_cnt FROM planting WHERE pt_user = ${user_id} AND pt_grow_plant = 0 ;`, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    }
    console.log('plantingCntFromUser: ', res[0]);
    result(null,  res[0]);
  });
}

module.exports = Planting;