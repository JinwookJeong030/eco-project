const sql = require("./db.js");

//생성자
const Belong = function (belong) {
    this.belong_id = belong.belong_id;
    this.user = belong.user;
    this.commu = belong.commu;
    this.role = belong.role;
    this.regdate = belong.regdate;
};