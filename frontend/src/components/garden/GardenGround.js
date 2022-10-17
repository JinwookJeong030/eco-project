import React from 'react';
import styled, { css } from 'styled-components';
import Responsive from '../common/Responsive';
import FlowerItem from './FlowerItem';

const GroundTotal = styled.div`
  
    display: flex;
    flex-direction: row;
    width:43.2rem;
    height:13.5rem;
    padding:0;
    margin-left:auto;
    margin-right:auto;
    
`


const GardenGround = ({ ...props}) => {
  
    return (
      <GroundTotal>
         <FlowerItem
       marginTop={0}
       marginLeft={0}
       />
         <FlowerItem
       marginTop={-1}
       marginLeft={1}
       />
        <FlowerItem
       marginTop={1}
       marginLeft={1}
       />
          <FlowerItem
       marginTop={-2}
       marginLeft={2}
       />
        <FlowerItem
       marginTop={0}
       marginLeft={2}
       />
        <FlowerItem
       marginTop={2}
       marginLeft={2}
       />
        <FlowerItem
       marginTop={-1}
       marginLeft={3}
       />
        <FlowerItem
       marginTop={1}
       marginLeft={3}
       />
         <FlowerItem
       marginTop={0}
       marginLeft={4}
       />
      
      
       
      </GroundTotal>
    );
};

export default GardenGround;