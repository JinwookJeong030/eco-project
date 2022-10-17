/**
 * 미션&식물 페이지
 */

import GardenContainer from '../../containers/garden/GardenContainer';
import ContentsBoxContainer from '../../containers/common/ContentsBoxContaniner';
import HeaderContainer from '../../containers/common/HeaderContainer';
import NavContainer from '../../containers/common/NavContainer';
import FlowerpotsContainer from '../../containers/garden/FlowerpotsContainer';
 const ClassPage= () => {
   
   return (
   <>      
   <HeaderContainer />
   <NavContainer/>
   <ContentsBoxContainer title="가든">
    <FlowerpotsContainer/>

   </ContentsBoxContainer>
   </>);
 };
 
 export default ClassPage;
 