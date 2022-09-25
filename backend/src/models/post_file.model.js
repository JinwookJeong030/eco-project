const sql = require("./db.js");

//생성자
const Post_file = function (post_file) {
    this.pf_id = post_file.pf_id;
    this.post = post_file.post;
    this.path = post_file.path;
    this.name = post_file.name;
    this.type = post_file.type;
    this.size = post_file.size;
};