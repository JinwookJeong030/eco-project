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


const GardenGround = ({ ...props}) => {
  


    return (
      <GroundBlock>
         <FlowerItemContainer
       marginTop={1}
       marginLeft={1}
       />
         <FlowerItemContainer
       marginTop={0}
       marginLeft={0}
       />
           <FlowerItemContainer
       marginTop={0}
       marginLeft={0}
       />
           <FlowerItemContainer
       marginTop={0}
       marginLeft={0}
       />
     

      </GroundBlock>
    );
};

export default GardenGround;