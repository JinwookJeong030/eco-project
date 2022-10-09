/*
 * 모임 관리 페이지
 */

import ManagementCommu from '../../components/commu/ManagementCommu';
import ContentsBoxContainer from '../../containers/common/ContentsBoxContaniner';
import HeaderContainer from '../../containers/common/HeaderContainer';
import NavContainer from '../../containers/common/NavContainer';
import PaginationContainer from '../../containers/post/PaginationContainer';

 const ClassListPage= () => {
   return (
   <>      
   <HeaderContainer />
   <NavContainer/>
   <ContentsBoxContainer title="모임 관리">
    <ManagementCommu/>
    <PaginationContainer/>
   </ContentsBoxContainer>
   </>);
 };
 
 export default ClassListPage;
 