
import React from 'react';
import styled from 'styled-components';

const PlantItemBlock = styled.div`

height:4.5rem; 
width:12.65rem;

border: 2px solid;
margin-top: 0.3rem;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);

@media(max-width:1000px){
    width: 22vw;
    height:5rem; 
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

@media(max-width:768px){
  font-size:3vw;
}

`

const PlantTotalPointBlock = styled.div`

margin-top:0.3rem;
border: 2px solid;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);
` 

const PlantPointBackground = styled.div`

height:1.4rem;
width:%;
color:green;
background: repeating-linear-gradient( white,green);

@media(max-width:768px){
  font-size:3vw;
}
` 
const PlantPoint = ({totalPoint,point})=>{
  return(

  <PlantTotalPointBlock>
    <PlantPointBackground poin={point}>
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
      !plant?<>
        <PlantPoint totalPoint={totalPoint} point={point}/>
        {/* totalPoint={plant.plant_total_point} point={plant.point} */}
        <PlantItemBlock>
        <PlantName>해바라기</PlantName>
        <PlantLevel>Level: 1</PlantLevel>
        <PlantRegdate>시작 날짜: 22-01-02</PlantRegdate>
        </PlantItemBlock>
      </>:<></>
    )
  }

export default FlowerItemInfo;