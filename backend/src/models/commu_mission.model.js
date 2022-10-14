 const sql = require("./db.js");
 const Commu = require("./commu.model.js");

 //생성자
 const Commu_Mission = function (commu_mission) {
     this.cm_id = commu_mission.cm_id;
     this.cm_commu = commu_mission.cm_commu;
     this.cm_mission = commu_mission.cm_mission;
     this.cm_regdate = new Date();
     this.cm_enddate = commu_mission.cm_enddate;
 };

 // 모임미션 생성
 Commu_Mission.insertCommuMission = (commu_mission, result)=>{

  const commu_missionReq = new Commu_Mission ({
    cm_id : commu_mission.cm_id,
    cm_commu : commu_mission.cm_commu,
    cm_mission : commu_mission.cm_mission,
    cm_regdate : commu_mission.cm_regdate,
    cm_enddate : commu_mission.cm_enddate,
  })
  sql.query("INSERT INTO commu_mission SET ?",commu_missionReq, (err, res)=>{
      if(err){
          console.log("error: ", err);
          result(err, null);
          return;
      }
      console.log("Created commu_mission: ",res);
      result(null, res);
  });
}

  // 모임 미션 조회 / commu_id / commu_mission 테이블 *
  Commu_Mission.Searchmission = (cm_mission,result)=> {
    sql.query('SELECT *FROM commu_mission',(err,res)=>{
      if(err) {
        console.log('error:',err);
        result(err,null);
        return;
      }
      console.log('Searchmission: ', res);
      result(null,res);
    });
  }
    

 module.exports = Commu_Mission;