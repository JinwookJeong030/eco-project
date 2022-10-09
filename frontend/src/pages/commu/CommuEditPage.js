/**
 * 모임 생성 페이지
 */

import ContentsBoxContainer from '../../containers/common/ContentsBoxContaniner';
import HeaderContainer from '../../containers/common/HeaderContainer';
import NavContainer from '../../containers/common/NavContainer';
import EditCommuContainer from '../../containers/commu/EditCommuContainer'
 const EditClassPage = () => {
   
   return (
   <>      
   <HeaderContainer />
   <NavContainer/>
   <ContentsBoxContainer title="모임 생성">
    <EditCommuContainer/>
   </ContentsBoxContainer>
   </>);
 };
 
 export default EditClassPage;
 