/**
 * 포스트 읽기 페이지
 */
import HeaderContainer from '../../containers/common/HeaderContainer';
import ContentsBoxContainer from '../../containers/common/ContentsBoxContaniner';
import NavContainer from '../../containers/common/NavContainer';
import PostViewerContainer from '../../containers/post/PostViewerContainer';
import WhiteBox from '../../components/common/WhiteBox'
import EditorReplyContainer from '../../containers/post/EditorReplyContainer';
import ReplyListContainer from '../../containers/post/ReplyListContainer'

import PostManagementContainer from '../../containers/post/PostManagementContainer';

const PostViewerPage = () => {
  return <>

   <HeaderContainer />
   <NavContainer/>
   <ContentsBoxContainer >
   <PostManagementContainer/>
 
    <WhiteBox>
    
    <PostViewerContainer/>
    <ReplyListContainer/>
    <EditorReplyContainer/>
    </WhiteBox>
 
   </ContentsBoxContainer>

  </>;
};

export default PostViewerPage;
