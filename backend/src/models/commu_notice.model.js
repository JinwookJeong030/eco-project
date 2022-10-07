const Commu = require("./commu.model.js");
const sql = require("./db.js");

//생성자
const Commu_Notice = function (commu_notice) {
    this.cn_id = commu_notice.cn_id;
    this.cn_commu = commu_notice.cn_commu;
    this.cn_title = commu_notice.cn_title;
    this.cn_contents = commu_notice.cn_contents;
    this.cn_regdate = commu_notice.cn_regdate;
    this.cn_views = commu_notice.cn_views;
};

//모임 공지 제목  조회 / commu_id / commu_notice 테이블, commu_title (commu_notice테이블과 commu 테이블 join이용
Commu_notice.SearchNoticeTitle =(commu_id,result)=>{
    sql.query('SELECT Commu_notice.* ,commu.commu_id FROM commu, '+commu_id+" ORDER BY commu.commu_title", (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
  
      console.log('searchnoticetitle: ',  res);
      result(null,  res);
    });
  
  };


//모임 공지 글 조회 / cn_id / commu_notice 테이블 * 
Commu_Mission.SearchNoticeContents = (cn_id,result)=> {
    sql.query('SELECT commu_notice.* ,commu_notice.cn_id From commu_notice, =' +cn_id+';', (err,res) =>{
      if(err) {
        console.log('error:',err);
        result(err,null);
        return;
      }
      console.log('SearchContents Commu: ', res);
      result(null,res);
    });
  }
module.exports = Commu_Notice;