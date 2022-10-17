/**
 * 마이 페이지 페이지
 */

 import HeaderContainer from '../../containers/common/HeaderContainer';
import NavContainer from '../../containers/common/NavContainer';
import MypageForm from '../../containers/mypage/MypageForm'
import ContentsBoxContainer from '../../containers/common/ContentsBoxContaniner';
 const ClassPage= () => {
   
   return (
   <>      
   <HeaderContainer />
   <NavContainer/>
   <ContentsBoxContainer title="마이페이지">
   <MypageForm />
   </ContentsBoxContainer>
    
   </>);
 };
 
 export default ClassPage;
 