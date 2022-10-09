
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import {IoIosArrowDropdown, IoIosArrowDropup} from 'react-icons/io'
import { Link } from "react-router-dom";
import {WhitePostsItemBox} from '../common/WhiteBox';
import Search from '../common/Search';
import PaginationContainer from '../../containers/post/PaginationContainer';
const PostListBlock = styled(Responsive)` 
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;

  margin-top:auto;
  margin-bottom:auto;
 
  

`;
const PostItemBlock = styled(WhitePostsItemBox)`

`
const MissionBlock = styled(WhitePostsItemBox)``
const PostItemInfoBlock = styled.div`
  display:flex;
  flex-direction:column;
  width: 100%;
  height: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right:1rem;
  padding-left:1rem;
  width: 80.5%;
  @media (max-width: 768px) {
    width: 90%;
    margin-left:auto;
    margin-right:auto;
   }
`;
const Image = styled.img`
width: 10rem;
height: 10rem;
border: solid thin;
border-width:2px;
margin: 1rem;
padding:0;
@media (max-width: 768px) {
 margin-left:auto;
 margin-right:auto;
}
`;
const Title= styled.div`
  margin:0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow:hidden; 
  text-overflow:ellipsis;
  width:60%;
  font-weight: bold;
  font-size: 2rem;
  @media (max-width: 1300px) {
    font-size: 1.8vw;
  }
  @media (max-width: 768px) {
    font-size: 3.5vw;
    width:100%;
  }

  
`;

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
width: 70%; 
height:4rem;

overflow:hidden; 
text-overflow:ellipsis;
  @media (max-width: 768px) {
    font-size: 2.5vw;
    height:3.2rem;
    width:95%;
  }
`;
const PostRegdate =styled.div`
widht:100%;
margin-left:auto;
font-size:0.8rem;
color:${palette.gray[6]};
`
const PostHeader = styled(Responsive)`
display:flex;
flex-direction: row;
width:98%;
padding:0;
`
const MissionImg = styled.img`

width:50rem;
maring-left:auto;
@media (max-width: 1300px) {
  height: 18vw;
  width: 100%;
}
`
const MissionInfoBlock = styled.div`
maring-left:auto;
padding:1rem;
border-left: thin solid;
border-width: 2px;
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
const Mission = ({mission_id, title, contents, onClickMission})=>
{
  return (
    
    <Link to={`/post/edit`} state={{ mission_title: title }}>
    <MissionBlock onClick={onClickMission} >

    <MissionImg src={process.env.PUBLIC_URL + "/mission_img/mission_"+mission_id+".png"}/>

    <MissionInfoBlock >
    <MissionHidingBtn/>
      <MissionTitle><b>&lt; 오늘의 미션 &gt;</b></MissionTitle>
      <MissionTitle>{title}</MissionTitle>
      <MissionContents>{contents}</MissionContents>     
      </MissionInfoBlock>

    </MissionBlock>
    </Link>
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
  const PostList = ({ posts, loading, error, showWriteButton, search_type, search_contents, 
    onChangeField, onSearch, categorys,mission}) => {
    if (error) {
      return     (<PostListBlock><NoPost title={"서버에서 문제가 발생하였습니다..."} /></PostListBlock>)
    }


    /**에러처리 */
    return (
      <PostListBlock>
             <WritePostButtonWrapper>
              
        {showWriteButton && (<Button cyan postWriteBtn to="/post/edit">
            작성하기
          </Button>)}
        </WritePostButtonWrapper>
        {mission&&
      <Mission mission_id= {mission.mission_id} title={mission.mission_title} contents={mission.mission_contents}
      />
        }
       <PostHeader>
         <PaginationContainer/>
       <Search search_type={search_type} search_contents={search_contents} onChangeField={onChangeField} onSearch={onSearch} categorys={categorys}/>
   
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