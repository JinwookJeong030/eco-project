/**
 * 포스트 리스트 페이지
 */
import HeaderContainer from '../../containers/common/HeaderContainer';
import NavContainer from '../../containers/common/NavContainer';
import PostList from '../../components/post/PostList'
import ContentsBoxContainer from  '../../containers/common/ContentsBoxContaniner'
const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <NavContainer/>
      <ContentsBoxContainer title="환경 게시판">
      <PostList />
      </ContentsBoxContainer>
    </>
  );
};

export default PostListPage;
