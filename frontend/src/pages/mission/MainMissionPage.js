/**
 * 미션&식물 페이지
 */

 import MyMission from '../../components/mission/MyMission';
import ContentsBoxContainer from '../../containers/common/ContentsBoxContaniner';
import HeaderContainer from '../../containers/common/HeaderContainer';
import NavContainer from '../../containers/common/NavContainer';
 const ClassPage= () => {
   
   return (
   <>      
   <HeaderContainer />
   <NavContainer/>
   <ContentsBoxContainer title="미션&amp;식물">
    <MyMission/>
   </ContentsBoxContainer>
   </>);
 };
 
 export default ClassPage;
 