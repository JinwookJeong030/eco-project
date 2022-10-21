import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import WhiteBox from '../common/WhiteBox';
import FlowerItem from './FlowerItem';
import FlowerItemInfo from './FlowerItemInfo';
import { useEffect, useState } from 'react';
import AskModal from '../common/AskModal';
import AskRemoveModal from '../post/AskRemoveModal';





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

const FlowerpotItem = ({imgPath})=>{

  return(
    <FlowerPotBlock>
      <FlowerItem imgPath={imgPath}/>
    </FlowerPotBlock>

  )
}

const FlowerTotalBlock = ({onClickItem, growPlant})=>{
 
return( <>
<FlowerpotInfoBlock  onClick ={onClickItem} id={"plus"} >
  <FlowerpotItem imgPath={growPlant.plant_img_path}/>
  <FlowerItemInfo plant={growPlant} totalPoint={growPlant.plant_total_point} point={growPlant.pt_point}/>
  </FlowerpotInfoBlock> 
  </>
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


const Garden = ({user, growPlant ,loadingGrow, error}) => {

  const [deleteFlowerPot, setDeleteFlowerPot]= useState(false);
  const [wateringFlowerPot, setWateringFlowerPot]= useState(false);

  const onClickInit = ()=>{
        setDeleteFlowerPot(false);
  }

  const onClickDelete = ()=>{
    setWateringFlowerPot(false);
    setDeleteFlowerPot(!deleteFlowerPot);
  }
  const onClickWatering = ()=>{
    setDeleteFlowerPot(false);
    setWateringFlowerPot(!wateringFlowerPot);
  }
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
  const [flowerModal, setFlowerModal] = useState(false);
  const [flowerSuccessModal, setFlowerSuccessModal] = useState(false);
  const onCancel = () => {
      setFlowerModal(false);
      setDeleteFlowerPot(false);
  }
  const onClickItem =()=>{
    if(deleteFlowerPot){
      setFlowerModal(true);
    }
    }
  return (
<>
    <FlowerpotsBlock  DeleteFlowerPot={deleteFlowerPot} WateringFlowerPot={wateringFlowerPot}>

     
        {user&&growPlant&&(user.user_id ===growPlant[0].pt_id)? <HeaderBlock>
      <TotalPoint >총 보유 포인트: {user.user_total_point}</TotalPoint>
      <PlantDeleteBtn onClick={onClickDelete}  src={ process.env.PUBLIC_URL + "/delete-plant-icon.png" }/>
      <PointUsingBtn onClick={onClickWatering} src={ process.env.PUBLIC_URL + "/watering-icon.png" }/>
      </HeaderBlock>:<></>}
   
 {growPlant&&(growPlant.length>=1)?
      <FlowerpotsWrapperBlock>
      
        <FlowerTotalBlock onClickItem={onClickItem}  growPlant={growPlant[0]}/>
      
      {(growPlant.length>=2)?
        <FlowerTotalBlock onClickItem={onClickItem}  growPlant={growPlant[1]}/>:  <NoFlowerTotalBlock cnt={1}/>
      }
      {(growPlant.length>=3)?
        <FlowerTotalBlock onClickItem={onClickItem}  growPlant={growPlant[2]}/>:  <NoFlowerTotalBlock cnt={2}/>
      }
      
      </FlowerpotsWrapperBlock>:(user?<>없는 사용자 입니다...</>:<>로그인하여 식물을 키워보세요!</>)
    }
    </FlowerpotsBlock>
    {deleteFlowerPot&&<AskRemoveModal
       title={"다시 키우기"}
       discription={"정말 다른 식물을 키우시겠습니까?"}
      visible={flowerModal}
      confirmText = '확인'
      onCancel={onCancel}
      />}
    <AskModal
       title={"새로운 씨앗!"}
       discription={"새로운 씨앗이 지급되었습니다."}
      visible={flowerSuccessModal}
      confirmText = '확인'
      onCancel={onCancel}
      />
    </>
  );
};

export default Garden;
