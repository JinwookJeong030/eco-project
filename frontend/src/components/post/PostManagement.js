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

      <PostManagementBtn gray onClick={onEdit} postWriteBtn>수정</PostManagementBtn>

      <PostManagementBtn gray onClick={onRemoveClick} postWriteBtn>삭제</PostManagementBtn>
      </>
      :<></>
      }
      <PostManagementBtn green onClick={onBack} postWriteBtn>뒤로가기</PostManagementBtn>
      </PostManagementDiv>
     
      </PostManagementBlock>
      <AskRemoveSuccessModal
      />
      <AskRemoveModal
        visible={deleteAskModal}
        onConfirm={onConfirm}
        onCancel={onCancel}
        title="게시물 삭제"
        discription="게시물을 정말 삭제하시겠습니까?"
        discription2="게시물 삭제시 복구가 불가능합니다."
      /> 
      <AskRemoveSuccessModal
        visible={succesModal}
        onConfirm={onRemoveSuccess}
        title="게시물 삭제 완료"
        discription="게시물이 삭제되었습니다."
        discription2="게시판으로 이동합니다."
      />
      </>
    )
  }
export default PostManagement;