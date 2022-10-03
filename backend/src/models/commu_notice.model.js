const sql = require("./db.js");

//생성자
const Commu_notice = function (commu_notice) {
    this.cn_id = commu_notice.cn_id;
    this.cn_commu = commu_notice.cn_commu;
    this.cn_title = commu_notice.cn_title;
    this.cn_contents = commu_notice.cn_contents;
    this.cn_regdate = commu_notice.cn_regdate;
    this.cn_views = commu_notice.cn_views;
};
module.exports = Commu_notice;