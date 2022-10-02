import Button from "../common/Button";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import { useState } from "react";
import AskRemoveModal from "./AskRemoveModal";
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

const PostManagement = ({user , id, onEdit, onRemove, onBack })=>{
  const [modal, setModal] = useState(false);
  const onRemoveClick = () => {
    setModal(true);
  }
  const onCancel = () => {
    setModal(false);
  }
  const onConfirm = () => {
    setModal(false);
    onRemove()
  }
    
    return(<>
      <PostManagementBlock>
        <PostManagementDiv>{
       user?  <> 
   
      <PostManagementBtn gray onClick={onEdit}>수정</PostManagementBtn>

      <PostManagementBtn gray onClick={onRemoveClick}>삭제</PostManagementBtn>
      </>:<></>}
      <PostManagementBtn green onClick={onBack}>뒤로가기</PostManagementBtn>
      </PostManagementDiv>
     
      </PostManagementBlock>
      <AskRemoveModal
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
      /> 
      </>
    )
  }
export default PostManagement;