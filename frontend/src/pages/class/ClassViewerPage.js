/**
 * 모임 페이지
 */

 import ContentsBoxContainer from '../../containers/common/ContentsBoxContaniner';
import HeaderContainer from '../../containers/common/HeaderContainer';
import NavContainer from '../../containers/common/NavContainer';
 const ClassPage= () => {
   
   return (
   <>      
   <HeaderContainer />
   <NavContainer/>
   <ContentsBoxContainer title="내 모임">
   </ContentsBoxContainer>
   </>);
 };
 
 export default ClassPage;
 