/**
 * 포스트 리스트 페이지
 */
import HeaderContainer from '../containers/common/HeaderContainer';
import NavContainer from '../containers/common/NavContainer';
import PostList from '../components/post/PostList'
const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      
      <NavContainer/>
      <PostList />

    </>
  );
};

export default PostListPage;
