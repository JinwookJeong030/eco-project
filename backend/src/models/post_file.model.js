const sql = require("./db.js");

//생성자
const Post_file = function (post_file) {
    this.pf_id = post_file.pf_id;
    this.pf_post = post_file.pf_post;
    this.pf_path = post_file.pf_path;
    this.pf_name = post_file.pf_name;
    this.pf_type = post_file.pf_type;
    this.pf_size = post_file.pf_size;
};