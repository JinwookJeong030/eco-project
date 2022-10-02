import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "./Button";

const Fullscreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AskModalBlock = styled.div`
  width: 410px;
  background: white;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);

  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 3rem;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledButton = styled(Button)`
  height: 2rem;
  & + & {
    margin-left: 0.75rem;
  }
`;

const Title = styled.h2`
color: ${palette.green[0]};
`
const Contents =styled.div`
margin-top:3rem;
font-size: 1.2rem;
text-align:center;

`
const AskModal = ({
  visible,
  title,
  discription,
  discription2,
  confirmText = '확인',
  cancelText ,
  onConfirm,
  onCancel,
}) => {
  if (!visible) return null;

  return (
    <Fullscreen>
      <AskModalBlock>
        <Title>{title}</Title>
        <Contents>
        <p>
        {discription}
        <br/>
        {discription2}
        </p>

        </Contents>
       
        <div className="buttons">
          {cancelText&&<StyledButton onClick={onCancel}>{cancelText}</StyledButton>}
          {confirmText&&<StyledButton cyan onClick={onConfirm}>{confirmText}</StyledButton>}
        </div>
      </AskModalBlock>
    </Fullscreen>
  );
};

export default AskModal;