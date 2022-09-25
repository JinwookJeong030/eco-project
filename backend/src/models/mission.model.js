const sql = require("./db.js");

//생성자
const Mission = function (mission) {
    this.mission_id = mission.mission_id;
    this.title = mission.title;
    this.contents = mission.contents;
    this.category = mission.category;
    this.point = mission.point;
};