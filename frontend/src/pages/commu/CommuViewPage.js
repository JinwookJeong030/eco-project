/**
 * 모임 페이지
 */

 import WhiteBox from '../../components/common/WhiteBox';
import CommuNoticeList from '../../components/commu/CommuNoticeList';
import ContentsBoxContainer from '../../containers/common/ContentsBoxContaniner';
import HeaderContainer from '../../containers/common/HeaderContainer';
import NavContainer from '../../containers/common/NavContainer';
import CommuMissionContainer from '../../containers/commu/CommuMissionContainer';
import CommuEditNoticeListContainer from '../../containers/commu/CommuNoticeListContainer';
 const ClassPage= () => {
   
   return (
   <>      
   <HeaderContainer />
   <NavContainer/>
   <ContentsBoxContainer title="모임">
  <CommuMissionContainer/>
  <CommuEditNoticeListContainer/>
   <WhiteBox>
   </WhiteBox>
   <WhiteBox>
   </WhiteBox>
 
    <></>
   </ContentsBoxContainer>
   </>);
 };
 
 export default ClassPage;
 