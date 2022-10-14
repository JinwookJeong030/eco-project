import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import {IoIosArrowDropdown, IoIosArrowDropup} from 'react-icons/io'
import { Link } from "react-router-dom";
import {WhitePostsItemBox} from '../common/WhiteBox';


const CommuListBlock = styled(Responsive)` 
`;
const MissionItemBlock = styled(WhitePostsItemBox)`

`

const MissionImg = styled.img`
height: 12.75rem;
width:50rem;
background:green;
maring-left:auto;
margin-right:auto;
@media (max-width: 1300px) {
  height: 15vw;
  width: 100%;
}
`
const MissionContents = styled.div`
font-size: 0.7vw;
text-align: center;

`
const MissionHidingBtn = styled(IoIosArrowDropup)`
  width:2rem;
  height:2rem;
  margin-left: auto;
`
const Mission = ({mission_id, title, contents, onClickMission})=>
{
  return (
    <Link to={`/post/edit`} state={{ mission_title: title }}>
    <MissionItemBlock onClick={onClickMission}>
    <MissionImg src={process.env.PUBLIC_URL + "/mission_img/mission_"+mission_id+".png"}/>
    </MissionItemBlock>
    </Link>
  );
}

const CommuMission = ({loadingMission, mission, loadingCMission, cMission, errorMission, errorCMission}) => {
    if (errorMission) {
    
    }
    /**에러처리 */
    return (
      <CommuListBlock>
        {!loadingMission&&mission&&
         <Mission mission_id= {mission.mission_id}
         />
        }
       
        {!loadingCMission&&cMission&&
      <Mission mission_id= {cMission.mission_id}
      />
        }
      </CommuListBlock>
    );
  };
  
export default CommuMission;