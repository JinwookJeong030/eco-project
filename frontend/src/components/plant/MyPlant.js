import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
const MyMissionBlock = styled(Responsive)`
  margin-top: 1rem;

  
`;

const MyMissionTemplateBlock = styled.div`
display: flex;
width: 50rem;
flex-direction: column;
margin-bottom:1.5rem;
border: thin solid ;
border-color: #424242;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);
`;
const Wrapper = styled(Responsive)`
margin-bottom: 3rem;

`

const Title = styled.h2`
  margin-bottom: 2rem;

`
const PlantBlock= styled.div`
border: solid thin;
width: 224px;
height: 288px;
padding-left: 15px;
padding-right: 15px;
margin-left:0.5rem;
margin-right:0.5rem;
`
const PlantImage =  styled.img`
width: 210px;
height: 288px;

`
const MissionWrapper = styled(Responsive)`
display: flex;
flex-wrap: wrap;
flex-direction: row; 
align-items: center;

`
const Plant=({src})=>{
  
  return <PlantBlock>
    <PlantImage src={src}/>
    
  </PlantBlock>

}
const MissionBlock =({error})=>{
  return(<>
    <MyMissionTemplateBlock>
      <Wrapper>
    <Title>식물</Title>
      <MissionWrapper>
    
      <Plant src={ process.env.PUBLIC_URL + "/pic.gif" }/>
      <Plant src={ process.env.PUBLIC_URL + "/pic.png" }/>
      <Plant src={ process.env.PUBLIC_URL  }/>
      </MissionWrapper>
      </Wrapper>
  </MyMissionTemplateBlock>
  </>
  )
};


const MyPlant = styled.img`
  width: 20rem;
  height: 20rem;
  border: solid thin;

`
const MyPlantText = styled.p`
  margin:5px;
`;
const MyPlantInfo=({name, level, point})=>{

  return<>
  <MyPlantText>이름: 사과나무 </MyPlantText>
  <MyPlantText>Level: 3</MyPlantText>
  <MyPlantText> 다음 레벨업에 필요한 point: 5/1500</MyPlantText>
  </>

}
const MyPlantInfoBlock=()=>{
return <>
  <Wrapper>
<MyPlant/>
<MyPlantInfo/>
</Wrapper>
</>
;

}
const MyPlantBlock =({error})=>{
  return(<>
    <MyMissionTemplateBlock>
      <Wrapper>
      <Title>가든</Title>
    
      <h3 Style="margin:15px; margin-bottom:0; color: red; font-size: 18px;">{error}</h3>
      <MyPlantInfoBlock/>
      
      </Wrapper>
  </MyMissionTemplateBlock>
  </>
  )
};

const MyMission = ({ children }) => {


  return (
    <>
    <MyMissionBlock>
 

    <MissionBlock/>
    <MyPlantBlock/>
    </MyMissionBlock>
    </>
  );
};

export default MyMission;
