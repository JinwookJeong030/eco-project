const sql = require("./db.js");

//생성자
const Mission = function (mission) {
    this.mission_id = mission.mission_id;
    this.mission_title = mission.mission_title;
    this.mission_contents = mission.mission_contents;
    this.mission_point = mission.mission_point;
};
//미션 조회
Commu.selectAllMissions = (result) => {
sql.query('SELECT * FROM mission ORDER BY mission_id DESC', (err, res) => {
if (err) {
    console.log('error: ', err);
    result(err, null);
    return;
    }
  
    console.log('Select All Commus: ',  res );
    result(null,  res );
    });
};
module.exports = Mission;