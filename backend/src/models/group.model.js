const sql = require("./db.js");

// 생성자
const Gorup = function (group) {
    this.group_id =group.group_id
    this.name = group.name;
    this.contents = group.contents;
    this.leader = group.leader;
    this.region = group.region;
    this.regdate = group.regdate;
    
  };