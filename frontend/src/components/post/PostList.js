
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import {IoIosArrowDropdown, IoIosArrowDropup} from 'react-icons/io'
import { Link } from "react-router-dom";
import  {WhitePostsItemBox} from '../common/WhiteBox';
import Search from '../common/Search';
import PaginationContainer from '../../containers/post/PaginationContainer';
import { useState } from 'react';
const PostListBlock = styled(Responsive)` 
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;

  margin-top:auto;
  margin-bottom:auto;
 
  

`;

const PostItemInfoBlock = styled.div`
  display:flex;
  flex-direction:column;
  width: 100%;
  height: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left:1rem;
  width: 86.5%;
  @media (max-width: 1000px) {
    width: 100%;
    margin-left:auto;
    margin-right:auto;
    padding-right:1rem;
   }
   word-wrap: break-word;      
white-space: -moz-pre-wrap; 
white-space: pre-wrap;
word-break:break-all;
`;
const Image = styled.img`
width: 6rem;
height: 6rem;
border: solid thin;
border-width:2px;
margin: 0.5rem;
padding:0;
@media (max-width: 1000px) {
  width: 4rem;
  height: 4rem;
  margin-top:auto;
 margin-left:0.5rem;
 margin-right:0rem;
 margin-bottom:auto;
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
  font-size: 1.6rem;
  
  @media (max-width: 1000px) {
    margin-top:0rem;
    font-size: 3.5vw;
    width:100%;
  }

  
`;

const PostNickName = styled.div`
width: 10rem; 
height:1rem;
font: bold;
font-size: 0.8rem;

padding:0;
color:${palette.gray[6]};
margin-bottom:5px;
 @media (max-width: 1000px) {
    margin:0rem;
    font-size: 2.5vw;
    width:100%;
  }
`
const PostContent = styled.div`
padding:0;
width: 70%; 
height:2rem;
overflow:hidden; 

text-overflow:ellipsis;
  @media (max-width: 1000px) {
    font-size: 2.5vw;
    height:1rem;
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

width: 60%;
margin-left:auto;
margin-right:auto;
height:8rem;
maring-left:auto;
@media (max-width: 1000px) {
  height: 18vw;
  width: 100%;
}
`

const NoTitle =styled.h1`
margin-left: auto;
margin-right:auto;
color: ${palette.green[0]};
margin-top:3rem;
margin-bottom:3rem;
`
const MissionHidingUpBtn = styled(IoIosArrowDropup)`
  width:1.3rem;
  height:1.3rem;
  margin-left: auto;
  margin-right:0.1rem;

`
const MissionHidingDownBtn = styled(IoIosArrowDropdown)`
width:1.3rem;
height:1.3rem;
margin-left: auto;
margin-right:0.1rem;

`
const MissionHeaderTitle = styled.div`
  font-size:0.8rem;
  margin-top:auto;
  margin-bottom:auto;
  margin-left:0.3rem;
`
const MissionHeaderBlock =styled(WhitePostsItemBox)`
height:1.4rem;
font-weight: bold;
`
const NoPost =({title})=>{

  return (<WhitePostsItemBox>
  <NoTitle>{title}</NoTitle>
  </WhitePostsItemBox>);

}
const MissionHeader = ({onClickHidingMission, hidingMissionState, mission})=>{
  return(
    <MissionHeaderBlock onClick={onClickHidingMission}>
    <MissionHeaderTitle>&lt;오늘의 미션&gt; {mission}</MissionHeaderTitle>
     {!hidingMissionState?<MissionHidingUpBtn />:
     <MissionHidingDownBtn />}
    </MissionHeaderBlock>
  )

}
const Mission = ({hidingMissionState, mission_id, title, contents, onClickMission})=>
{
  return (
    !hidingMissionState?
    
    <Link to='/post/edit' state={{ mission_state: true }}>
    <WhitePostsItemBox onClick={onClickMission} >

    <MissionImg src={process.env.PUBLIC_URL + "/mission_img/mission_"+mission_id+".png"}/>

    </WhitePostsItemBox>
    </Link>:<></>
  );
}


const PostItem = ({ post }) => {
  const extractTextPattern = /(<([^>]+)>)/gi;
 
  const post_contents = post.post_contents.replace(extractTextPattern, '')
    return (
      <Link to={`/post/view/${post.post_id}`}>
      <WhitePostsItemBox whiteBoxStyle>
   
        <Image src={process.env.PUBLIC_URL + "/eco-icon.png"}/>
        <PostItemInfoBlock>
        <Title>{post.post_title}</Title>
        <PostNickName> {post.user_name}</PostNickName>
        <PostContent>{post_contents}</PostContent>
        <PostRegdate>{new Date(post.post_regdate).toLocaleString()}</PostRegdate>
       
      </PostItemInfoBlock>
   
    </WhitePostsItemBox>
    </Link>
    );
  };
  const PostList = ({ posts, loading, error, showWriteButton, search_type, search_contents, 
    onChangeField, onSearch, categorys,mission}) => {

    const [hidingMissionState, setHidingMissionState] = useState(true);
    const onClickHidingMission = ()=>{
      setHidingMissionState(!hidingMissionState);
    }

    if (error) {
      return     (<PostListBlock><NoPost title={"서버에서 문제가 발생하였습니다..."} /></PostListBlock>)
    }


    /**에러처리 */
    return (
      <PostListBlock>
             <WritePostButtonWrapper>
              
        {showWriteButton && (<Button cyan postWriteBtn to="/post/edit" state={{ mission_state: false }}>
            작성하기
          </Button>)}
        </WritePostButtonWrapper>
        {mission&&<>
      <MissionHeader onClickHidingMission={onClickHidingMission} hidingMissionState={hidingMissionState} mission={mission.mission_title}/>
      <Mission hidingMissionState={hidingMissionState} mission_id= {mission.mission_id} title={mission.mission_title} contents={mission.mission_contents}
      />
      </>
        }
       <PostHeader>
   
       <Search search_type={search_type} search_contents={search_contents} onChangeField={onChangeField} onSearch={onSearch} categorys={categorys}/>
     
        </PostHeader>
        {!loading && posts &&(posts.length===0?<NoPost title={"검색 된 게시물이 없습니다."} />:(<div>
          {
          posts.map(post => (
            <PostItem post={post} key={post.post_id} />
          ))}
        </div>))}
        <PaginationContainer/>
      </PostListBlock>
    );
  };
  
  export default PostList;