const Commu = require("./commu.model.js");
const sql = require("./db.js");

//생성자
const Commu_Notice = function (commu_notice) {
    this.cn_id = commu_notice.cn_id;
    this.cn_commu = commu_notice.cn_commu;
    this.cn_title = commu_notice.cn_title;
    this.cn_contents = commu_notice.cn_contents;
    this.cn_regdate = new Date();
    this.cn_views = commu_notice.cn_views;
};


 // 모임공지 생성
 Commu_Notice.insertCommNotice = (commu_notice, result)=>{

  const commu_noticeReq = new Commu_Notice ({
    cn_id : commu_notice.cn_id,
    cn_commu : commu_notice.cn_commu,
    cn_title : commu_notice.cn_title,
    cn_contents : commu_notice.cn_contents,
    cn_views : commu_notice.cn_views,
  })
  sql.query("INSERT INTO commu_notice SET ?",commu_noticeReq, (err, res)=>{
      if(err){
          console.log("error: ", err);
          result(err, null);
          return;
      }
      console.log("Created communotice: ",res);
      result(null, res);
  });
}

//모임공지 수정
Commu_Notice.editCommuNotice =(commu_notice, result)=>{
  const commu_noticeReq = new Commu_Notice({
    cn_id : commu_notice.cn_id,
    cn_commu : commu_notice.cn_commu,
    cn_title : commu_notice.cn_title,
    cn_contents : commu_notice.cn_contents,
  })
  const commuReq = new Commu({
    commu_leader : commu_notice.commu_leader
  })
  sql.query("UPDATE commu_notice SET cn_contents= '"+commu_noticeReq.cn_contents+"', cn_title = '"+commu_noticeReq.cn_title+"' WHERE cn_id = "+commu_noticeReq.cn_id+" AND commu_leader = "+commuReq.commu_leader+";" , 
  (err,res)=>{
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    console.log('edit communotice: ',  res);
    result(null,  res);

  });
};

// 모임공지 삭제
Commu_Notice.deleteCommuNotice =(commu_notice, result)=>{
  const commu_noticeReq = new Commu_Notice({
    cn_id: commu_notice.cn_id
  })
  const commuReq = new Commu({
    commu_leader : commu_notice.commu_leader
  })
  sql.query("DELETE FROM commu_noitce WHERE cn_id = "+commu_noticeReq.cn_id+" AND commu_leader = "+commuReq.commu_leader+" ;", 
  (err,res)=>{
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    console.log('Delete commu_notice: ',  res);
    result(null,  res);

  });

}

//모임 공지 제목  조회 / commu_id / commu_notice 테이블, commu_title (commu_notice테이블과 commu 테이블 join이용
Commu_Notice.SearchNoticeTitle =(cn_id,result)=>{
  sql.query('SELECT cn_title FROM commu_notice', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    console.log('SearchNoticeTitle: ',  res);
    result(null,  res);
  });

};


//모임 공지 글 조회 / cn_id / commu_notice 테이블 * 
Commu_Notice.SearchNoticeContents = (cn_id,result)=> {
  sql.query('SELECT cn_contents FROM commu_notice' , (err,res) =>{
    if(err) {
      console.log('error:',err);
      result(err,null);
      return;
    }
    console.log('SearchNoticeContents: ', res);
    result(null,res);
  });
}

module.exports = Commu_Notice;