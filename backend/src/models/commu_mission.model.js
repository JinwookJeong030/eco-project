const sql = require("./db.js");

//생성자
const Commu_Mission = function (commu_mission) {
    this.cm_id = commu_mission.cm_id;
    this.cm_commu = commu_mission.cm_commu;
    this.cm_title = commu_mission.cm_title;
    this.cm_contents = commu_mission.cm_contents;
    this.cm_start = commu_mission.cm_start;
    this.cm_end = commu_mission.cm_end;
};
module.exports = Commu_Mission;