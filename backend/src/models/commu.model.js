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
Commu.insertCommu = (commuReq, result)=>{
  sql.query("INSERT INTO commu SET ?", commuReq, (err, res)=>{
      if(err){
          console.log("error: ", err);
          result(err, null);
          return;
      }

      console.log("Created commu: ",res);
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

    //commu_title를 통한 모임 검색 
Commu.findCommu =(commu_title,result)=>{
    sql.query('SELECT commu.* FROM commu WHERE commu.commu_title = commu.commu_title = '+commu_title+" ;", (err, res) => {
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
    const commuReq = new Commu({
      commu_id: commu.commu_id,
      commu_name: commu.commu_name,
    })
  
    sql.query("DELETE FROM commu WHERE commu_id = "+commuReq.commu_id+" AND commu_name = "+commuReq.commu_name+" ;", 
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
  //내 소속 커뮤 보기 헤더 커뮤테이블*, 커뮤테이블에 멤버도 들어가야하지 않나?
  Commu.myCommu = (commu, result)=>{ 

    sql.query('SELECT * FROM commu = '+commu_id+";",(err,res) => {
      if(err) {
        console.log('error:',err);
        result(err,null);
        return;
      }
      console.log('Select My Commus: ', res);
      result(null,res);
    } );
    
  };
    
  //모임 멤버 조회 / commu_id  / user_id 테이블 * , (belong 테이블과 commu 테이블 join이용)

  module.exports = Commu;