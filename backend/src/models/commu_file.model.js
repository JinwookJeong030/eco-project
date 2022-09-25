const sql = require("./db.js");

//생성자
const Commu_file = function (commu_file) {
    this.cf_id = commu_file.cf_id;
    this.cf_commu = commu_file.cf_commu;
    this.cf_path = commu_file.cf_path;
    this.cf_name = commu_file.cf_name;
    this.cf_type = commu_file.cf_type;
    this.cf_size = commu_file.cf_size;
};