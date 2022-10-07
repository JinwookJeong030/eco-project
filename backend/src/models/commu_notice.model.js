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