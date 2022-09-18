/**
 * 마이 페이지 페이지
 */

 import HeaderContainer from '../../containers/common/HeaderContainer';
import NavContainer from '../../containers/common/NavContainer';
import MypageTemplate from '../../components/mypage/MypageTemplate'
import ContentsBoxContainer from '../../containers/common/ContentsBoxContaniner';
 const ClassPage= () => {
   
   return (
   <>      
   <HeaderContainer />
   <NavContainer/>
   <ContentsBoxContainer title="마이페이지">
   <MypageTemplate />

   </ContentsBoxContainer>
    
   </>);
 };
 
 export default ClassPage;
 