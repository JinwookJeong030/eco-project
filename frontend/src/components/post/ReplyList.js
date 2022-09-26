
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import { Link } from "react-router-dom";
import {WhitePostsItemBox} from '../common/WhiteBox';
const ReplyListBlock = styled.div`
flex-wrap: nowrap;
`;

const ReplyItemBlock = styled.div`
margin-top:0.5rem;
margin-bottom:0.5rem;
border: thin solid ;
border-color: #424242;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.1);
padding:1rem 1.2rem 0rem 1.2rem;
flex-wrap: nowrap;
font-size: 0.9rem;
flex-wrap: nowrap;
`
const NickName = styled.div`
width:7rem;
flex-wrap: nowrap;
`

const Contents = styled.div`
flex-direction:row;
flex-wrap: wrap;
width: 40rem;
white-space:wrap;
`
const Regdate = styled.div`
margin-left: auto;
flex-wrap: nowrap;

`
const DeleteBtn = styled.button`
color: white;
background: grey;
border: grey;
margin:0.1rem;
widht: 1.2rem;
height: 1.2rem;
`

const ReplyItemInfoBlock = styled.div`

  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  flex-direction:row;
  &:first-child {
    padding-top: 0;
  }
  

`;



const PostContent = styled.div`
font-size: 1rem;
padding-top:0;
`;

const ReplyItem = ({ reply }) => {

    return (
    
    <ReplyItemBlock>
        <ReplyItemInfoBlock>
            <NickName>{reply.reply_name}</NickName>
            <Contents>{reply.reply_contents}</Contents>
            <Regdate>{reply.reply_regdate}</Regdate>
            <DeleteBtn>x</DeleteBtn>
        </ReplyItemInfoBlock>
    </ReplyItemBlock>
    );
};
  const ReplyList = ({ replys, loading, error, showWriteButton }) => {
    
    const replysArray = [
        {
            reply_id: 0,
            reply_name: '유저1',
            reply_contents: '테스트 내용이에요',
            reply_regdate:'09.30 23:18:21',
        },
        {
            reply_id: 1,
            reply_name: '유저2df',
            reply_contents: '테스트내용이에요테스트내용이에요테스트내용이에요테스트내용이에요테스트내용이에요테스트내용이에요테스트내용이에요테스트내용이에요테스트내용이에요테스트내용이에요테스트내용이에요테스트내용이에요테스트내용이에요테스트내용이에요테스트내용이에요테스트내용이에요테스트내용이에요테스트내용이에요테스트내용이에요테스트내용이에요테스트내용이에요테스트내용이에요',
            reply_regdate:'09.30 23:18:21',
        }
    ]
    if (error) {
      return <>게시판을 불러올 수 없습니다...</>
    }
  /**에러처리 */
    return (
      <ReplyListBlock>
       <div>
          {
            replysArray.map(reply => (
            <ReplyItem reply={reply} key={reply.reply_id} />
          ))}
        </div>
        {!loading && replys && (<div>
          {
            replys.map(reply => (
            <ReplyItem reply={reply} key={reply.reply_id} />
          ))}
        </div>)}
      </ReplyListBlock>
    );
  };
  
  export default ReplyList;