import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import WhiteBox from '../common/WhiteBox';
import FlowerItem from './FlowerItem';
import FlowerItemInfo from './FlowerItemInfo';



const FlowerpotsBlock = styled(WhiteBox)`
`
const FlowerpotsWrapperBlock = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-between;

`;
const FlowerpotInfoBlock = styled.div`
display:flex;
flex-direction:column;
width:  12.6rem;
height: 23rem; 

@media(max-width:1000px){
  width: 22vw;
  height: 45vw; 
}


`
const FlowerPotBlock = styled.div`
height:15rem; 
@media(max-width:1000px){
  height:25vw; 
}
`;

const HeaderBlock =styled.div`
display:flex;
flex-direction:row;

`

const TotalPoint = styled.div`
 font-weight:bold;


`
const PointUsingBtn = styled.img`
background:green;
width:2.5rem;
height:2.5rem;
margin-left:1rem;
margin-bottom:1rem;
border:2px solid;
`
const PlantDeleteBtn = styled.img`
background:green;
width:2.5rem;
height:2.5rem;
margin-left:auto;
margin-bottom:1rem;
border:2px solid;
`
const FlowerpotItem = ({})=>{

  return(
    <FlowerPotBlock>
      <FlowerItem/>
    </FlowerPotBlock>

  )
}


const Garden = () => {


  return (
    <FlowerpotsBlock>
      <HeaderBlock>
      <TotalPoint>총 보유 포인트: 15000</TotalPoint>
      <PlantDeleteBtn/>
      <PointUsingBtn/>
      </HeaderBlock>
 
      <FlowerpotsWrapperBlock>
        <FlowerpotInfoBlock>
        <FlowerpotItem/>
        <FlowerItemInfo/>
        </FlowerpotInfoBlock>
        <FlowerpotInfoBlock>
        <FlowerpotItem/>
        <FlowerItemInfo/>
        </FlowerpotInfoBlock>
        <FlowerpotInfoBlock>
        <FlowerpotItem/>
        <FlowerItemInfo/>
        </FlowerpotInfoBlock>
      </FlowerpotsWrapperBlock>
    </FlowerpotsBlock>
  );
};

export default Garden;
