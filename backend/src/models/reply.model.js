const sql = require("./db.js");

//생성자
const Reply = function (reply) {
    this.reply_id =reply.reply_id;
    this.post = reply.post;
    this.user = reply.user;
    this.content = reply.content;
    this.regdate = reply.regdate;
    this.update = reply.update;
    this.type = reply.type;
    this.order = reply.order;
    this.group_id = reply.group_id;
};