import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Responsive from '../common/ResponsiveHeader';
import Button from '../common/Button';
const MypageBlock = styled(Responsive)`
  margin-top: 1rem;

  
`;

const MypageTemplateBlock = styled.div`
display: flex;
 width: 50rem;
 display: flex;
margin-bottom:1.5rem;
border: thin solid ;
border-color: #424242;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);
`;
const Wrapper = styled(Responsive)`
margin-bottom: 3rem;
margin-left:1rem;

`
const MypageText =({title, maxlength, text})=>{

  return (
    <div Style="height: 3.5rem; width: 20rem; border: solid thin; border-radius: 5px; margin:15px; ">
      <p Style="margin-top:2px; margin-bottom:1px; margin-left:4px; font-size:13px; font-weight:800;">{title}</p>
      <p Style="margin-top:0px;margin-left:8px; height:2rem; width: 19.5rem; font-size:1.2rem; border:none; outline:none;">
      {text}
    </p>
    </div>);
}
const MypageInput =({title, maxlength, type})=>{


  return (
    <div Style="height: 3.5rem; width: 20rem; border: solid thin; border-radius: 5px; margin:5px; margin:15px; ">
      <p Style="margin-top:2px; margin-bottom:1px; margin-left:4px; font-size:13px; font-weight:800;">{title}</p>
      <input type={type} Style="margin-top:0px;margin-left:8px;height:2rem; width: 19rem; font-size:1.2rem; border:none; outline:none;" maxLength={maxlength}/>
    </div>);
}

const Title = styled.h1`
  margin-bottom: 2rem;

`

const MyInfoBlock =({email, nickName})=>{
  
  return(<>
    <MypageTemplateBlock>
      <Wrapper>
      <Title>개인 정보</Title>
      <MypageText title="이메일 주소" text={email}/>
      <MypageText title="닉네임"  text={nickName}/>
      </Wrapper>
  </MypageTemplateBlock>
  </>
  )
};
const MyPasswordBlock =({error})=>{
  return(<>
    <MypageTemplateBlock>
      <Wrapper>
      <Title>비밀번호 변경</Title>
      <MypageInput title="기존 비밀번호" type="password"/>
      <MypageInput title="새 비밀번호" type="password"/>
      <MypageInput title="새 비밀번호 확인" type="password"/>
      <h3 Style="margin:15px; margin-bottom:0; color: red; font-size: 18px;">{error}</h3>
      <Button cyan myPage>비밀번호 변경</Button>
      </Wrapper>
  </MypageTemplateBlock>
  </>
  )
};
const MyPostInfoBlock =()=>{

  return(<>
    <MypageTemplateBlock>
      <Wrapper>
      <Title>나의 활동</Title>
    
      </Wrapper>
  </MypageTemplateBlock>
  </>
  )
}

const Mypage = ({ children }) => {
  const email='example@google.com';
  const nickName='닉네임';

  return (
    <>
    <MypageBlock>
    <MyInfoBlock email={email} maxlength={18} nickName={nickName}/>

    <MyPasswordBlock/>

    <MyPostInfoBlock/>
    </MypageBlock>
    </>
  );
};

export default Mypage;
