const sql = require("./db.js");

//생성자
const Commu_notice = function (commu_notice) {
    this.cn_id = commu_notice.cn_id;
    this.commu = commu_notice.commu;
    this.title = commu_notice.title;
    this.contents = commu_notice.contents;
    this.regdate = commu_notice.regdate;
    this.views = commu_notice.views;
};