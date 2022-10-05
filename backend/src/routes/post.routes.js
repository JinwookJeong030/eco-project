module.exports = (app) => {
  
    const post = require('../controllers/post.controller.js');
    const authJwt = require('../middlewares/authJWT.js');
    const refresh = require('./refresh');
    const multer = require('multer'); //이미지 파일
    // multer 설정
    const upload = multer({
    storage: multer.diskStorage({
    // 저장할 장소
      destination(req, file, cb) {
      cb(null, 'public/uploads');
    },
    // 저장할 이미지의 파일명
      filename(req, file, cb) {
      const ext = path.extname(file.originalname); // 파일의 확장자
      console.log('file.originalname', file.originalname);
      // 파일이름 + 현재시간밀리초 + 파일확장자명
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
      },
      }),
      // limits: { fileSize: 5 * 1024 * 1024 } // 파일 크기 제한
    });

    
   
    


    // 글작성
    app.post('/api/post/write',authJwt, post.write);
    // 글수정
    app.post('/api/post/edit',authJwt, post.edit);
    //글삭제
    app.delete('/api/post/delete/:post_id',authJwt, post.delete);
    // 글조회
    app.get('/api/post/view/:post_id', post.view);
    // 전체글 조회 및 검색
    app.get('/api/post/list', post.list);
   


    // 댓글조회
    app.get('/api/reply/list/:post_id', post.reply_select);
    // 댓글작성
    app.post('/api/reply/write',authJwt, post.reply_write);
    // 댓글삭제
    app.delete('/api/reply/delete',authJwt, post.reply_delete);
    
    //카테고리 조회
    app.get('/api/categorys',post.categorys);
    //미션 조회 => 내 미션조회로 수정해야됨
    app.get('/api/missions',post.missions);

    app.get('/api/')


    app.post('/img', upload.single('img'), (req, res) => {
      // 해당 라우터가 정상적으로 작동하면 public/uploads에 이미지가 업로드된다.
      // 업로드된 이미지의 URL 경로를 프론트엔드로 반환한다.
      console.log('전달받은 파일', req.file);
      console.log('저장된 파일의 이름', req.file.filename);
      // 파일이 저장된 경로를 클라이언트에게 반환해준다.
      const IMG_URL = `http://local:4000/uploads/postImg/${req.file.filename}`;
      console.log(IMG_URL);
      res.json({ url: IMG_URL });
    });

    app.get('/api/post/recommendsUp/:post_id',authJwt, post.recommendsUp);
    // 내가 쓴 글 조회
    app.get('/api/mypage/myPostList',authJwt,post.myPostList);
    // 내가 쓴 댓글 조회
    app.get('/api/mypage/myReplyList',authJwt,post.myReplyList);




  };
  