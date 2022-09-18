/**
 * 포스트 읽기 페이지
 */
 import HeaderContainer from '../../containers/common/HeaderContainer';
 import PostViewer from '../../components/post/PostViewer';

 import ContentsBoxContaniner from '../../containers/common/ContentsBoxContaniner';
import NavContainer from '../../containers/common/NavContainer';
const PostPage = () => {
  return <>
   <HeaderContainer />
   <NavContainer/>
   <ContentsBoxContaniner title="글 쓰기">
    <PostViewer/>
   </ContentsBoxContaniner>

  </>;
};

export default PostPage;
