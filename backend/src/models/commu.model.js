const sql = require("./db.js");

//생성자
const Commu = function (commu) {
    this.commu_id =commu.commu_id;
    this.commu_name = commu.commu_name;
    this.commu_contents = commu.commu_contents;
    this.commu_leader = commu.commu_leader;
    this.commu_region = commu.commu_region;
    this.commu_regdate = commu.commu_regdate;
};