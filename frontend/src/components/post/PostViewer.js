import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Responsive from '../common/Responsive';
import ReplyEditor from  './ReplyEditor';




const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;

  h1 {
    font-size: 2rem;
    line-height: 1.5;
    margin: 0;
  }
`;
const SubInfoRight = styled.span`

margin-left: auto;

`
const SubInfo = styled.div`
  display:flex;
  flex-direction:row;
  margin-top: 0.5rem;
  color: ${palette.gray[6]};
 

  /* span 사이에 가운데점 문자 보여 주기 */
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
`;

const ReplyItem = styled.div`


`

const PostViewer = ({ post, error, loading }) => {
  
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

  const { post_title, post_contents, user_name, post_regdate,  } = post;
  let viewCnt=0, recommend=0, reply= 0;

  return (
    <>

      <PostHead>
        <h1>{post_title}</h1>
        <SubInfo>
          <span>
            <b>{user_name}</b>
          </span>
          <span>{new  Date(post_regdate).toLocaleDateString()}</span>
          <SubInfoRight>
            <span>조회수 {viewCnt}</span>
            
            <span>추천 {recommend}</span>
            <span>댓글 {reply}</span>
          </SubInfoRight>
        </SubInfo>
       
      </PostHead>
      <PostContents
        dangerouslySetInnerHTML={{ __html: post_contents }}
      />
   
    </>
  );
};

export default PostViewer;