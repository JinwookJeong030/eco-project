const sql = require("./db.js");

//생성자
const Apply = function (apply) {
    this.apply_id = apply.apply_id;
    this.apply_user = apply.apply_user;
    this.apply_commu = apply.apply_commu;
    this.apply_type = apply.apply_type;
    this.apply_refuse = apply.apply_refuse;
    this.apply_regdate = apply.apply_regdate;
};
module.exports = Apply;