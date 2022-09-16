/**
 * 글쓰기 페이지
 */
import Responsive from '../components/common/Responsive.js'
import Editor from '../components/post/Editor.js';
import TagBox from '../components/post/TagBox';
import PostActionBtn from '../components/post/PostActionBtn';
import HeaderContainer from '../containers/common/HeaderContainer';
import Nav from '../components/common/Nav'
const EditPostPage = () => {
  
  return (
  <>      
  <HeaderContainer />
  <Nav/>
  <Responsive>

  <Editor/>
  <TagBox />
  <PostActionBtn />
  </Responsive>
  </>);
};

export default EditPostPage;
