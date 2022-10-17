const sql = require("./db.js");

//생성자
const Post_file = function (post_file) {
    this.pf_id = post_file.pf_id;
    this.pf_post = post_file.pf_post;
    this.pf_path = post_file.pf_path;
    this.pf_name = post_file.pf_name;
    this.pf_type = post_file.pf_type;
    this.pf_size = post_file.pf_size;
};


//포스트 이미지 DB 생성
Post_file.insertPostFile =({post_id, post_path} ,result) =>{
    const postFileReq = new Post({
      pf_post: post_id,
      pf_path: post_path,
      pf_name: null, 
      pf_type: "image",
      pf_size: null
    })
  
    sql.query("INSERT INTO post_file SET ?",postFileReq, (err,res)=>{
      if (err) {
        console.log('insertPostFile error: ', err);
        result(err, null);
        return;
      }
      console.log('insertPostFile: ',  res);
      result(null,  res);
  
    });
  
  }

//포스트 이미지 조회
Post_file.selectFiles = ({post_id}, result) => {
  sql.query(`SELECT post_file.* FROM post_file WHERE post_file.pf_post = ${post_id} ;`, (err, res) => {
    if (err) {
      console.log('selectPostFiles error: ', err);
      result(err, null);
      return;
    }
    console.log('selectPostFiles: ',  res );
    result(null,  res);
  });
};

module.exports = Post_file;