const sql = require("./db.js");

//생성자
const Mission = function (mission) {
    this.mission_id = mission.mission_id;
    this.mission_title = mission.mission_title;
    this.mission_contents = mission.mission_contents;
    this.mission_state = mission.mission_state;
    this.mission_point = mission.mission_point;
};

//현재 미션 조회
Mission.selectMission = (result) => {
sql.query('SELECT * FROM mission WHERE mission_state = 1 ;', (err, res) => {
if (err) {
    console.log('error: ', err);
    result(err, null);
    return;
    }
    console.log('selectAllMissions: ',  res[0]);
    result(null,  res[0]);
    });
};
//미션 조회
Mission.selectAllMission = (result) => {
    sql.query('SELECT * FROM mission;', (err, res) => {
    if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
        }
        console.log('selectAllMissions: ',  res);
        result(null,  res);
        });
    };



//미션 랜덤 갱신
Mission.updateAllMission =(result) =>{

    sql.query('UPDATE mission SET mission_state = 0 ;', (err, res) => {
        if (err) {
            console.log('error: ', err);
            }
        else {
            const mission_id = Math.floor(Math.random()*10) % 7 + 1; //미션개수에 따라 수정
            sql.query('UPDATE mission SET mission_state = 1 WHERE mission_id = '+mission_id+';', (err, res) => {
                if (err) {
                    console.log('error: ', err);
                    }else{
                        console.log('mission update succes : '+ mission_id );
                    }
                
            })
        }
          
        });

}
module.exports = Mission;