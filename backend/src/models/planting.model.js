const sql = require("./db.js");

//생성자
const Planting = function (planting) {
    this.pt_id =planting.pt_id;
    this.pt_plant = planting.pt_plant;
    this.pt_user = planting.pt_user;
    this.pt_point = planting.pt_point;
    this.pt_regdate = planting.pt_regdate;
    this.pt_complete_date = planting.pt_complete_date;
    this.pt_grow_plant = planting.pt_grow_plant;
};
module.exports = Planting;