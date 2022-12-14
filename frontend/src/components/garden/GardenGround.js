import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import FlowerItemContainer from '../../containers/garden/FlowerItemContainer';
import Responsive from '../common/Responsive';

import FlowerItem from './FlowerItem';

const GroundBlock = styled.div`
  
    display: flex;
    border:2px solid;
    flex-direction: row;
    width:90%;
    height:18rem;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:1rem;
    
    
`


const GardenGround = ({user,completePlant, error ,loading}) => {
    
    return (
      <GroundBlock>
         {/* {!loadingComplete&&completePlant&&completePlant.map((plant,idx)=><FlowerItemContainer plant={plant} 
          marginTop={idx} />)} */}
         
          {!loading&&completePlant&&<>
          <FlowerItemContainer user={user} plant={completePlant[0]} marginTop={0} marginLeft={4} />
          <FlowerItemContainer user={user} plant={completePlant[1]} marginTop={1} marginLeft={-2.5} />
          <FlowerItemContainer user={user} plant={completePlant[2]} marginTop={2} marginLeft={-2.5} />
          <FlowerItemContainer user={user} plant={completePlant[3]} marginTop={1} marginLeft={1.5} />
          <FlowerItemContainer user={user} plant={completePlant[4]} marginTop={2} marginLeft={-2.5} />
          <FlowerItemContainer user={user} plant={completePlant[5]} marginTop={3} marginLeft={-2.5} />
          <FlowerItemContainer user={user} plant={completePlant[6]} marginTop={2} marginLeft={1.5} />
          <FlowerItemContainer user={user} plant={completePlant[7]} marginTop={3} marginLeft={-2.5} />
          <FlowerItemContainer user={user} plant={completePlant[8]} marginTop={4} marginLeft={-2.5} />
          </>
          }
      </GroundBlock>
    );
};

export default GardenGround;