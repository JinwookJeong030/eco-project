/**
 * 포스트 읽기 페이지
 */
import HeaderContainer from '../../containers/common/HeaderContainer';
import ContentsBoxContainer from '../../containers/common/ContentsBoxContaniner';
import NavContainer from '../../containers/common/NavContainer';
import PostViewerContainer from '../../containers/post/PostViewerContainer';
import WhiteBox from '../../components/common/WhiteBox'
import EditorReplyContainer from '../../containers/post/EditorReplyContainer';
import PostListContainer from '../../containers/post/ReplyListContainer'

import PostManagementContainer from '../../containers/post/PostManagementContainer';
import AskModal from '../../components/common/AskModal';
const PostViewerPage = () => {
  return <>

   <HeaderContainer />
   <NavContainer/>
   <ContentsBoxContainer title="" >
   <PostManagementContainer/>
    <WhiteBox>
    <PostViewerContainer/>
    <PostListContainer/>
    <EditorReplyContainer/>
    </WhiteBox>
 
   </ContentsBoxContainer>

  </>;
};

export default PostViewerPage;
