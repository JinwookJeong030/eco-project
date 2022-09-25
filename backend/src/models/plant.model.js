const sql = require("./db.js");

//생성자
const Plant = function (plant) {
    this.plant_id =plant.plant_id;
    this.plant_name = plant.plant_name;
    this.plant_grade = plant.plant_grade;
    this.plant_level = plant.plant_level;
    this.plant_img_path = plant.plant_img_path;
};