let express = require("express");
let bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // 루트 주소에 접속하면
  res.send("hello world!"); // 해당 응답을 보낸다.
});

//DB 연동
require("./routes/user.routes.js")(app);

//포트넘버 설정
const port = 4000;
app.listen(port, () => {
  console.log("Server is runnig... port :" + port);
});
