import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import WhiteBox from '../common/WhiteBox';
import FlowerItem from './FlowerItem';
import FlowerItemInfo from './FlowerItemInfo';
import { useEffect, useState } from 'react';




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
width:3rem;
height:3rem;
margin-left:1rem;
margin-bottom:1rem;
border:2px solid;
border-radius:10px;
background: #B7F0B1;
&:hover{
  background: #86E57F;
}
&:active{
  background: #47C83E;
}
`
const PlantDeleteBtn = styled.img`
width:3rem;
height:3rem;
margin-left:auto;
margin-bottom:1rem;
border:2px solid;
border-radius:10px;
background: #F15F5F;

&:hover{
  background: #CC3D3D;
}
&:active{
  background: #980000;
}

`

const NoFlowerItemBlock = styled.div`
position:relative;
border:2px solid;
display:flex;
height:14.7rem; 
width:12.65rem;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);
width:100%;

@media(max-width:1000px){
    width: 100%;
    height:25vw; 
}
background:${palette.gray[4]};
`

const NoFlowerItem = styled.img`
height:4rem;
widht:4rem;
margin-left:auto;
margin-right:auto;
margin-top:auto;
margin-bottom:auto;
@media(max-width:1000px){
  width: 100%;
  height:8vw;
  width:8vw 
}
`
const NoFlowerItemInfo = styled.div`
height:4.5rem; 
width:12.65rem;

font-size:0.8rem;
font-weight:bold;
padding:5px;
border: 2px solid;
margin-top: 2.3rem;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);

@media(max-width:1000px){
    width: 22vw;
    height:5rem; 
    font-size:1.55vw;
  }
`

const FlowerpotItem = ({})=>{

  return(
    <FlowerPotBlock>
      <FlowerItem />
    </FlowerPotBlock>

  )
}

const FlowerTotalBlock = ({ totalPoint, point})=>{
return( 
<FlowerpotInfoBlock id={"plus"} >
  <FlowerpotItem/>
  <FlowerItemInfo totalPoint={totalPoint} point={point}/>
  </FlowerpotInfoBlock>
)
  
}
const NoFlowerTotalBlock = ({cnt})=>{

  return( 
  <FlowerpotInfoBlock>

    <FlowerPotBlock>
    <NoFlowerItemBlock>
     <NoFlowerItem src={ process.env.PUBLIC_URL + "/lock-icon.png" }/>
    </NoFlowerItemBlock>
    </FlowerPotBlock>
    <NoFlowerItemInfo>
     <br/>식물 {cnt}개가 성장 완료 시<br/>해금됩니다.
    </NoFlowerItemInfo>
    </FlowerpotInfoBlock>
  )
    
  }


const Garden = ({}) => {



  const totalPoint= 15000;
  const plant_1 =true;
  const plant_2 =true;
  const plant_3 = false;
  const [point,setPoint] = useState(0);
 
  let plusEle = document.querySelector('#plus');
  const [isPressed,setIsPressed] = useState(false);
  
  // plusEle.addEventListener('mouseup', function(event) {
  //   setIsPressed(false);
  // });
  
  // plusEle.addEventListener('mousedown', function(event) {
  //   setIsPressed(true);
  //   setPoint(point+100);
  // });
  
  
 

  return (
    <FlowerpotsBlock>
      <HeaderBlock>
      <TotalPoint >총 보유 포인트: {totalPoint}</TotalPoint>
      <PlantDeleteBtn  src={ process.env.PUBLIC_URL + "/delete-plant-icon.png" }/>
      <PointUsingBtn src={ process.env.PUBLIC_URL + "/watering-icon.png" }/>
      </HeaderBlock>
 
      <FlowerpotsWrapperBlock>

      
        <FlowerTotalBlock  totalPoint={totalPoint} point={point}/>
      
      {plant_2?
        <FlowerTotalBlock  totalPoint={totalPoint} point={point}/>:  <NoFlowerTotalBlock cnt={1}/>
      }
      {plant_3?
        <FlowerTotalBlock  totalPoint={totalPoint} point={point}/>:  <NoFlowerTotalBlock cnt={2}/>
      }
      
      </FlowerpotsWrapperBlock>
      
    </FlowerpotsBlock>
  );
};

export default Garden;
