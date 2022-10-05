
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import { Link } from "react-router-dom";
import {WhitePostsItemBox} from '../common/WhiteBox';
import Search from '../common/Search';
const PostListBlock = styled(Responsive)`
  
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  margin-top:auto;
  margin-bottom:auto;
  height:2rem;

`;
const PostItemBlock = styled(WhitePostsItemBox)`


`
const PostItemInfoBlock = styled.div`

  padding-top: 1rem;
  padding-bottom: 1rem;

  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
  
  }

  p {
    margin-top: 2rem;
  }
`;

const SubInfo = styled.div`
  /* margin-top: 1rem; */
  color: ${palette.gray[6]};

  /* span 사이에 가운뎃점 문자 보여 주기 */
  span + span::before {
    color: ${palette.gray[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7'; /* 가운뎃점 문자 */
  }
`;
const Title= styled.h2`
  margin:0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow:hidden; 
  text-overflow:ellipsis;
  width:40rem;
`


const Image = styled.img`
width: 10rem;
height: 10rem;
border: solid thin;
margin: 1rem;
padding:0;
`
const PostNickName = styled.div`
width: 10rem; 
height:2rem;
font: bold;
margin:0;
padding:0;
`
const PostContent = styled.div`
padding:0;
width: 33rem; 
height:3rem;
overflow:hidden; 
text-overflow:ellipsis;
`;

const PostHeader = styled.div`
display:flex;
flex-direction: row;
`
const MissionImg = styled.img`
height: 192px;
width:70vw;
background:green;
maring-left:auto;
`
const MissionInfoBlock = styled.div`
maring-left:auto;
width:30vw;
padding:1rem;
`
const MissionTitle = styled.div`
font-size: 1.5vw;
text-align: center;
margin-bottom:15px;
`
const MissionContents = styled.div`
font-size: 1vw;
text-align: center;

`
const Mission = ({title, contents})=>
{
  return (
    <PostItemBlock>
    <MissionImg/>
    <MissionInfoBlock>
      <MissionTitle><b>&lt; 오늘의 미션 &gt;</b></MissionTitle>
      <MissionTitle>{title}</MissionTitle>
      <MissionContents>{contents}</MissionContents>     
      </MissionInfoBlock>
    </PostItemBlock>
  );
}


const PostItem = ({ post }) => {
  const extractTextPattern = /(<([^>]+)>)/gi;
 
  const post_contents = post.post_contents.replace(extractTextPattern, '')
    return (
      <Link to={`/post/view/${post.post_id}`}>
      <PostItemBlock whiteBoxStyle>
   
        <Image src={process.env.PUBLIC_URL + "/eco-icon.png"}/>
        <PostItemInfoBlock>
        <Title>{post.post_title}</Title>
        <PostNickName><b>{post.user_name}</b></PostNickName>
        <PostContent>{post_contents}</PostContent>
        {new Date(post.post_regdate).toLocaleString()}
       
      </PostItemInfoBlock>
   
    </PostItemBlock>
    </Link>
    );
  };
  const PostList = ({ posts, loading, error, showWriteButton }) => {
    if (error) {
      return <PostListBlock>게시판을 불러올 수 없습니다...</PostListBlock>
    }
    const {mission_title, mission_contents}={mission_title:"분리수거 하기", mission_contents:"다같이 나가서 분리수거를 해봐요!  플라스틱 라벨을 때는것도 중요하겠죠!"}

  /**에러처리 */
    return (
      <PostListBlock>
      <Mission title={mission_title} contents={mission_contents}/>
       <PostHeader>
       <Search/>
        <WritePostButtonWrapper>
          
        {showWriteButton && (<Button cyan to="/post/edit">
            새 글 작성하기
          </Button>)}
        </WritePostButtonWrapper>
        </PostHeader>
        {!loading && posts && (<div>
          {
          posts.map(post => (
            <PostItem post={post} key={post.post_id} />
          ))}
        </div>)}
      </PostListBlock>
    );
  };
  
  export default PostList;