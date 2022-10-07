const sql = require("./db.js");
const Commu = require("./commu.model.js");

//생성자
const Commu_Mission = function (commu_mission) {
    this.cm_id = commu_mission.cm_id;
    this.cm_commu = commu_mission.cm_commu;
    this.cm_mission = commu_mission.cm_mission;
    this.cm_regdate = commu_mission.cm_regdate;
    this.cm_enddate = commu_mission.cm_enddate;
};

  // 모임 미션 조회 / commu_id / commu_mission 테이블 *
  Commu_Mission.Searchmission = (commu_id,result)=> {
    sql.query('SELECT commu_mission.* ,commu.commu_id From commu, =' +commu_id+"ORDER BY commu_mission.cm_mission",(err,res)=>{
      if(err) {
        console.log('error:',err);
        result(err,null);
        return;
      }
      console.log('Searchmission Commu: ', res);
      result(null,res);
    });
  }
    

module.exports = Commu_Mission;