/**
 * 모임 페이지
 */

 import WhiteBox from '../../components/common/WhiteBox';
import CommuNoticeList from '../../components/commu/CommuNoticeList';
import ContentsBoxContainer from '../../containers/common/ContentsBoxContaniner';
import HeaderContainer from '../../containers/common/HeaderContainer';
import NavContainer from '../../containers/common/NavContainer';
import CommuDetailBtnContainer from '../../containers/commu/CommuDetailBtnContainer';
import CommuMemberContainer from '../../containers/commu/CommuMemberContainer';
import CommuMissionContainer from '../../containers/commu/CommuMissionContainer';
import CommuEditNoticeListContainer from '../../containers/commu/CommuNoticeListContainer';
import CommuOtherMenuContainer from '../../containers/commu/CommuOtherMenuContainer';
import CommuReplyContainer from '../../containers/commu/CommuReplyContainer';
 const ClassPage= () => {
   
   return (
   <>      
   <HeaderContainer />
   <NavContainer/>
   <ContentsBoxContainer title="모임">
    <CommuDetailBtnContainer/>
  <CommuMissionContainer/>
  {/* <CommuEditNoticeListContainer/> 추후 추가*/}
   <CommuOtherMenuContainer >
    <CommuReplyContainer/>
    <CommuMemberContainer/>
    </CommuOtherMenuContainer>
 
   
   </ContentsBoxContainer>
   </>);
 };
 
 export default ClassPage;
 