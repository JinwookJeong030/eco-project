const User = require("../models/user.model.js");
const jwt = require('../modules/jwt');

// 새 객체 생성
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });



  
  // 데이터베이스에 저장
  User.create(user, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured while creating th User.",
      });
    }
  });
};

// 전체 조회
exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving User.",
      });
    else res.send(data);
  });
};

// // id로 조회
// exports.findOne = (req, res) => {
//   User.findById(req.params.customerId, (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found User with id ${req.params.customerId}.`,
//         });
//       } else {
//         res.status(500).send({
//           message: "Error retrieving User with id " + req.params.customerId,
//         });
//       }
//     } else res.send(data);
//   });
// };

// // id로 갱신
// exports.update = (req, res) => {
//   // Validate Request
//   if (!req.body) {
//     res.status(400).send({
//       message: "Content can not be empty!",
//     });
//   }

//   User.updateById(
//     req.params.customerId,
//     new Customer(req.body),
//     (err, data) => {
//       if (err) {
//         if (err.kind === "not_found") {
//           res.status(404).send({
//             message: `Not found User with id ${req.params.customerId}.`,
//           });
//         } else {
//           res.status(500).send({
//             message: "Error updating User with id " + req.params.customerId,
//           });
//         }
//       } else res.send(data);
//     }
//   );
// };

// // id로 삭제
// exports.delete = (req, res) => {
//   User.remove(req.params.customerId, (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found User with id ${req.params.customerId}.`,
//         });
//       } else {
//         res.status(500).send({
//           message: "Could not delete User with id " + req.params.customerId,
//         });
//       }
//     } else res.send({ message: `User was deleted successfully!` });
//   });
// };

// // 전체 삭제
// exports.deleteAll = (req, res) => {
//   User.removeAll((err, data) => {
//     if (err)
//       res.status(500).send({
//         message: err.message || "Some error occurred while removing all Users.",
//       });
//     else res.send({ message: `All Users were deleted successfully!` });
//   });
// };
