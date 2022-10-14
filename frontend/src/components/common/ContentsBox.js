import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';


const ContentsBoxBlock = styled(Responsive)`
    display:flex;
    flex-direction:column;
    height: calc( 100vh - 4rem ) ;  
    width: calc( 100% - ${(props)=>props.hidingState? '4rem':'13rem'});
    margin-left: ${(props)=>props.hidingState? '4rem':'13rem'};
    overflow: auto;
    padding-bottom:3rem;
    @media (max-width: 1300px) {
      margin-left:0rem;
      padding-left:2rem;
      padding-right:0rem;
      width: 100%;
      height:100%;
    };

  
`;
const ContentsTitle = styled.h1`
margin-bottom:0.5rem;
margin-top:0.5rem;
font-size:1.5rem;
@media (max-width: 1000px) {
  margin-left:1.5rem;
  font-size: 1.5rem;
}
`


const ContentsBox = ({ children, title, hidingState }) => {
    
  return (
      <ContentsBoxBlock hidingState={hidingState}>
        <ContentsTitle>{title}</ContentsTitle>
        {children}
      </ContentsBoxBlock>
  );
};

export default ContentsBox;
