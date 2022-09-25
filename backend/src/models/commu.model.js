const sql = require("./db.js");

//생성자
const Commu = function (commu) {
    this.commu_id =commu.commu_id;
    this.name = commu.name;
    this.contents = commu.contents;
    this.leader = commu.leader;
    this.region = commu.region;
    this.regdate = commu.regdate;
};