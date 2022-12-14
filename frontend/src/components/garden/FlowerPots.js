import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link, useLocation } from 'react-router-dom';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import WhiteBox from '../common/WhiteBox';
import FlowerItem from './FlowerItem';
import FlowerItemInfo from './FlowerItemInfo';
import { useEffect, useRef, useState } from 'react';
import AskModal from '../common/AskModal';
import AskRemoveModal from '../post/AskRemoveModal';
import { useDispatch } from 'react-redux';
import { readCompletePlant, readGrowPlant, unloadPlant } from '../../modules/plant';
import { check } from '../../modules/user';





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
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
const FlowerpotItem = ({imgPath})=>{

  return(
    <FlowerPotBlock>
      <FlowerItem imgPath={imgPath}/>
    </FlowerPotBlock>

  )
}

const FlowerTotalBlock = ({onClickItem,onMouseDownItem,onMouseUpItem, growPlant , point})=>{
 
return( <>
<FlowerpotInfoBlock onClick={onClickItem} onTouchStart={onMouseDownItem} onTouchEnd={onMouseDownItem}  onMouseDown ={onMouseDownItem} onMouseUp= {onMouseUpItem} id={"plus"} >
  <FlowerpotItem imgPath={growPlant.plant_img_path}/>
  <FlowerItemInfo plant={growPlant} totalPoint={growPlant.plant_total_point} point={growPlant.pt_point + point}/>
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
     <br/>?????? {cnt}?????? ?????? ?????? ???<br/>???????????????.
    </NoFlowerItemInfo>
    </FlowerpotInfoBlock>
  )
    
  }
const Title = styled.div`
font-size:1.3rem;
font-weight:bold;
margin-bottom:1rem;
`
const NoTitle = styled.div`
margin-left: auto;
margin-right:auto;
color: ${palette.green[0]};
font-size:2rem;
font-weight:bold;
margin-top:3rem;
margin-bottom:3rem;
`

const Garden = ({user, growPlant, plantPoint,selectPlant, loadingGrow, 
  error,onClickWateringItem, onDeletePlant,
  onSubmitPoint}) => {

  const location = useLocation();
  const dispatch = useDispatch();
  const [point,setPoint] = useState(0);
  const [deleteFlowerPot, setDeleteFlowerPot]= useState(false);
  const [wateringFlowerPot, setWateringFlowerPot]= useState(false);
  const [flowerModal, setFlowerModal] = useState(false);
  const [flowerSuccessModal, setFlowerSuccessModal] = useState(false);
  const onClickInit = ()=>{
        setDeleteFlowerPot(false);
  }
  const onClickSubmitDelete=()=>{
    onDeletePlant();
    setFlowerModal(false);
    setFlowerSuccessModal(true);
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

  const [isPressed,setIsPressed] = useState(false);
  useInterval(() => {   
    
    if(isPressed&&(growPlant[selectPlant-1].plant_total_point>point+growPlant[selectPlant-1].pt_point)&&user.user_point-point>0){
    setPoint(point + 1);
  }
 
  }, 0.5);



  const onCancel = () => {
      setFlowerModal(false);
      setDeleteFlowerPot(false);
      setFlowerSuccessModal(false);
  }
  const onRefresh = ()=>{
    window.location.replace(location.pathname);
  }
  const onClickItem = (selectPlant)=>{
    if(deleteFlowerPot){
      onClickWateringItem(selectPlant);
      setFlowerModal(true);
    }
  }
  ??
  const onMouseDownItem =(selectPlant)=>{
    if(wateringFlowerPot&&user.user_point>0){
      onClickWateringItem(selectPlant);
      setIsPressed(true); 

    }
    if(point+growPlant[selectPlant-1].pt_point>=growPlant[selectPlant-1].plant_total_point){
      setIsPressed(false); 
      onSubmitPoint(growPlant[selectPlant-1].plant_total_point);
      dispatch(readGrowPlant(user.user_id||0));
      dispatch(readCompletePlant({user_id:user.user_id,page:1}));
   
    }

  }
  const onMouseUpItem =(selectPlant)=>{
    setIsPressed(false);
    if(wateringFlowerPot){
      onClickWateringItem(selectPlant);
      onSubmitPoint(point);
      

    if(point+growPlant[selectPlant-1].pt_point>=growPlant[selectPlant-1].plant_total_point){
        setIsPressed(false); 
       
        setTimeout(function() {
          dispatch(readGrowPlant(user.user_id||0));
          dispatch(readCompletePlant({user_id:user.user_id,page:1}));
          setPoint(0);
          dispatch(check())
        }, 300);
    }
    else{
      setIsPressed(false); 
      setTimeout(function() {
        setPoint(0);
      dispatch(readGrowPlant(user.user_id||0));
      dispatch(check())
      }, 300);
      
    }

  
    
    }
  }
  

  return (
<>
    <FlowerpotsBlock  DeleteFlowerPot={deleteFlowerPot} WateringFlowerPot={wateringFlowerPot}>

    
        {user&&growPlant&&((user.user_id ===growPlant[0].pt_user)? <>
        <Title>??????</Title>   
        <HeaderBlock>
  
        <TotalPoint >??? ?????? ?????????: {user.user_point - point}</TotalPoint>
        <PlantDeleteBtn onClick={onClickDelete}  src={ process.env.PUBLIC_URL + "/delete-plant-icon.png" }/>
        <PointUsingBtn onClick={onClickWatering} src={ process.env.PUBLIC_URL + "/watering-icon.png" }/>
      </HeaderBlock></>:<></>)}
   
 {growPlant&&(growPlant.length>=1)?
      <FlowerpotsWrapperBlock>
        <FlowerTotalBlock onClickItem={()=>onClickItem(1)} onMouseDownItem={()=>onMouseDownItem(1)} onMouseUpItem={()=>onMouseUpItem(1)}  growPlant={growPlant[0]} point={selectPlant===1?point:0}/>
      
      {(growPlant.length>=2)?
        <FlowerTotalBlock onClickItem={()=>onClickItem(2)} onMouseDownItem={()=>onMouseDownItem(2)} onMouseUpItem={()=>onMouseUpItem(2)}  growPlant={growPlant[1]} point={selectPlant===2?point:0}/>:  <NoFlowerTotalBlock cnt={1}/>
      }
      {(growPlant.length>=3)?
        <FlowerTotalBlock onClickItem={()=>onClickItem(3)} onMouseDownItem={()=>onMouseDownItem(3)} onMouseUpItem={()=>onMouseUpItem(3)}  growPlant={growPlant[2]} point={selectPlant===3?point:0}/>:  <NoFlowerTotalBlock cnt={2}/>
      }
      
      </FlowerpotsWrapperBlock>:(user?<NoTitle>?????? ????????? ?????????...</NoTitle>:<NoTitle>??????????????? ????????? ???????????????!</NoTitle>)
    }
    </FlowerpotsBlock>
    {deleteFlowerPot&&<AskRemoveModal
       title={"?????? ?????????"}
       discription={"?????? ?????? ????????? ??????????????????????"}
      visible={flowerModal}
      confirmText = '??????'
      onCancel={onCancel}
      onConfirm={onClickSubmitDelete}
      />}
    <AskModal
       title={"????????? ??????!"}
       discription={"????????? ????????? ?????????????????????."}
      visible={flowerSuccessModal}
      confirmText = '??????'
      onCancel={onCancel}
      onConfirm={onRefresh}
      />
    </>
  );
};

export default Garden;
