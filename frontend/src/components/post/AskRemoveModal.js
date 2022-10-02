import React from "react";
import AskModal from "../common/AskModal";


export const AskRemoveSuccessModal =({confirmText="확인",visible,title,discription,discription2, onConfirm})=>{

  return(
<AskModal
      visible={visible}
      title={title}
      discription={discription}
      discription2={discription2}
      confirmText={confirmText}
      onConfirm={onConfirm}
    />)

}

export const AskRemoveModal = ({ visible,title,discription,discription2, onConfirm, onCancel }) => {
  return (
    <AskModal
      visible={visible}
      title={title}
      discription={discription}
      discription2={discription2}
      confirmText="삭제"
      cancelText="취소"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default AskRemoveModal;