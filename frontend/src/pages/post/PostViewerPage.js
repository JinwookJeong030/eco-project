/**
 * 포스트 읽기 페이지
 */
 import HeaderContainer from '../../containers/common/HeaderContainer';
 import PostViewer from '../../components/post/PostViewer';

 import ContentsBoxContainer from '../../containers/common/ContentsBoxContaniner';
import NavContainer from '../../containers/common/NavContainer';
const PostPage = () => {
  return <>
   <HeaderContainer />
   <NavContainer/>
   <ContentsBoxContainer title="글 쓰기">
    <PostViewer/>
   </ContentsBoxContainer>

  </>;
};

export default PostPage;
