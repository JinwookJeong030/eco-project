/**
 * 글쓰기 페이지
 */
import Responsive from '../../components/common/ResponsiveHeader.js'
import Editor from '../../components/post/Editor.js';
import TagBox from '../../components/post/TagBox';
import PostActionBtn from '../../components/post/PostActionBtn';
import HeaderContainer from '../../containers/common/HeaderContainer';
import Nav from '../../components/common/Nav'
import NavContainer from '../../containers/common/NavContainer.js';
import ContentsBox from '../../components/common/ContentsBox.js';
import ContentsBoxContainer from '../../containers/common/ContentsBoxContaniner.js';
const EditPostPage = () => {
  
  return (
  <>      
  <HeaderContainer />
  <NavContainer/>
  <ContentsBoxContainer title="글 쓰기">


  <Editor/>
  <TagBox />
  <PostActionBtn />



  </ContentsBoxContainer>
 
  </>);
};

export default EditPostPage;
