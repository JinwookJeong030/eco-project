/**
 * 포스트 읽기 페이지
 */
 import HeaderContainer from '../containers/common/HeaderContainer';
 import PostViewer from '../components/post/PostViewer';
 import Nav from '../components/common/Nav'
const PostPage = () => {
  return <>
   <HeaderContainer />
   <Nav/>
      <PostViewer />
  </>;
};

export default PostPage;
