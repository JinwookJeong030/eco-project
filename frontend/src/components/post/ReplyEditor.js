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
  width:95%;
  margin-left:auto;
  `}
`


const ReplyEditorBackground = styled.div`
display:flex;
flex-direction:column;
margin-bottom:0.5rem;
margin-left:auto;

width:100%;
border: 2px solid ;
border-color: #424242;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.1);
padding:0.5rem 0.8rem 0.5rem 0rem;
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
@media (max-width: 768px) {
  width:100%;
}
`

const InputReplyContents = styled.textarea`
text-align: left;
height:3rem;
padding: 5px;
margin: 0px;
width: 100%;
margin-left: auto;
border: 2px solid;
resize: none;
@media (max-width: 768px) {
  height:5rem;
}
`
const LocationLoginBtn = styled(Button)`
 
  width:17rem;
  height:2.5rem;
  font-size: 1.2rem;
  text-align: center;
  margin-left:auto;
  margin-right:auto;
  margin-top:;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`
const SubmitBtn = styled(Button)`
width:4rem;
height:1.8rem;
margin-right:0.5rem;

margin-left:auto;
@media (max-width: 768px) {
  width:4rem;
  height:1.5rem;
  font-size: 0.8rem;
  margin-left:auto;
  margin-right:0rem;

}

`
const Text = styled.h3`

  margin: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom:0.5rem;
  font-size:1.1rem;
  color: ${palette.green[1]};
  @media (max-width: 768px) {
    font-size: 0.8rem;
  
  }

`

const ReplyEditorItem = ({ onChangeReplys, onPublish, addState, reply_contents})=>{
  console.log(reply_contents);

    return (<ReplyEditorBackground addReply={addState}>
            <InputReplyDiv>

            <InputReplyContents onChange={onChangeReplys} maxLength="150" placeholder='댓글은 150자까지 작성 가능합니다.' value={reply_contents||""}/>
            
            </InputReplyDiv>
            <SubmitBtn green onClick={onPublish}>등록</SubmitBtn>
        </ReplyEditorBackground>);

}

const ReplyEditor = ({user,onLocationLogin, onChangeField, onPublish,addState, reply_contents}) => {

  const onChangeReplys= e=>{
    !addState?
    onChangeField({ key: 'reply_contents', value: e.target.value }):
    onChangeField({ key: 'reply_add_contents', value: e.target.value });
  }
  return (
user?
    <ReplyEditorItem  onChangeReplys={onChangeReplys}
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

export default ReplyEditor;