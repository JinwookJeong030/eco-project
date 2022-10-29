const multer = require('multer');
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');
const post = require('../controllers/post.controller.js');

const s3 = new AWS.S3({
    accessKeyId : "AKIAVCLDUNF7VPTG4Z2X",
    secretAccessKey: "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",
    region: "ap-northeast-2",
});



const upload = multer({
    
    storage : multerS3({
        s3:s3,
        bucket:'ecoweb-s3',
        key : function(req, file, cb) {
            console.log("req:");
            console.log(req);
            console.log("file:");
            console.log(file);
            var ext = file.mimetype.split('/')[1];
            if(!['png', 'jpg', 'jpeg', 'gif', 'bmp'].includes(ext)) {
                return cb(new Error('Only images are allowed'));
            }
            cb(null, `postImg/${Date.now()}` + '.' + file.originalname.split('.').pop());
        }
    }),
    acl : 'public-read-write',
    limits: { fileSize: 5 * 1024 * 1024 },
});

module.exports = (app) => {
// 이미지 업로드 요청
app.post('/api/post/upload', upload.array('file'), post.postImageUpload);



// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, '../uploads/postImg');
//   },
//   filename: (req, file, cb) => {
//   const newFileName = file.originalname;
//   cb(null, req.body.post_id+"_"+newFileName);
//   }
// });
// const upload = multer({ storage: storage });

// app.post('/api/post/upload', upload.array('file'), post.postImageUpload);



}