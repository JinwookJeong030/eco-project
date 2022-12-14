
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import { Link } from "react-router-dom";
import {WhitePostsItemBox} from '../common/WhiteBox';
import ReplyEditor from './ReplyEditor';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AskRemoveModal, { AskRemoveSuccessModal } from './AskRemoveModal';
const ReplyListBlock = styled.div`
`;

const ReplyItemBlock = styled.div`
margin-top:0.2rem;
margin-bottom:0.2rem;
border: 2px solid ;
border-color: #424242;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.1);
padding:0.5rem 1.2rem 0.5rem 1.2rem;
font-size: 0.9rem;
@media (max-width: 768px) {
  font-size: 0.6rem;
};
word-wrap: break-word;      
white-space: -moz-pre-wrap; 
white-space: pre-wrap;
word-break:break-all;
`
const AddReplyItemBlock = styled.div`
margin-top:0.2rem;
margin-bottom:0.2rem;
border: 2px solid ;
border-color: #424242;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.1);
padding:0.5rem 1.2rem 0.5rem 1.2rem;
margin-left: 1rem;
background: #eeeeee;
font-size: 0.9rem;
@media (max-width: 768px) {
  font-size: 0.6rem;
};
word-wrap: break-word;      
white-space: -moz-pre-wrap; 
white-space: pre-wrap;
word-break:break-all;
`
const AddReplyEditor =styled(ReplyEditor)`

`

const NickName = styled.div`
width:7rem;

@media (max-width: 768px) {
  width:20rem;
}
`

const Contents = styled.div`
flex-direction:row;
width: 100rem;
font-family: sans-serif;
margin-left:1rem;


`
const Regdate = styled.div`
margin-left: auto;
font-size: 0.3rem;
color: ${palette.gray[6]};
@media (max-width: 768px) {
  font-size: 0.5rem;
  width:40rem;
}
`
const DeleteBtn = styled.button`
color: white;
background: grey;
border: grey;
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


const onChangeAddReplyState= (onChangeField, reply, addReplyState)=>{
  const reply_group_id = reply.reply_group_id;
  addReplyState? (
  reply_group_id===addReplyState?
  onChangeField({ key: 'addReplyState', value: null  })
  :
    onChangeField({ key: 'addReplyState', value: reply_group_id  })

  ):(
  onChangeField({ key: 'addReplyState', value: reply_group_id  }));

}

const onChangeRemoveReplyState = (onChangeField, reply_id )=>{

  onChangeField({ key: 'removeReplyState', value: reply_id  });

}

const ReplyItem = ({user, onChangeField, reply, addReplyState,onRemoveClick }) => {
  
 
    return (
    
    <ReplyItemBlock onClick={()=>onChangeAddReplyState( onChangeField, reply, addReplyState )}>
        <ReplyItemInfoBlock>
            <NickName><b>{reply.user_name}</b></NickName>
            <Contents>{reply.reply_contents}</Contents>
            <Regdate>{new Date(reply.reply_regdate).toLocaleString()}</Regdate>
            {user?(user.user_name === reply.user_name?<DeleteBtn onClick={()=>onRemoveClick(onChangeField,reply)}>x</DeleteBtn>:<></>):<></>}
        </ReplyItemInfoBlock>
    </ReplyItemBlock>
    );
};
const AddReplyItem =({user,onChangeField, reply, addReplyState,onRemoveClick})=>{
 
  return(
  <AddReplyItemBlock onClick={()=>onChangeAddReplyState(onChangeField, reply, addReplyState)}>
        <ReplyItemInfoBlock>
            <NickName><b>???  {reply.user_name}</b></NickName>
            <Contents>{reply.reply_contents}</Contents>
            <Regdate>{new Date(reply.reply_regdate).toLocaleString()}</Regdate>
            {user?(user.user_name === reply.user_name?<DeleteBtn onClick={()=>{onRemoveClick(onChangeField,reply)}}>x</DeleteBtn>:<></>):<></>}
        </ReplyItemInfoBlock>
    </AddReplyItemBlock>
  )

}

const ReplyList = ({user,addReplyState,removeReplyState, replys, loading, error,onChangeField, onPublish,onRemove, onRemoveSuccess, reply_contents }) => {

  const [deleteAskModal, setDeleteAskModal] = useState(false);
  const [succesModal, setSuccesModal] = useState(false);

  const onRemoveClick = (onChangeField,reply) => {
    const reply_id = reply.reply_id;
    onChangeRemoveReplyState(onChangeField,reply_id);
    setDeleteAskModal(true);
  }
  const onCancel = () => {
    setDeleteAskModal(false);
    setSuccesModal(false);
  }
  const onConfirm = () => {
    setDeleteAskModal(false);
    onRemove()
    setSuccesModal(true);
  }


 
    if (error) {
      return <>????????? ????????? ??? ????????????...</>
    }
    const addState =true;
  


    /**???????????? */
    return (
      <>
      <ReplyListBlock>
  
        {!loading && replys && (<div>
          {
            replys.map((reply) => (<div key={reply.reply_id}>
              

              {
                reply.reply_type===2?<></>:
              reply.reply_type===0?
            <ReplyItem 
            user={user}
            onChangeField={onChangeField} reply={reply} 
            key={reply.reply_id} 
            addReplyState={addReplyState}
            onRemoveClick={onRemoveClick}
            
            />:
            <AddReplyItem
            user={user}
            onChangeField={onChangeField}
            reply={reply} key={reply.reply_id}
            addReplyState={addReplyState}
            onRemoveClick={onRemoveClick}
         
            />}
                   { 
            //????????? ?????? 
            user && reply.reply_group_id===addReplyState &&(reply.reply_type===0||reply.reply_type===2)?(<>
            <AddReplyEditor user={user} addState={addState} onChangeField={onChangeField} onPublish={onPublish} reply_contents={reply_contents}/>
          
            </>):
            <></>
            }
            </div>
          ))}
        </div>)}
      </ReplyListBlock>
      <AskRemoveModal
        visible={deleteAskModal}
        onConfirm={onConfirm}
        onCancel={onCancel}
        title="?????? ??????"
        discription="????????? ?????????????????????????"
      /> 
      <AskRemoveSuccessModal
        visible={succesModal}
        onConfirm={onRemoveSuccess}
        title="?????? ?????? ??????"
        discription="????????? ?????????????????????."
        
      />
      </>
    );
  };
  
  export default ReplyList;