const sql = require("./db.js");
// 
//생성자
const Commu = function (commu) {
    this.commu_id =commu.commu_id;
    this.commu_name = commu.commu_name;
    this.commu_contents = commu.commu_contents;
    this.commu_leader = commu.commu_leader;
    this.commu_region = commu.commu_region;
    this.commu_regdate = new Date();
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
      result(null, res);
  });
};

//모임 가입
Commu.insertBelong =(belongReq ,result)=>{
  sql.query("INSERT INTO belong SET ?", belongReq, (err, res)=>{
      if(err){
          console.log("error: ", err);
          result(err, null);
          return;
      }
      console.log("Created belong: ",res);
      result(null, res);
  });
};
// 모임장 첫번째 모임 조회
Commu.selectFirstCommusFromLeader = (commu_leader,result) => {
  sql.query('SELECT commu_id FROM commu WHERE commu_leader = '+commu_leader+' ORDER BY commu_regdate DESC', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    console.log('selectFirstCommusFromLeader: ',  res[0]);
    result(null,  res[0] );
  });
};


// 내 모임 수 조회
Commu.selectAllMyCommusCnt = (user_id,result) => {
  sql.query('SELECT COUNT(*) AS commu_count FROM commu,belong WHERE commu.commu_id =belong.belong_commu AND belong_user = '+user_id+' ;', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

      result(null,  res);
  });
};

// 내 모임 조회
Commu.selectMyCommus = ({user_id, start, end},result) => {
  sql.query(`SELECT commu.* FROM commu,belong WHERE commu.commu_id =belong.belong_commu AND belong_user = ${user_id} ORDER BY commu_regdate DESC LIMIT ${start}, ${end} ;`, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    console.log('selectMyCommus: ',  res );
    result(null,  res );
  });
};

//전체 모임 명 모임 수 조회
//전체 모임 명 모임 조회
//전체 모임장 모임 수 조회
//전체 모임장 모임 조회



// 모임 전체 수 조회
Commu.selectAllCommusCnt = (result) => {
  sql.query('SELECT COUNT(*) AS commu_count FROM commu ;', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
      result(null,  res);
  });
};

  //모임 전체 조회
Commu.selectAllCommus = ({start , end},result) => {
    sql.query(`SELECT * FROM commu ORDER BY commu_regdate DESC LIMIT ${start}, ${end}`, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
      console.log('Select All Commus: ',  res);
      result(null,  res);
    });
  };
// 제목 모임 전체 수 조회
Commu.selectCommusFromTitleCnt = (search_contents,result) => {
  sql.query(`SELECT COUNT(*) AS commu_count FROM commu WHERE commu_name LIKE "%${search_contents}%";`, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
      result(null,  res);
  });
};
    //제목 모임 검색 
Commu.selectCommusFromTitle =({search_contents, start , end},result)=>{
    sql.query(`SELECT commu.* FROM commu WHERE commu_name LIKE "%${search_contents}%" LIMIT ${start}, ${end};`, (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
  
      console.log('selectCommusFromTitle: ',  res);
      result(null,  res);
    });
  
  };
  // 모임장 검색 전체 수 조회
Commu.selectCommusFromUserCnt = (search_contents,result) => {
  sql.query(`SELECT COUNT(*) AS commu_count FROM commu WHERE commu_leader = ( SELECT user_id FROM user WHERE user_name = '${search_contents}' );`, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
      result(null,  res);
  });
};
      //모임장 모임 검색 
Commu.selectCommusFromUser =({search_contents, start , end},result)=>{
  sql.query(`SELECT commu.* FROM commu WHERE commu_leader = ( SELECT user_id FROM user WHERE user.user_name = '${search_contents}' ) LIMIT ${start}, ${end} ;`, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    console.log('selectCommusFromUser: ',  res);
    result(null,  res);
  });

};





//모임 수정
Commu.editCommu =(commu, result)=>{
  const commuReq = new Commu({
    commu_id: commu.commu_id,
    commu_leader: commu.commu_leader,
    commu_name: commu.commu_name,
    commu_contents: commu.commu_contents,
    commu_region: commu.commu_region

  })
  sql.query("UPDATE commu SET commu_name= '"+commuReq.commu_name+"' , commu_contents ='"+commuReq.commu_contents+
  "' , commu_region = '"+commuReq.commu_region+"' WHERE commu_id = "+commuReq.commu_id+" AND commu_leader = "+commuReq.commu_leader+" ;", 
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
    // 모임 삭제 
  Commu.deleteCommu =(commu, result)=>{
    const commuReq = new Commu({
      commu_id: commu.commu_id,
      commu_leader: commu.commu_leader,
    })
    sql.query("DELETE FROM commu WHERE commu_id = "+commuReq.commu_id+" ;", 
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

    
  //모임 멤버 조회 / commu_id  / user_id 테이블 * , (belong 테이블과 commu 테이블 join이용)

  module.exports = Commu;