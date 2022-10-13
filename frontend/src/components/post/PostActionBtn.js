import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

const PostActionBtn = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  float: right;
    button + button {
    margin-left: 0.5rem;
  }
`;

// TagBox에서 사용하는 버튼과 일차하는 높이로 설정한 후 서로 간의 여백 지정
const StyledButton = styled(Button)`
  height: 2.4rem;
  width: 5.2rem;
  border-radius: 2px;
  
  & + & {
    margin-left: 0.5rem;
  }
`;

const PostActionBtns = ({ onCancel, onPublish }) => {
  return (
    <PostActionBtn>
   
      <StyledButton onClick={onCancel}>취소</StyledButton>
      <StyledButton cyan onClick={onPublish}>
        등록
      </StyledButton>
    </PostActionBtn>
  );
};

export default PostActionBtns;