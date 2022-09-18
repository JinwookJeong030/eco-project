/**
 * 포스트 읽기 페이지
 */
import HeaderContainer from '../../containers/common/HeaderContainer';
import ContentsBoxContainer from '../../containers/common/ContentsBoxContaniner';
import NavContainer from '../../containers/common/NavContainer';
import PostViewerContainer from '../../containers/post/PostViewerContainer';
const PostViewerPage = () => {
  return <>
   <HeaderContainer />
   <NavContainer/>
   <ContentsBoxContainer title="글 쓰기">
    <PostViewerContainer/>
   </ContentsBoxContainer>

  </>;
};

export default PostViewerPage;
