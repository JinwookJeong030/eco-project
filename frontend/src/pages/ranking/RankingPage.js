/**
 * 랭킹 메인 페이지
 */

 import HeaderContainer from '../../containers/common/HeaderContainer';
import NavContainer from '../../containers/common/NavContainer';
import ContentsBoxContainer from '../../containers/common/ContentsBoxContaniner';
import RankingListContainer from '../../containers/ranking/RankingListContainer'
 const RankingPage= () => {
   
  return (
      <>
       <HeaderContainer />
       <NavContainer/>
       <ContentsBoxContainer title="랭킹">
        <RankingListContainer/>
       </ContentsBoxContainer>
        
       </>);
 };
 
 export default RankingPage;
 