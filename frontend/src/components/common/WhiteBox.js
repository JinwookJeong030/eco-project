import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from './Responsive';

const WhiteBoxBlock= styled(Responsive)`

`;

const ContentsBox = styled.div`
display: flex;
flex-direction:column;
margin-top:1rem;
margin-bottom:1.5rem;
padding:1.5rem 2rem 1rem 2rem;
border: thin solid ;
border-color: #424242;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);
flex-wrap: nowrap;
`
const PostsItemBlock = styled.div`
display: flex;
margin-top:1rem;
margin-bottom:1.5rem;
border: thin solid ;
border-color: #424242;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);
padding:0rem 0rem 0rem 0rem;
flex-wrap: nowrap;

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
export const WhitePostsItemBox= ({children}) => {
    return (
  
      <PostsItemBlock>
        {children}
      </PostsItemBlock>
    );
  };


export default WhiteBox;