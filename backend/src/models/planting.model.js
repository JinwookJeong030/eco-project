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
Planting.selectCompletePlantFromUser =(user_id, result)=>{
  sql.query(`SELECT planting.*, plant.*  FROM planting, plant WHERE planting.pt_plant = plant.plant_id AND pt_user = ${user_id} 
  AND pt_grow_plant = 0`, (err, res) => {
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



module.exports = Planting;