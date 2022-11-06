import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Responsive from '../common/Responsive';

import WhiteBox from '../common/WhiteBox';
import GardenGround from './GardenGround';
import GardenPaginationContainer from '../../containers/garden/GardenPaginationContainer';



const TotalGardenBlock = styled(WhiteBox)`
display: flex;
border: thin solid ;
border-width: 2px;
border-color: #424242;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);
margin-top:0.5rem;
margin-bottom:0.5rem;


`


const Garden = ({user,completePlant, error ,loadingComplete}) => {


  return (
    <TotalGardenBlock>
        <GardenGround user={user} completePlant={completePlant} error={error} loadingComplete={loadingComplete}/>
        <GardenPaginationContainer/>
    </TotalGardenBlock>
  );
};

export default Garden;
