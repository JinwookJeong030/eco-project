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
    @media (max-width: 768px) {
      margin-left:1rem;
      width: 100%;
    };

  
`;
const ContentsTitle = styled.h1`

@media (max-width: 768px) {
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
