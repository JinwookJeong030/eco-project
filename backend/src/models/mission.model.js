const sql = require("./db.js");

//생성자
const Mission = function (mission) {
    this.mission_id = mission.mission_id;
    this.mission_title = mission.mission_title;
    this.mission_contents = mission.mission_contents;
    this.mission_point = mission.mission_point;
};