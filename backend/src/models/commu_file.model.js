const sql = require("./db.js");

//생성자
const Commu_file = function (commu_file) {
    this.cn_id = commu_file.cf_id;
    this.commu = commu_file.commu;
    this.path = commu_file.path;
    this.name = commu_file.name;
    this.type = commu_file.type;
    this.size = commu_file.size;
};