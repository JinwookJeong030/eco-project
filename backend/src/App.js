const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

let app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.get('/', (req, res) => {
  // 루트 주소에 접속하면
  res.send('Server is runnig... port '+ port); // 해당 응답을 보낸다.
});

//DB 연동
require('./routes/user.routes.js')(app);
require('./routes/post.routes.js')(app);
//포트넘버 설정

app.listen(port, () => {
  console.log('Server is runnig... port :' + port);
});
