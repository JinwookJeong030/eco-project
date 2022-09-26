/**
 * 포스트 읽기 페이지
 */
import HeaderContainer from '../../containers/common/HeaderContainer';
import ContentsBoxContainer from '../../containers/common/ContentsBoxContaniner';
import NavContainer from '../../containers/common/NavContainer';
import PostViewerContainer from '../../containers/post/PostViewerContainer';
import WhiteBox from '../../components/common/WhiteBox'
import ReplyEditor from '../../components/post/ReplyEditor';
import ReplyList from '../../components/post/ReplyList'
import PostManagement from '../../components/post/PostManagement';
const PostViewerPage = () => {
  return <>
   <HeaderContainer />
   <NavContainer/>
   <ContentsBoxContainer title="" >
   <PostManagement/>
    <WhiteBox>
    <PostViewerContainer/>
    <ReplyList/>
    <ReplyEditor/>
    </WhiteBox>
   </ContentsBoxContainer>

  </>;
};

export default PostViewerPage;
