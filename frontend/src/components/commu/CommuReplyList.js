import React, { useState } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import WhiteBox from '../common/WhiteBox';
import AskRemoveModal, { AskRemoveSuccessModal } from '../post/AskRemoveModal';

const CommuReplyListBlock =styled.div``
const ReplyItemBlock = styled.div`
width:100%;
margin-top:0.5rem;
margin-bottom:0.5rem;
border: thin solid ;
border-color: #424242;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.1);
padding:1rem 1.2rem 0.5rem 1.2rem;

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
width: 37rem;
white-space:wrap;
margin-top:auto;
margin-bottom:auto;
`
const Regdate = styled.div`
margin-left: auto;
flex-wrap: nowrap;
font-size: 0.3rem;
margin-right: 0.5rem;
margin-top:3px;
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
const ReplyItem = ({user,reply,onRemoveClick }) => {
  
    return (
    <ReplyItemBlock>
        <ReplyItemInfoBlock>
            <NickName><b>{reply.cr_user}</b></NickName>
            <Contents>{reply.cr_contents}</Contents>
            <Regdate>{new Date(reply.cr_regdate).toLocaleString()}</Regdate>
            {user?(user.user_name === reply.user_name?<DeleteBtn onClick={onRemoveClick}>x</DeleteBtn>:<></>):<></>}
        </ReplyItemInfoBlock>
    </ReplyItemBlock>
    );
};
const CommuReplyList = ({user, replys, loading, error,
    onRemove, onRemoveSuccess, reply_contents }) => {
    const [deleteAskModal, setDeleteAskModal] = useState(false);
    const [succesModal, setSuccesModal] = useState(false);
    const onRemoveClick = () => {
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
        return <div>댓글을 불러올 수 없습니다...</div>
      }

    return (<>
        <CommuReplyListBlock>
  
        {!loading && replys && (<div>
          {
            replys.map((reply) => (
            <ReplyItem 
            user={user}
            reply={reply} 
            key={reply.reply_id} 
            onRemoveClick={onRemoveClick}
            />
           
          ))}
        </div>)}
      </CommuReplyListBlock>
       <AskRemoveModal
       visible={deleteAskModal}
       onConfirm={onConfirm}
       onCancel={onCancel}
       title="댓글 삭제"
       discription="댓글을 삭제하시겠습니까?"
     /> 
     <AskRemoveSuccessModal
       visible={succesModal}
       onConfirm={onRemoveSuccess}
       title="댓글 삭제 완료"
       discription="댓글이 삭제되었습니다."
     />
     </>
    );
};

export default CommuReplyList;