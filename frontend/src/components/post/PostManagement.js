import Button from "../common/Button";
import styled from "styled-components";
import Responsive from "../common/Responsive";
const PostManagementBlock =styled(Responsive)`
display:flex;

`
const PostManagementDiv = styled.div`
display: flex;
flex-direction:row;
margin-left: auto;

    
`;
const PostManagementBtn = styled(Button)`
    margin-left:0.5rem;

`;

const PostManagement = ()=>{

    return(
      <PostManagementBlock>
        <PostManagementDiv>
      <PostManagementBtn gray>수정</PostManagementBtn>
      <PostManagementBtn gray>삭제</PostManagementBtn>
      <PostManagementBtn green>뒤로가기</PostManagementBtn>
      </PostManagementDiv>
      </PostManagementBlock>
    )
  }
export default PostManagement;