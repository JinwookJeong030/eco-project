const sql = require("./db.js");

//생성자
const Recommend = function (recommend) {
    this.rc_id = recommend.rc_id;
    this.rc_post = recommend.rc_post;
    this.rc_user = recommend.rc_user;
    this.rc_state = recommend.rc_state;
};
module.exports = Recommend;