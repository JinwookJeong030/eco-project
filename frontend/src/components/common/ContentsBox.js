import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';


const ContentsBoxBlock = styled.div`
    height: calc( 100vh - 4rem ) ;  
    width: calc( 100% - ${(props)=>props.hidingState? '4rem':'13rem'});
    margin-left: ${(props)=>props.hidingState? '4rem':'13rem'};
    overflow: auto;
`;



const ContentsBox = ({ children, title, hidingState }) => {
    
  return (
      <ContentsBoxBlock hidingState={hidingState}>
        <h1>{title}</h1>
        {children}
      </ContentsBoxBlock>
  );
};

export default ContentsBox;
