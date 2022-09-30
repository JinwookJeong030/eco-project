const sql = require("./db.js");
// 
//생성자
const Commu = function (commu) {
    this.commu_id =commu.commu_id;
    this.commu_name = commu.commu_name;
    this.commu_contents = commu.commu_contents;
    this.commu_leader = commu.commu_leader;
    this.commu_region = commu.commu_region;
    this.commu_regdate = commu.commu_regdate;
};

 // Commu 튜플 추가 
Commu.create = (newCommu, result)=>{
  sql.query("INSERT INTO commu SET ?", newCommu, (err, res)=>{
      if(err){
          console.log("error: ", err);
          result(err, null);
          return;
      }

      console.log("Created commu: ",{ ...newCommu });
      result(null, res );
  });
};

  //모임 전체 조회
  Commu.selectAllCommus = (result) => {
    sql.query('SELECT * FROM commu ORDER BY commu_regdate DESC', (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
  
      console.log('Select All Commus: ',  res );
      result(null,  res );
    });
  };

    //commu_id를 통한 모임 조회 
Commu.selectCommuFromId =(commu_id,result)=>{
    sql.query('SELECT commu.* FROM commu WHERE commu.commu_id = commu.commu_id = '+commu_id+" ;", (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
  
      console.log('Select Commu: ',  res[0]);
      result(null,  res[0]);
    });
  
  };
    //commu_id를 통한 모임 삭제 

  Commu.deleteCommu =(commu, result)=>{
    const postReq = new Commu({
      commu_id: commu.commu_id,
      commu_name: commu.commu_name,
    })
  
    sql.query("DELETE FROM commu WHERE commu_id = "+CommuReq.commu_id+" AND commu_name = "+CommuReq.commu_name+" ;", 
    (err,res)=>{
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
      console.log('Delete Commu: ',  res);
      result(null,  res);
  
    });
  
  }