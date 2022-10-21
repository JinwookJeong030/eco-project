import React from 'react';
import styled, { css } from 'styled-components';
import FlowerItemContainer from '../../containers/garden/FlowerItemContainer';
import Responsive from '../common/Responsive';

import FlowerItem from './FlowerItem';

const GroundBlock = styled.div`
  
    display: flex;
    border:2px solid;
    flex-direction: row;
    width:100%;
    height:30rem;
    margin-left:auto;
    margin-right:auto;
    
    
`


const GardenGround = ({user,completePlant, error ,loadingComplete}) => {
  

    return (
      <GroundBlock>
         {!loadingComplete&&completePlant&&completePlant.map(plant=><FlowerItemContainer plant={plant}/>)}
      </GroundBlock>
    );
};

export default GardenGround;