
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import {IoIosArrowDropdown, IoIosArrowDropup} from 'react-icons/io'
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
const PostItemInfoBlock = styled(Responsive)`
  display:flex;
  flex-direction:column;
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

const Title= styled.div`
  margin:0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow:hidden; 
  text-overflow:ellipsis;
  width:40rem;
  font-weight: bold;
  font-size: 2rem;
  @media (max-width: 900px) {
    font-size: 3.5vw;
  }
  
`


const Image = styled.img`
width: 10rem;
height: 10rem;
border: solid thin;
margin: 1rem;
padding:0;
@media (max-width: 768px) {
 margin-left:auto;
 margin-right:auto;
}
`
const PostNickName = styled.div`
width: 10rem; 
height:2rem;
font: bold;
margin:0;
padding:0;
color:${palette.gray[6]};
margin-top:5px;
margin-left:5px;
`
const PostContent = styled.div`
padding:0;
width: 33rem; 
height:3rem;
overflow:hidden; 
text-overflow:ellipsis;
  @media (max-width: 768px) {
    font-size: 2.5vw;
  }
`;
const PostRegdate =styled.div`
margin-left:auto;
width:10rem;
font-size:0.8rem;
color:${palette.gray[6]};
`
const PostHeader = styled.div`
display:flex;
flex-direction: row;
`
const MissionImg = styled.img`
height: 12.75rem;
width:50rem;
background:green;
maring-left:auto;
border-right: thin solid;
@media (max-width: 1300px) {
  height: 22vw;
  width: 100%;
}
`
const MissionInfoBlock = styled.div`
maring-left:auto;
width:100%;
padding:1rem;

@media (max-width: 1024px) {
  width: 768px;
}
@media (max-width: 1300px) {
  display: none;
}

`
const MissionTitle = styled.div`
font-size: 0.8vw;
text-align: center;
margin-bottom:15px;
`
const MissionContents = styled.div`
font-size: 0.7vw;
text-align: center;

`
const NoTitle =styled.h1`
margin-left: auto;
margin-right:auto;
color: ${palette.green[0]};
margin-top:3rem;
margin-bottom:3rem;
`
const MissionHidingBtn = styled(IoIosArrowDropup)`
  width:2rem;
  height:2rem;

  margin-left: auto;
`

const NoPost =({title})=>{

  return (<PostItemBlock>

  <NoTitle>{title}</NoTitle>

  </PostItemBlock>);

}
const Mission = ({mission_id,title, contents})=>
{
  return (
    <PostItemBlock>

    <MissionImg src={process.env.PUBLIC_URL + "/mission_img/mission_"+1+".png"}/>

    <MissionInfoBlock >
    <MissionHidingBtn/>
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
        <PostNickName> {post.user_name}</PostNickName>
        <PostContent>{post_contents}</PostContent>
        <PostRegdate>{new Date(post.post_regdate).toLocaleString()}</PostRegdate>
       
      </PostItemInfoBlock>
   
    </PostItemBlock>
    </Link>
    );
  };
  const PostList = ({ posts, loading, error, showWriteButton, search_type, search_contents, onChangeField, onSearch, categorys}) => {
    if (error) {
      return     (<PostListBlock><NoPost title={"서버에서 문제가 발생하였습니다..."} /></PostListBlock>)
    }
    const {mission_title, mission_contents}={mission_title:"분리수거 하기", mission_contents:"다같이 나가서 분리수거를 해봐요!  플라스틱 라벨을 때는것도 중요하겠죠!"}

    /**에러처리 */
    return (
      <PostListBlock>
      <Mission title={mission_title} contents={mission_contents}/>
       <PostHeader>
       <Search search_type={search_type} search_contents={search_contents} onChangeField={onChangeField} onSearch={onSearch} categorys={categorys}/>
        <WritePostButtonWrapper>
        {showWriteButton && (<Button cyan postWriteBtn to="/post/edit">
            작성하기
          </Button>)}
        </WritePostButtonWrapper>
        </PostHeader>
        {!loading && posts &&(posts.length===0?<NoPost title={"검색 된 게시물이 없습니다."} />:(<div>
          {
          posts.map(post => (
            <PostItem post={post} key={post.post_id} />
          ))}
        </div>))}
       
      </PostListBlock>
    );
  };
  
  export default PostList;