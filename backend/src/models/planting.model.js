const sql = require("./db.js");

//생성자
const Planting = function (planting) {
    this.pt_id =planting.pt_id;
    this.pt_plant = planting.pt_plant;
    this.pt_user = planting.pt_user;
    this.pt_point = planting.pt_point;
    this.pt_regdate = planting.pt_regdate;
    this.pt_comdate = planting.pt_comdate;
    this.pt_prplant = planting.pt_prplant;
    this.pt_repplant = planting.pt_repplant;
};
module.exports = Planting;