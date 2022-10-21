
import React, { useState } from 'react';
import styled from 'styled-components';
import PlantModalContainer from '../../containers/garden/FlowerModalContainer';

const PlantImage = styled.img`
position:absolute;
width: 95%;
height:100%;
z-index:-1;
-webkit-user-drag: none;
@media(max-width:1000px){
   
}
`
//
const GroundImage = styled.img`
-webkit-user-drag: none;
z-index:-2;
width: 100%;
height: 2.625rem;
margin-top:auto;
@media(max-width:1000px){


}
`
const PlantItemBlock = styled.div`
position:relative;
display:flex;
width: 7rem;
height:9rem; 


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
 
}
`
const FlowerGardenItem =({plant, marginTop,marginLeft})=>{
    const [flowerModal, setFlowerModal] = useState(false);
    
    const onCancel = () => {
        setFlowerModal(false);
    }
    const onClickItem =()=>{
        setFlowerModal(true);
    }
    return(
      <>
      <PlantItemBlock marginTop={marginTop} marginLeft ={marginLeft} onClick={onClickItem}>
      {plant&&<PlantImage src={ process.env.PUBLIC_URL + "/plant_img/"+plant.plant_img_path+".gif" }/>}
      <GroundImage src={ process.env.PUBLIC_URL + "/ground.png" }/>
      </PlantItemBlock>
      <PlantModalContainer
      plant={plant}
      visible={flowerModal}
      onCancel={onCancel}
      />
      </>
    )
  }

export default FlowerGardenItem;