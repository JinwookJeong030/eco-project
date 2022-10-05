
const fs = require("fs");
const path = require("path");
const AWS = require('aws-sdk');
const {S3} = require("../config/AWS.config");
const dotenv =require("dotenv");
dotenv.config();


const s3 = new AWS.S3({
    accessKeyId : "AKIAVCLDUNF7VPTG4Z2X",
    secretAccessKey: "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",

});

const params ={
    Bucket:"ecoweb-s3",
    Key:"image/"+"imageTest",
    Body: fs.readFileSync(path.resolve(__dirname, "./test.png")),
    ContentType:"image/png",
}
s3.upload(params, function(err,data){
    if(err){
        throw err;
    }
    console.log(`File uploaded successfully. ${data}`);

})


