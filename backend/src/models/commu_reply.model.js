const sql = require("./db.js");

//생성자
const Commu_reply = function (commu_reply) {
    this.cr_id = commu_reply.cr_id;
    this.commu = commu_reply.commu;
    this.user = commu_reply.user;
    this.contents = commu_reply.contents;
    this.regdate = commu_reply.regdate;
};