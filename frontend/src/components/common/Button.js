import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
const buttonStyle = css`
  margin-right:0.5rem;
  margin-left:0.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }
  &:disabled{
    background:${palette.gray[3]};
    color: ${palette.gray[5]};
    cursor: not-allowed;
  }
  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${(props) =>
    props.cyan &&
    css`
      background: ${palette.green[0]};
      &:hover {
        background: ${palette.green[1]};
      }
    `}
    ${(props) =>
      props.green &&
      css`
        background: ${palette.green[0]};
        &:hover {
          background: ${palette.green[1]};
        }
      `}
  ${(props)=>
  props.myPage && css`
    margin: 15px;
    width: 20rem;
    height: 2.5rem;
  `}
  ${(props)=>
    props.postWriteBtn && css`
    @media (max-width: 768px) {
      font-size:4px;
      margin-top:auto;
      margin-bottom:auto;
      margin-left:auto;
      height:1.5rem;
    }
    `}
`;
const StyledButton = styled.button`
  ${buttonStyle}
`;
const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = (props) => {
  return props.to ? (
    <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;
