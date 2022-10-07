const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

  

const corsOptions ={
    origin:['http://www.hs-eco-web.link:3000','http://localhost:3000','http://www.hs-eco-web.link',
    'http://localhost'
  ], 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

let app = express();
const port = 4000;

app.use(bodyParser.json());


//이미지파일 미들웨어 사용
app.use(express.json()); // json 데이터 파서
app.use(express.urlencoded({ extended: false })); // 내부 url 파서 사용
app.use(express.static(path.join(__dirname + '/image'))); //정적 파일 위치 설정

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  // 루트 주소에 접속하면
  res.send('Server is runnig... port '+ port); // 해당 응답을 보낸다.
});

//DB 연동
require('./routes/user.routes.js')(app);
require('./routes/post.routes.js')(app);
require('./routes/commu.routes.js')(app);
require('./routes/mission.routes.js')(app);


//포트넘버 설정
app.listen(port, () => {
  console.log('Server is runnig... port :' + port);
});
