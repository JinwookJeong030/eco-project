/**
 * 글쓰기 페이지
 */
import Responsive from '../../components/common/ResponsiveHeader.js'
import TagBox from '../../components/post/TagBox';
import PostActionBtn from '../../components/post/PostActionBtn';
import HeaderContainer from '../../containers/common/HeaderContainer';
import NavContainer from '../../containers/common/NavContainer.js';
import ContentsBoxContainer from '../../containers/common/ContentsBoxContaniner.js';
import EditorContainer from '../../containers/post/EditorContainer.js';
const EditPostPage = () => {
  
  return (
  <>      
  <HeaderContainer />
  <NavContainer/>
  <ContentsBoxContainer title="글 쓰기">

<Responsive>
  <EditorContainer/>
  <TagBox />
  <PostActionBtn />


</Responsive>
  </ContentsBoxContainer>
 
  </>);
};

export default EditPostPage;
