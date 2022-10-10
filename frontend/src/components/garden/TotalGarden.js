import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import WhiteBox from '../common/WhiteBox';
import GardenGround from './GardenGround';



const TotalGardenBlock = styled(WhiteBox)`
display: flex;
border: thin solid ;
border-width: 2px;
border-color: #424242;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);
margin-top:0.5rem;
margin-bottom:0.5rem;


`
const TotalGardenInfoBlock = styled.div`
  display:flex;
  flex-direction:column;
  width: 80.5%;
  height: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right:1rem;
  padding-left:1rem;

`;
const GardenItemBlock =styled(GardenGround)`
width: 2rem;
`

const TotalGarden = () => {


  return (
    <TotalGardenBlock>
      <TotalGardenInfoBlock>
        <GardenGround/>
        {/* <GardenItemBlock Item/> */}
 
      </TotalGardenInfoBlock>
    </TotalGardenBlock>
  );
};

export default TotalGarden;
