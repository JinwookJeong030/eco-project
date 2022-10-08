import React from 'react';
import styled, { css }  from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from './Responsive';


const whiteBoxStyle = css`
${(props) =>
  props.hoverGrey &&
  css`
  &:hover {
    background: ${palette.gray[0]};
  }
  &:active{
    background: ${palette.gray[2]};
  }
`}
`;
const paddingBox = css`
${(props) =>
  props.paddingBox &&
  css`
    padding-left: 1rem;
    padding-right:1rem;
`}
`;

const flexColumn = css`
${(props) =>
  props.flexColumn &&
  css`
  display: flex;
  flex-direction:column;
`}
`;
const paddingMinTop = css`
${(props) =>
  props.paddingMinTop &&
  css`
 padding-top:0rem;
 padding-bottom:0rem;
 margin:0.3rem;
`}
`;

const WhiteBoxBlock= styled(Responsive)`
`;

const ContentsBox = styled.div`
display: flex;
flex-direction:column;
margin-top:0.5rem;
margin-bottom:0.5rem;
padding:1.5rem 2rem 1rem 2rem;
border: thin solid ;
border-color: #424242;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);
flex-wrap: nowrap;
`
const PostsItemBlock = styled.div`
display: flex;
margin-top:0.7rem;
margin-bottom:0.7rem;
border: thin solid ;
border-color: #424242;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);
padding:0;
flex-wrap: nowrap;
@media (max-width: 768px) {
  flex-direction:column;
  width:100%;
}
${whiteBoxStyle};
${paddingBox};
${flexColumn};
${paddingMinTop};
`

export const WhiteBox = ({children}) => {
    return (
        <WhiteBoxBlock>
      <ContentsBox>
        {children}
      </ContentsBox>
      </WhiteBoxBlock>
    );
  };
export const WhitePostsItemBox= ({children, whiteBoxStyle, paddingBox, flexColumn}) => {
    return (
  
      <PostsItemBlock hoverGrey={whiteBoxStyle} paddingBox = {paddingBox} flexColumn={flexColumn}
      paddingMinTop={paddingMinTop}>
        {children}
      </PostsItemBlock>
    );
  };


export default WhiteBox;