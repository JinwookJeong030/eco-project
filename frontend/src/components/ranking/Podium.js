import React, { Children } from 'react';
import styled from 'styled-components';


const PodiumBlock =styled.div`
margin-left:auto;
margin-right:auto;
width: 100%;
@media (min-width: 1024px) {
   
    width: 85%;
    
    margin-left:auto;
    margin-right:auto;
    margin-bottom:2rem;
   }
`
const TopDiv = styled.div`
height:0rem;
width:34.2%;
margin-left:auto;
margin-right:auto;
border: thin solid;
border-width:0px 0px 2px 0px;
`

const SecondDivBlock = styled.div`
 display:flex;
 flex-direction:row;
`
const FirstElement = styled.div`
height:2rem;
width:33%;
margin-right:auto;
border: thin solid;
border-width:0px 2px 2px 0px;`
const SecondElement = styled.div`
height:2rem;
width:33%;
margin-left:auto;
border: thin solid;
border-width:0px 0px 2px 2px;`
const RankingItems = styled.div`
display:flex;
flex-direction:row;
`
const FirstItem = styled.div`
margin-left:auto;
margin-right:auto;


`
const SecondItem = styled.div`
margin-left:3rem;
margin-right:auto;
margin-top:1rem;
@media (max-width: 1024px) {
    margin-left:0rem;
    margin-right:1rem;
   }
`
const ThirdItem = styled.div`
margin-left:auto;
margin-right:3rem;
margin-top:1rem;
@media (max-width: 1024px) {
    margin-left:1rem;
    margin-right:0rem;
   }
`


const SecondDiv =() =>{

    return(
        <SecondDivBlock>
            <FirstElement/>
            <SecondElement/>
        </SecondDivBlock>

    )
}

const BottomDiv = styled.div`
height:2rem;
border: thin solid;
border-width:0px 2px 2px 2px;
`

const Podium = ({children}) => {
    return (
        <PodiumBlock>
            <RankingItems>
            <SecondItem>{children[1]}</SecondItem>
            <FirstItem>{children[0]}</FirstItem>
            <ThirdItem>{children[2]}</ThirdItem>
            </RankingItems>
          
            <TopDiv/>
            <SecondDiv/>
            <BottomDiv/>
        </PodiumBlock>
    );
};

export default Podium;