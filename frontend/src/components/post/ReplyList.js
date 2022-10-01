
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import { Link } from "react-router-dom";
import {WhitePostsItemBox} from '../common/WhiteBox';
import ReplyEditor from './ReplyEditor';
import { useState } from 'react';
import { useSelector } from 'react-redux';
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
const AddReplyItemBlock = styled.div`
margin-top:0.5rem;
margin-bottom:0.5rem;
border: thin solid ;
border-color: #424242;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.1);
padding:1rem 1.2rem 0rem 1.2rem;
margin-left: 2rem;
background: #eeeeee;
flex-wrap: nowrap;
font-size: 0.9rem;
flex-wrap: nowrap;
`
const AddReplyEditor =styled(ReplyEditor)`

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

const ReplyItem = ({onChangeField, reply, addReplyState }) => {
  const reply_group_id = reply.reply_group_id;
  const onChangeAddReplyState= ()=>{


    addReplyState? (
    reply_group_id===addReplyState?
    onChangeField({ key: 'addReplyState', value: null  })
    :
      onChangeField({ key: 'addReplyState', value: reply_group_id  })

    ):(
    onChangeField({ key: 'addReplyState', value: reply_group_id  }));

  }
    return (
    
    <ReplyItemBlock onClick={onChangeAddReplyState}>
        <ReplyItemInfoBlock>
            <NickName>{reply.user_name}</NickName>
            <Contents>{reply.reply_contents}</Contents>
            <Regdate>{reply.reply_regdate}</Regdate>
            <DeleteBtn>x</DeleteBtn>
        </ReplyItemInfoBlock>
    </ReplyItemBlock>
    );
};
const AddReplyItem =({onChangeField, reply})=>{
  const reply_group_id = reply.reply_group_id;
  const onChangeAddReplyState= ()=>{
    onChangeField({ key: 'addReplyState', value: reply_group_id  });
  }
  return(
  <AddReplyItemBlock>
        <ReplyItemInfoBlock onClick={onChangeAddReplyState}>
            <NickName>{reply.user_name}</NickName>
            <Contents>{reply.reply_contents}</Contents>
            <Regdate>{reply.reply_regdate}</Regdate>
            <DeleteBtn>x</DeleteBtn>
        </ReplyItemInfoBlock>
    </AddReplyItemBlock>
  )

}

  const ReplyList = ({addReplyState, replys, loading, error,onChangeField, onPublic }) => {

    const [flag,setFlag] =useState(true);
    
    const flagEditor =()=>{
      if(flag === true)
      setFlag(false)
      else
      setFlag(true);
    }


    if (error) {
      return <>댓글을 불러올 수 없습니다...</>
    }
  /**에러처리 */
    return (
      <ReplyListBlock>
  
        {!loading && replys && (<div>
          {
            replys.map(reply => (<>
   

              {
              reply.reply_type===0?
            <ReplyItem onChangeField={onChangeField} reply={reply} key={reply.reply_id} 
            addReplyState={addReplyState}/>:
            <AddReplyItem
            onChangeField={onChangeField}
            reply={reply} key={reply.reply_id}
            />}
                    { reply.reply_group_id=== addReplyState&& reply.reply_type===0?(<>
            <AddReplyEditor/>
            </>
            ):<></>}
            </>
          ))}
        </div>)}
      </ReplyListBlock>
    );
  };
  
  export default ReplyList;