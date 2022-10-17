
import React from 'react';
import styled from 'styled-components';

const PlantImage = styled.img`
position:absolute;
width: 10.5rem;
height:13.5rem;
z-index:-1;
margin-left:1rem;
margin-top:1.5rem;
@media(max-width:1000px){
    width: 20%;
    height:25vw; 
    margin-left:0.5vw;
    margin-top:0;
}

`
//
const GroundImage = styled.img`

z-index:-2;
width: 100%;
height: 2.625rem;
margin-top:auto;
@media(max-width:1000px){
    width: 21vw;
    height:7vw; 
}
`
const PlantItemBlock = styled.div`
border:2px solid;
display:flex;
height:14.7rem; 
width:12.65rem;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);
width:100%;
margin-top: calc(1.85rem * ${props => props.marginTop});
margin-left: calc(4.825rem * ${props => props.marginLeft});
&:hover{
  opacity: 0.7;
  z-index:5;
}
&:active{
  opacity: 0.9;
  z-index:5;
}
@media(max-width:1000px){
    width: 100%;
    height:25vw; 
}
`
const FlowerItem =({marginTop,marginLeft})=>{

    return(
      
      <PlantItemBlock marginTop={marginTop} marginLeft ={marginLeft} >
      <PlantImage src={ process.env.PUBLIC_URL + "/plant_img/sunflower.png" }/>
      <GroundImage src={ process.env.PUBLIC_URL + "/ground.png" }/>
      </PlantItemBlock>
  
    )
  }

export default FlowerItem;