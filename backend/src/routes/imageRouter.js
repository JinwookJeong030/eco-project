const multer = require('multer');
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');
const post = require('../controllers/post.controller.js');

const s3 = new AWS.S3({
    accessKeyId : "AKIAUFDXND6VJNIWQR4J",
    secretAccessKey: "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",
    region: "ap-northeast-2",
});



const upload = multer({
    
    storage : multerS3({
        s3:s3,
        bucket:'hs-eco-s3',
        key : function(req, file, cb) {
        
            console.log("file:");
            console.log(file);
            var ext = file.mimetype.split('/')[1];
            if(!['png', 'jpg', 'jpeg', 'gif', 'bmp'].includes(ext)) {
                return cb(new Error('Only images are allowed'));
            }
           fileName=`postImg/${Date.now()}` + '.' + file.originalname.split('.').pop();
            cb(null, fileName);
            
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