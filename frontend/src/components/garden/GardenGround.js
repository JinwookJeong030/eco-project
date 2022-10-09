import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const GroundTotal = styled(Responsive)`
    display: flex;
    flex-direction: row;
    width:100%;
    padding:0;
    margin-left:auto;
    margin-right:auto;
`

const GroundLeft = styled.div`
  margin-left:0;
  border-right: 32vw solid #c68e17;
  border-top: 10vw solid transparent;
  border-bottom: 10vw solid transparent;
  @media(min-width: 1200px){
    border-right: 28rem solid #c68e17;
    border-top: 8rem solid transparent;
    border-bottom: 8rem solid transparent;
  }
 

`
const GroundRight = styled.div`
margin-left:0;
  border-left: 32vw solid #c68e17;
  border-top: 10vw solid transparent;
  border-bottom: 10vw solid transparent;
  @media(min-width: 1200px){
    border-left: 28rem solid #c68e17;
    border-top: 8rem solid transparent;
    border-bottom: 8rem solid transparent;
  }

`
const GardenGround = () => {
    return (
        <GroundTotal>
            <GroundLeft/>
            <GroundRight/>
        </GroundTotal>
    );
};

export default GardenGround;