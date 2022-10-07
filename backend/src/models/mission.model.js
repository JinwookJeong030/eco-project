const sql = require("./db.js");

//생성자
const Mission = function (mission) {
    this.mission_id = mission.mission_id;
    this.mission_title = mission.mission_title;
    this.mission_contents = mission.mission_contents;
    this.mission_img_path = mission.mission_img_path;
    this.mission_state = mission.mission_state;
    this.mission_point = mission.mission_point;
};

//미션 조회
Mission.selectAllMissions = (result) => {
sql.query('SELECT * FROM mission WHERE mission_state = 1 ;', (err, res) => {
if (err) {
    console.log('error: ', err);
    result(err, null);
    return;
    }
    console.log('selectAllMissions: ',  res );
    result(null,  res );
    });
};
module.exports = Mission;