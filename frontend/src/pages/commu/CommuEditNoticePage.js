/**
 * 모임 공지 작성 페이지
 */


 import ContentsBoxContainer from '../../containers/common/ContentsBoxContaniner';
 import HeaderContainer from '../../containers/common/HeaderContainer';
 import NavContainer from '../../containers/common/NavContainer';
 
  const ClassListPage= () => {
    
    return (
    <>      
    <HeaderContainer />
    <NavContainer/>
    <ContentsBoxContainer title="모임 작성">
    </ContentsBoxContainer>
    </>);
  };
  
  export default ClassListPage;
  