import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { DEFAULT_IMAGE_PATH, POST_IMAGE_PATH } from '../../lib/text/host';
import Button from '../common/Button';





const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};

  h1 {
    font-size: 1.8rem;
    line-height: 1.5;
    margin: 0;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;
const SubInfoRight = styled.span`

margin-left: auto;

`
const SubInfo = styled.div`
  display:flex;
  flex-direction:row;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: ${palette.gray[6]};
  @media (max-width: 768px) {
    font-size: 0.5rem;;
  }

  span + span::before {
    color: ${palette.gray[5]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7'; /* 가운데점 문자 */
  }
`;


const PostContents = styled.div`
  font-size: 1.2rem;
  color: ${palette.gray[8]};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;;
  }
  word-wrap: break-word;      
  white-space: -moz-pre-wrap; 
  white-space: pre-wrap;
  word-break:break-all;
`;
const ImgBtnBlock = styled.div`
  display:flex;
  flex-direction: row;
  padding:0;
  margin-left:auto;
  width: 10rem;
  height:5rem;
`
const ImgBtn = styled.a`
  width: 2.5rem;
  height:2.5rem;
  margin-left:auto;
  margin-top:auto;
  margin-bottom:auto;
  margin-right:0;
  padding:0;

  &:hover{
    background:${palette.gray[1]};
  }
  &:active(

  );
  
`
const PostImageContentsBlock = styled.div`
display:flex;
flex-direction:row;

`
const PostImage = styled.img`
height: 25rem;
width:25rem;
border:2px solid;
margin-top:1rem;
margin-left:auto;
margin-right:auto;
margin-bottom:1rem;
@media(max-width: 1000px){
  height: 35vw;
  width:35vw;
}
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);
`
const ImageBtn = styled(Button)`
  height:8rem;
  margin-top:auto;
  margin-bottom:auto;
`
const PostImages =({images, visiblityImg})=>{
  const onErrorImg = (e) => {
    e.target.src = process.env.PUBLIC_URL + '/eco-icon.png';
  }


  return (<>
    {images.map((image,idx)=>(
    <PostImage src={DEFAULT_IMAGE_PATH+image.pf_name} style ={visiblityImg===idx?{display:'block'}:{display:'none'}} onError={onErrorImg}/>))}
    </>
  );
}

const PostImageContents = ({postFiles, visiblityImg, setVisiblityImg})=>{


  const minusImg =()=>{
    if(!(visiblityImg>0)) return;

    setVisiblityImg(visiblityImg-1);
  }
  const plusImg =()=>{
    if(visiblityImg>=postFiles.length-1) return;
    setVisiblityImg(visiblityImg+1);
  }

 
  return (
      <PostImageContentsBlock>
          {!(postFiles.length===1)?
          <ImageBtn onClick={minusImg} disabled={0===visiblityImg}>
        &lt;
        </ImageBtn>:<></>}
        <PostImages images={postFiles} visiblityImg={visiblityImg}/>
        {!(postFiles.length===1)?<ImageBtn onClick={plusImg} disabled={visiblityImg===postFiles.length-1}>
        &gt;
    </ImageBtn>:<></>}
      </PostImageContentsBlock>
  )
}
const CountImageBlock = styled.div`
 display: flex;
 margin-left:auto;
 margin-right:auto;
 font-size:1.2rem;
 
`

const CountImage = ({totalCount, count})=>{
  return <CountImageBlock>{count+1} / {totalCount}</CountImageBlock>
}

const ContentsButtonBlock = ()=>{


  return <ImgBtnBlock>
    <ImgBtn src={ process.env.PUBLIC_URL + "/heart1-icon.png" }/>
    <ImgBtn src={ process.env.PUBLIC_URL + "/heart0-icon.png" }/>
  </ImgBtnBlock>
}


const PostViewer = ({ post,postFiles, error, loading }) => {
  const [visiblityImg,setVisiblityImg] = useState(0);
  // 에러 발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return <>존재하지 않는 포스트입니다.</>;
    }
    return <>오류 발생!</>
  }

  // 로딩 중이거나 아직 포스트 데이터가 없을 때
  if (loading || !post) {
    return null;
  }

  const { post_title, post_contents, user_name, post_regdate, post_views, 
    post_recommend, post_report, replyCnt } = post;
  return (
      <>
      <PostHead>
        <h1>{post_title}</h1>
        <SubInfo>
          <span>
            <b>{user_name}</b>
          </span>
          <span>{new  Date(post_regdate).toLocaleString()}</span>
          <SubInfoRight>
            <span>조회수 {post_views}</span>
            <span>추천 {post_recommend}</span>
            <span>댓글 {replyCnt}</span>
          </SubInfoRight>
      </SubInfo>
      </PostHead>
      {postFiles.length===0?<></>:<><PostImageContents postFiles={postFiles} visiblityImg={visiblityImg} setVisiblityImg={setVisiblityImg}/>
      {!(postFiles.length<2)?<CountImage totalCount={postFiles.length} count={visiblityImg}/>:<></>}</>}
      <PostContents
        dangerouslySetInnerHTML={{ __html: post_contents }}
      />
      {/* <ContentsButtonBlock/> */}


   
    </>
  );
};

export default PostViewer;