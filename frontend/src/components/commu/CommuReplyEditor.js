import React from 'react';
import styled,{css} from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Responsive from '../common/Responsive';
import WhitePostsItemBox from '../common/WhiteBox';


const replyStyle = css`
${(props) =>
  props.addReply &&
  css`
  width:56rem;
  margin-left:auto;
  `}
`


const ReplyEditorBackground = styled.div`
display:flex;
flex-direction:column;
margin-bottom:0.5rem;
border: thin solid ;
border-color: #424242;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.1);
padding:1rem 1.2rem 0.5rem 0.5rem;
flex-wrap: nowrap;
font-size: 0.9rem;
background: ${palette.gray[0]};
${replyStyle}

`
const InputReplyDiv = styled.div`
display: flex;
flex-direction: row;
margin-left:0.5rem;
margin-right:0.5rem;
margin-bottom:0.5rem;
text-align: center;
`
const NickName = styled.div`
margin-left:0.3rem;
`
const InputReplyContents = styled.textarea`
text-align: left;
height:5rem;
padding: 5px;
margin: 0px;
width: 48rem;
margin-left: auto;
resize: none;

`
const LocationLoginBtn = styled(Button)`
 
  width:17rem;
  height:2.5rem;
  font-size: 1.2rem;
  text-align: center;
  margin-left:auto;
  margin-right:auto;
  margin-top:;
`
const SubmitBtn = styled(Button)`
margin-left: auto;
width:5rem;
height:2rem;
margin-right:0.5rem;
margin-bottom:0rem;
`
const Text = styled.h3`

  margin: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom:0.5rem;
  font-size:1.1rem;
  color: ${palette.green[1]};

`

const ReplyEditorItem = ({user, onChangeReplys, onPublish, addState, reply_contents})=>{
  console.log(reply_contents);

    return (<ReplyEditorBackground addReply={addState}>
            <InputReplyDiv>
            <NickName>{addState&&<b>↳ </b>} <b>{user.user_name}</b></NickName>
            <InputReplyContents onChange={onChangeReplys} maxLength="150" placeholder='댓글은 150자까지 작성 가능합니다.' value={reply_contents||""}/>
            
            </InputReplyDiv>
            <SubmitBtn green onClick={onPublish}>등록</SubmitBtn>
        </ReplyEditorBackground>);

}

const CommuReplyEditor = ({user,onLocationLogin, onChangeField, onPublish,addState, reply_contents}) => {
  const userEx = {
    user_name:'닉네임'
}
  const onChangeReplys= e=>{
    !addState?
    onChangeField({ key: 'reply_contents', value: e.target.value }):
    onChangeField({ key: 'reply_add_contents', value: e.target.value });
  }
  return (
user?
  
    <ReplyEditorItem user={user?user:userEx} onChangeReplys={onChangeReplys}
    onPublish={onPublish}
    addState={addState}
    reply_contents={reply_contents}
    />
   :(

    <ReplyEditorBackground>
    <Text>댓글은 로그인 후 작성 할 수 있습니다.</Text>
    <InputReplyDiv>
   <LocationLoginBtn onClick={onLocationLogin} green>로그인 하러가기</LocationLoginBtn>
   </InputReplyDiv>
   </ReplyEditorBackground>
  )
    

  );
};

export default CommuReplyEditor;