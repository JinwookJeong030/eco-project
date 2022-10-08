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
const MissionInfoBlock = styled.div`
maring-left:auto;
width:100%;
padding:1rem;
border-left: thin solid;
@media (max-width: 1024px) {
  width: 768px;
}
@media (max-width: 1300px) {
  display: none;
}

`
const MissionImg = styled.img`
height: 12.75rem;
width:50rem;
background:green;
maring-left:auto;

@media (max-width: 1300px) {
  height: 18vw;
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
const MissionTitle = styled.div`
font-size: 0.8vw;
text-align: center;
margin-bottom:15px;
`
const Mission = ({mission_id, title, contents, onClickMission})=>
{
  return (
    <Link to={`/post/edit`} state={{ mission_title: title }}>
    <MissionItemBlock onClick={onClickMission}>

    <MissionImg src={process.env.PUBLIC_URL + "/mission_img/mission_"+mission_id+".png"}/>

    <MissionInfoBlock >
    <MissionHidingBtn/>
      <MissionTitle><b>&lt; 오늘의 미션 &gt;</b></MissionTitle>
      <MissionTitle>{title}</MissionTitle>
      <MissionContents>{contents}</MissionContents>     
      </MissionInfoBlock>

    </MissionItemBlock>
    </Link>
  );
}

const CommuMission = ({loading, mission, error}) => {
    if (error) {

    }
    /**에러처리 */
    return (
      <CommuListBlock>
        {!loading&&mission&&
      <Mission mission_id= {mission.mission_id} title={mission.mission_title} contents={mission.mission_contents}
      />
        }
      </CommuListBlock>
    );
  };
  
export default CommuMission;