import React, { Children } from 'react';
import styled from 'styled-components';


const PodiumBlock =styled.div`
position:relative;
margin-bottom:4rem;

width: 100%;

@media (min-width: 900px) {
   
    width: 80%;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:5rem;
   }
`

const RankingItems = styled.div`
display:flex;
flex-direction:row;

`
const FirstItem = styled.div`
margin-left:auto;
margin-right:auto;


`
const SecondItem = styled.div`

margin-top:1rem;

`
const ThirdItem = styled.div`

margin-top:1rem;


`
const PodiumImg = styled.img`
position:absolute;
top:12.5rem;
width:100%;

height:5rem;
@media (min-width: 900px) {
    top:18.5rem;
    right:0rem;
    height:7rem;
   }

`

const Podium = ({children}) => {
    return (
        <PodiumBlock>
            <RankingItems>
            <SecondItem>{children[1]}</SecondItem>
            <FirstItem>{children[0]}</FirstItem>
            <ThirdItem>{children[2]}</ThirdItem>
            </RankingItems>
            <PodiumImg src={process.env.PUBLIC_URL + "/podium.png"}/>
        </PodiumBlock>
    );
};

export default Podium;