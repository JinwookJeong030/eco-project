const sql = require("./db.js");

//생성자
const Reply = function (reply) {
    this.reply_id =reply.reply_id;
    this.reply_post = reply.reply_post;
    this.reply_user = reply.reply_user;
    this.reply_content = reply.reply_content;
    this.reply_regdate = reply.reply_regdate;
    this.reply_type = reply.reply_type;
    this.reply_order = reply.reply_order;
    this.reply_group_id = reply.reply_group_id;
};