const sql = require("./db.js");

// 생성자
const User = function (user) {
  this.email = user.email;
  this.password = user.password;
};

// customer 튜플 추가
User.create = (newUSER, result) => {
  sql.query("INSERT INTO user SET ?", newUSER, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Created customer: ", { userNo: res.inseertId, ...newUSER });
    result(null, { userNo: res.inseertId, ...newUSER });
  });
};

// // user email로 조회
// User.findByEmail = (userEmail, result) => {
//   sql.query("SELECT * FROM user WHERE email = ?", userEmail, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     if (res.length) {
//       console.log("found user: ", res[0]);
//       result(null, res[0]);
//       return;
//     }

//     // 결과가 없을 시
//     result({ kind: "not_found" }, null);
//   });
// };

// customer 전체 조회
User.getAll = (result) => {
  sql.query("SELECT * FROM user", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("user: ", res);
    result(null, res);
  });
};

// // customer id로 수정
// User.updateByID = (userNo, customer, result) => {
//   sql.query(
//     "UPDATE customers SET email = ?, name = ?, active = ? WHERE id = ?",
//     [customer.email, customer.name, customer.active, id],
//     (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(err, null);
//         return;
//       }

//       if (res.affectedRows == 0) {
//         // id 결과가 없을 시
//         result({ kind: "not_found" }, null);
//         return;
//       }

//       console.log("update customer: ", { id: id, ...customer });
//       result(null, { id: id, ...customer });
//     }
//   );
// };

// // customer id로 삭제
// User.remove = (id, result) => {
//   sql.query("DELETE FROM customers WHERE id = ?", id, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     if (res.affectedRows == 0) {
//       // id 결과가 없을 시
//       result({ kind: "not_found" }, null);
//       return;
//     }

//     console.log("deleted customer with id: ", id);
//     result(null, res);
//   });
// };

// // customer 전체 삭제
// User.removeAll = (result) => {
//   sql.query("DELETE FROM customers", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     if (res.affectedRows == 0) {
//       // id 결과가 없을 시
//       result({ kind: "not_found" }, null);
//       return;
//     }

//     console.log("deleted ${res.affectedRows} customers");
//     result(null, res);
//   });
// };

module.exports = User;
