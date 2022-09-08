module.exports = (app) => {
  const user = require("../controllers/user.controller.js");

  // 튜플 생성
  app.post("/user", user.create);

  // 전체 조회
  app.get("/user", user.findAll);

  //   // id로 조회
  //   app.get("/user/:userEmail", user.findOne);

  //   // id로 수정
  //   app.put("/user/:userEmail", user.update);

  //   // id로 삭제
  //   app.delete("/user/:userEmail", user.delete);

  //   // 전체 삭제
  //   app.delete("/user", user.deleteAll);
};
