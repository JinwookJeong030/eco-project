const sql = require("./db.js");

//생성자
const Perform = function (perform) {
    this.perform_id =perform.perform_id;
    this.mission = perform.mission;
    this.user = perform.user;
    this.start_date = perform.start_date;
    this.end_date = perform.end_date;
    this.refresh = perform.refresh;
};