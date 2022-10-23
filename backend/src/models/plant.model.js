const sql = require("./db.js");

//생성자
const Plant = function (plant) {
    this.plant_id =plant.plant_id;
    this.plant_name = plant.plant_name;
    this.plant_grade = plant.plant_grade;
    this.plant_level = plant.plant_level;
    this.plant_img_path = plant.plant_img_path;
    this.plant_total_level = plant.plant_total_level;
    this.plant_total_point = plant.plant_total_point;
};

//식물레벨1 조회
Plant.selectAllPlantLevel1Cnt =(result)=>{
    sql.query(`SELECT COUNT(*) AS plant_cnt FROM plant WHERE plant_level = 1`, (err, res) => {
        if (err) {
          console.log('error: ', err);
          result(err, null);
        }
        console.log('plant_cnt: ', res[0]);
        result(null,  res[0]);
      });

}

module.exports = Plant;