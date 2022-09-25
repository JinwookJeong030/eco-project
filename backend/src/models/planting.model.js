const sql = require("./db.js");

//생성자
const Planting = function (planting) {
    this.pt_id =planting.pt_id;
    this.plant = planting.plant;
    this.user = planting.user;
    this.point = planting.point;
    this.regdate = planting.regdate;
    this.comdate = planting.comdate;
    this.prplant = planting.prplant;
    this.repplant = planting.repplant;
};