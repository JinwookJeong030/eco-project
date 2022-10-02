import Button from "../common/Button";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import { useState } from "react";
import {AskRemoveModal, AskRemoveSuccessModal} from "./AskRemoveModal";
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

const PostManagement = ({user ,post,loadingRead,loadingDelete,onRemoveSuccess, id, onEdit, onRemove, onBack })=>{
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
    
    return(<>
      <PostManagementBlock>
        <PostManagementDiv>
      {!loadingRead && post&& user&& 
      (post.post_user === user.user_id)?
      <> 

      <PostManagementBtn gray onClick={onEdit}>수정</PostManagementBtn>

      <PostManagementBtn gray onClick={onRemoveClick}>삭제</PostManagementBtn>
      </>
      :<></>
      }
      <PostManagementBtn green onClick={onBack}>뒤로가기</PostManagementBtn>
      </PostManagementDiv>
     
      </PostManagementBlock>
      <AskRemoveSuccessModal
      />
      <AskRemoveModal
        visible={deleteAskModal}
        onConfirm={onConfirm}
        onCancel={onCancel}
      /> 
      <AskRemoveSuccessModal
        visible={succesModal}
        onConfirm={onRemoveSuccess}
 
      />
      </>
    )
  }
export default PostManagement;