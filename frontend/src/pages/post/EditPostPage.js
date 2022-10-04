/**
 * 글쓰기 페이지
 */
import Responsive from '../../components/common/Responsive.js'
import HeaderContainer from '../../containers/common/HeaderContainer';
import NavContainer from '../../containers/common/NavContainer.js';
import ContentsBoxContainer from '../../containers/common/ContentsBoxContaniner.js';
import EditorContainer from '../../containers/post/EditorContainer.js';
import EditorImageContainer from '../../containers/post/EditorImageContainer.js';

const EditPostPage = () => {
  
  return (
  <>      

  <HeaderContainer />
  <NavContainer/>
  <ContentsBoxContainer title="글 쓰기">
  <EditorImageContainer/>
  <EditorContainer/>
  </ContentsBoxContainer>
 
  </>);
};

export default EditPostPage;
