const sql = require("./db.js");

//생성자
const Belong = function (belong) {
    this.belong_id = belong.belong_id;
    this.belong_user = belong.belong_user;
    this.belong_commu = belong.belong_commu;
    this.belong_regdate = new Date();
};
module.exports = Belong;
