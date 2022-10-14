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

//포스트 이미지 삽입
Post_file.upload  = multer({
    storage: multer.diskStorage({
      // 저장할 장소
      destination(req, file, cb) {
        cb(null, 'public/uploads');
      },
      // 저장할 이미지의 파일명
      filename(req, file, cb) {
        const ext = path.extname(file.originalname); // 파일의 확장자
        console.log('file.originalname', file.originalname);
        // 파일명이 절대 겹치지 않도록 해줘야한다.
        // 파일이름 + 현재시간밀리초 + 파일확장자명
        cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
      },
    }),
    limits: { fileSize: 5 * 1024 * 1024 } // 파일 크기 제한
  });


//포스트 이미지 DB 생성
Post_file.insertPostFile =(post_file ,result) =>{
    const postFileReq = new Post({
      pf_post: post_file.pf_post,
      pf_path: post_file.pf_path,
      pf_name: post_file.pf_name, 
      pf_type: post_file.pf_type,
      pf_size: post_file.pf_size
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