/**
 * 모임 리스트 페이지
 */

 import ContentsBox from '../../components/common/ContentsBox';
import ContentsBoxContainer from '../../containers/common/ContentsBoxContaniner';
import HeaderContainer from '../../containers/common/HeaderContainer';
import NavContainer from '../../containers/common/NavContainer';
import ClassListContanier from '../../containers/class/ClassListContainer'
 const ClassListPage= () => {
   
   return (
   <>      
   <HeaderContainer />
   <NavContainer/>
   <ContentsBoxContainer title="모임">
    <ClassListContanier/>
   </ContentsBoxContainer>
   </>);
 };
 
 export default ClassListPage;
 