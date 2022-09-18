/**
 * 포스트 리스트 페이지
 */
import HeaderContainer from '../../containers/common/HeaderContainer';
import NavContainer from '../../containers/common/NavContainer';
import ContentsBoxContainer from  '../../containers/common/ContentsBoxContaniner'
import PostListContainer from '../../containers/post/PostListContainer';
const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <NavContainer/>
      <ContentsBoxContainer title="환경 게시판">
      <PostListContainer/>
      </ContentsBoxContainer>
    </>
  );
};

export default PostListPage;
