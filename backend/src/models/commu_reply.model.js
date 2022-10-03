const sql = require("./db.js");

//생성자
const Commu_reply = function (commu_reply) {
    this.cr_id = commu_reply.cr_id;
    this.cr_commu = commu_reply.cr_commu;
    this.cr_user = commu_reply.cr_user;
    this.cr_contents = commu_reply.cr_contents;
    this.cr_regdate = commu_reply.cr_regdate;
};
module.exports = Commu_reply;