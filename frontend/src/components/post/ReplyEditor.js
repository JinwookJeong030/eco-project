import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Responsive from '../common/Responsive';
import WhitePostsItemBox from '../common/WhiteBox';

const ReplyEditorBlock = styled.div`
flex-wrap: nowrap;
`;


const ReplyEditorBackground = styled.div`
display:flex;
flex-direction:column;
margin-bottom:0.5rem;
border: thin solid ;
border-color: #424242;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.1);
padding:1rem 1rem 0.5rem 0.5rem;
flex-wrap: nowrap;
font-size: 0.9rem;
background: ${palette.gray[0]};
`
const InputReplyDiv = styled.div`
display: flex;
flex-direction: row;
margin-left:0.5rem;
margin-right:0.5rem;
margin-bottom:0.5rem;
`
const NickName = styled.div`

`
const InputReplyContents = styled.input`
text-align: left;
padding: 5px;
margin: 0px;
width: 48rem;
height: 6rem;
margin-left: auto;

`
const SubmitBtn = styled(Button)`
margin-left: auto;
width:5rem;
height:2rem;
margin-right:0.5rem;
margin-bottom:0rem;
`
const ReplyEditorItem = ({user})=>{


    return (<ReplyEditorBackground>
            <InputReplyDiv>
            <NickName><b>{user.user_name}</b></NickName>
            <InputReplyContents/>
            </InputReplyDiv>
            <SubmitBtn green>등록</SubmitBtn>
        </ReplyEditorBackground>);

}

const ReplyEditor = ({}) => {
  const userEx = {
    user_name:'닉네임'
}
  return (
    <ReplyEditorBlock>
    <ReplyEditorItem user={userEx}/>
    </ReplyEditorBlock>
  );
};

export default ReplyEditor;