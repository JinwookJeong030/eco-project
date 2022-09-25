const sql = require("./db.js");

//생성자
const Plant = function (plant) {
    this.plant_id =plant.plant_id;
    this.name = plant.name;
    this.grade = plant.grade;
    this.level = plant.level;
    this.img_path = plant.img_path;
};