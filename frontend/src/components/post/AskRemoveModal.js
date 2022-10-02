import React from "react";
import AskModal from "../common/AskModal";


export const AskRemoveSuccessModal =({visible,  onConfirm})=>{

  return(
<AskModal
      visible={visible}
      title="게시물 삭제 성공"
      discription="게시물이 삭제되었습니다."
      discription2="게시판으로 이동합니다."
      confirmText="확인"
      onConfirm={onConfirm}
    />)

}

export const AskRemoveModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <AskModal
      visible={visible}
      title="게시물 삭제"
      discription="게시물을 정말 삭제하시겠습니까?"
      discription2="게시물 삭제시 복구가 불가능합니다."
      confirmText="삭제"
      cancelText="취소"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default AskRemoveModal;