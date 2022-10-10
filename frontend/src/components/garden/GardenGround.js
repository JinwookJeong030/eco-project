import React from 'react';
import styled, { css } from 'styled-components';
import Responsive from '../common/Responsive';

const GroundTotal = styled.div`
  
    display: flex;
    flex-direction: row;
    width:43.2rem;
    height:13.5rem;
    padding:0;
    margin-left:auto;
    margin-right:auto;
    
`

const PlantItemBlock = styled.div`
position:fixed;
display:flex;
height:9.2rem; 
width:9.55rem;

z-index:0;
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

`
const PlantImage = styled.img`
position:fixed;
width: 7rem;
height:9rem;
z-index:3;
margin-left:1.2rem;
margin-top:0;



`
const GroundImage = styled.img`v
position:fixed;
z-index:2;
width: 9.6rem;
height: 2.8rem;
margin-top:6.3rem;

`
const PlantItemImage =({marginTop,marginLeft})=>{
  const arrayNum = [{
    marginTop: 0,
    marginLeft: 0},
    [0,0]]

  return(
    
    <PlantItemBlock marginTop={marginTop} marginLeft ={marginLeft} >
    <PlantImage src={ process.env.PUBLIC_URL + "/plant_img/sunflower.png" }/>
    <GroundImage src={ process.env.PUBLIC_URL + "/ground.png" }/>
    </PlantItemBlock>

  )
}

const GardenGround = ({ ...props}) => {
  
    return (
      <GroundTotal>
         <PlantItemImage
       marginTop={0}
       marginLeft={0}
       />
         <PlantItemImage
       marginTop={-1}
       marginLeft={1}
       />
        <PlantItemImage
       marginTop={1}
       marginLeft={1}
       />
          <PlantItemImage
       marginTop={-2}
       marginLeft={2}
       />
        <PlantItemImage
       marginTop={0}
       marginLeft={2}
       />
        <PlantItemImage
       marginTop={2}
       marginLeft={2}
       />
        <PlantItemImage
       marginTop={-1}
       marginLeft={3}
       />
        <PlantItemImage
       marginTop={1}
       marginLeft={3}
       />
         <PlantItemImage
       marginTop={0}
       marginLeft={4}
       />
      
      
       
      </GroundTotal>
    );
};

export default GardenGround;