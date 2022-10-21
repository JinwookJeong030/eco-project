
import React from 'react';
import styled from 'styled-components';

const PlantItemBlock = styled.div`

height:4.2rem; 
width:12.65rem;

border: 2px solid;
margin-top: 0.3rem;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);

@media(max-width:1000px){
    width: 22vw;
    
  }
`
const PlantName = styled.div`
  font-weight:bold;
  text-align:center;
  @media(max-width:768px){
    font-size:3vw;
  }
`
const PlantLevel = styled.div`
margin-left:2px;
@media(max-width:768px){
  font-size:2vw;
}

`

const PlantTotalPointBlock = styled.div`

margin-top:0.3rem;
border: 2px solid;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);
` 

const PlantPointBackground = styled.div`

height:1.4rem;
width: ${props => props.point/props.totalPoint*100}%;
color:green;
background: repeating-linear-gradient( white,green);

@media(max-width:768px){
  font-size:2.5vw;
}
` 
const PlantPoint = ({totalPoint,point})=>{
  return(

  <PlantTotalPointBlock>
    <PlantPointBackground point={point} totalPoint={totalPoint}>
    {point}/{totalPoint}
    </PlantPointBackground>
  </PlantTotalPointBlock>
  )
  
}
const PlantRegdate = styled.div`
@media(max-width:768px){
  font-size:2vw;
}
`
const FlowerItemInfo =({plant, point, totalPoint})=>{

    return(
      plant?<>
        <PlantPoint totalPoint={totalPoint} point={point}/>
        <PlantItemBlock>
        <PlantName>{plant.plant_name}</PlantName>
        <PlantLevel>Level: {plant.plant_level}</PlantLevel>
        <PlantRegdate>시작날짜: {new Date(plant.pt_regdate).toLocaleDateString()}</PlantRegdate>
        </PlantItemBlock>
      </>:<></>
    )
  }

export default FlowerItemInfo;