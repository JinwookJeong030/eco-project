const sql = require("./db.js");

// 생성자
const Post = function (post) {
    this.post_id =post.post_id
    this.user = post.user;
    this.category = post.category;
    this.title = post.title;
    this.contents = post.contents;
    this.regdate = post.regdate;
    this.update = post.update;
    this.views = post.views;
    this.recommand = post.recommand;
    this.report = post.report;
    
  };