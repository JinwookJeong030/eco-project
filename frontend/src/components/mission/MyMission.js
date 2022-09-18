import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Responsive from '../common/ResponsiveHeader';
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
margin-left:1rem;
`

const Title = styled.h2`
  margin-bottom: 2rem;

`
const MissionInfoBlock= styled.div`
border: solid thin;
width: 12rem;
height: 12rem;
padding-left: 15px;
padding-right: 15px;
margin-left:1.5rem;
margin-right:1.5rem;
`
const MissionWrapper = styled(Responsive)`
display: flex;
flex-wrap: wrap;
flex-direction: row; 
align-items: center;

`
const MisssionInfo=({})=>{
  
  return <MissionInfoBlock>
    <h2>미션 명</h2>
    <b>미션내용</b>
  </MissionInfoBlock>

}
const MissionBlock =({error})=>{
  return(<>
    <MyMissionTemplateBlock>
      <Wrapper>
    <Title>미션</Title>
      <MissionWrapper>
    
      <MisssionInfo/>
      <MisssionInfo/>
      <MisssionInfo/>
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
<MyPlant src={ process.env.PUBLIC_URL + "/pic0.png" }/>
<MyPlantInfo/>
</Wrapper>
</>
;

}
const MyPlantBlock =({error})=>{
  return(<>
    <MyMissionTemplateBlock>
      <Wrapper>
      <Title>나의 식물</Title>
    
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
