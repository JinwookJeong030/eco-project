/**
 * 에러 페이지
 */
 import styled from 'styled-components';
 import palette from '../lib/styles/palette';
 import {Link, useNavigate} from 'react-router-dom'

 const NotFoundBlock = styled.div`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 background: ${palette.gray[2]};
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 


`;
const Box = styled.div`
.logo-area {
  display: block;
  
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
}
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);
padding: 2rem;
width: 540px;
background: white;
border-radius: 2px;
text-align: center;
border: solid thin;

`
const ErrorCode =styled.h1`
font-weight:800;
font-size:70px;
margin:0;
`
const ErrorContents =styled.h2`
font-weight:800;
font-size:20px;
margin:0;
`
const Content =styled.p`
margin-bottom:50px;
`
const Button  =styled.button`
width:10rem;
height:2.5rem;
font-size:20px;
margin-right:10px;
margin-left:10px;
color:${palette.green[0]};
background:${palette.green[2]};
&:hover{
  color:${palette.green[2]};
  background:${palette.green[1]};
}
&:active{
  color:#81F781;
  background:#088A68;
}
`
 const EditPostPage = () => {
  const navigate = useNavigate();
   return (
   <NotFoundBlock>      
    <Box>
      <ErrorCode >404</ErrorCode>
      <ErrorContents >Page Not Found</ErrorContents>
      <Content>페이지가 삭제되었거나 <br/>주소가 변경되었을 수 있습니다.</Content>
      <Link to='/'><Button >홈페이지 메인</Button></Link>
      <Button onClick={()=>{navigate(-1);}}>뒤로가기</Button>
    </Box>
    
   </NotFoundBlock>);
 };
 
 export default EditPostPage;
 