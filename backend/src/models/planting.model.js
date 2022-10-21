const sql = require("./db.js");

//생성자
const Planting = function (planting) {
    this.pt_id =planting.pt_id;
    this.pt_plant = planting.pt_plant;
    this.pt_user = planting.pt_user;
    this.pt_point = planting.pt_point;
    this.pt_regdate = new Date();
    this.pt_complete_date = planting.pt_complete_date;
    this.pt_grow_plant = planting.pt_grow_plant;
};

Planting.createPlanting=({pt_user,pt_plant_cnt},result)=>{
    const reqPT = new Planting(
        {   pt_plant:1,
            pt_user:pt_user,
            pt_poitn:0,
            pt_complete_date:null,
            pt_grow_plant:true,
        }
    )

    sql.query(`INSERT INTO planting SET ?`, reqPT, (err, res) => {
        if (err) {
          console.log('error: ', err);
          result(err, null);
        }
        console.log('plant_cnt: ', res);
        result(null,  res);
      });

}

module.exports = Planting;