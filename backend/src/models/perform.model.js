const sql = require("./db.js");

//생성자
const Perform = function (perform) {
    this.perform_id =perform.perform_id;
    this.perform_mission = perform.perform_mission;
    this.perform_user = perform.perform_user;
    this.perform_start = perform.perform_start;
    this.perform_end = perform.perform_end;
    this.perform_refresh = perform.perform_refresh;
};
module.exports = Perform;