import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";
import FlowerGardenItem from "./FlowerGardenItem";

const Fullscreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlantModalBlock = styled.div`
  width: 340px;
  background: white;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledButton = styled(Button)`
  height: 2rem;
  & + & {
    margin-left: 0.75rem;
  }
`;


const Contents =styled.div`
margin-top:1rem;
font-size: 1.2rem;
text-align:center;

`
const PlantImage = styled.img`
position:absolute;
width: 95%;
height:100%;
z-index:32;
-webkit-user-drag: none;
@media(max-width:1000px){
   
}
`

const PlantItemBlock = styled.div`
position:relative;
display:flex;
width: 10.5rem;
height:13.5rem; 
border:2px solid;
margin-left:auto;
margin-right:auto;

@media(max-width:1000px){
 
}
`
const PlantName =styled.div`
margin-top:0.5rem;
margin-bottom:0.5rem;
font-weight: bold;
`
const PlantContents =styled.div`
`
const PlantInfoBlock = styled.div`
margin-bottom:1rem;
`
const LeaderPlantBtn = styled(Button)`
margin-left:auto;
margin-right:auto;
width:100%;
height:3rem;
font-size:1.1rem;
`
const PlantInfo = ({plant})=>{
    return (
        <PlantInfoBlock>
          <PlantName>{plant.plant_name}</PlantName>  
        <PlantContents>시작 일자: {new Date(plant.pt_regdate).toLocaleDateString()}</PlantContents>
        <PlantContents>완료 일자: {new Date(plant.pt_complete_date).toLocaleDateString()}</PlantContents>
        </PlantInfoBlock>
    )
}

const FlowerModal = ({
  visible,
  cancelText ,
  onCancel,
    plant
}) => {


  if (!visible) return null;

  return (
    <Fullscreen>
      <PlantModalBlock>
      <div className="buttons">
          {cancelText&&<StyledButton onClick={onCancel}>{cancelText}</StyledButton>}
        </div>
       
        <Contents>
        <PlantItemBlock>
        <PlantImage src={ process.env.PUBLIC_URL + "/plant_img/"+plant.plant_img_path+".gif" }/>
        </PlantItemBlock>
        <PlantInfo plant={plant}/>
        </Contents>
        <LeaderPlantBtn cyan>대표 식물로 선정하기</LeaderPlantBtn>
    
      </PlantModalBlock>
    </Fullscreen>
  );
};

export default FlowerModal;