const sql = require("./db.js");

//생성자
const Commu_replay = function (commu_notice) {
    this.cr_id = commu_notice.cn_id;
    this.cr_commu = commu_notice.cn_commu;
    this.cr_user = commu_notice.cn_title;
    this.cr_contents = commu_notice.cn_contents;
    this.cr_regdate = new Date();
};
