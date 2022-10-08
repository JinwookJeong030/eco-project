import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import styled,{css} from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import { WhitePostsItemBox } from '../common/WhiteBox';

const borderNone = css`
${(props)=>
    props.borderNone && css`
    border-width: 1px 1px 1px 1px;
    border-color: black black white;
    box-shadow: 2px 0px 1px rgba(10, 10, 10, 0);
 
    `

}
`

const CommuOtherMenuBlock = styled(Responsive)` 
`;

const CommuMenuItemsBlock = styled.div`
 display: flex;
 flex-direction: row;
`
const CommuMenuItemBlock = styled.div`
border: thin solid;
border-radius: 10px 10px 0  0;
width:15rem;
text-align:center;
font-size:1.4rem;
@media (max-width: 800px) {
    font-size:3vw;  
}
padding-left:5px;
padding-right:5px;
margin-Top:1rem;
margin-bottom:0;
margin-right:1px;
box-shadow: 2px 1px 1px rgba(10, 10, 10, 0.6);
border-width: 1px 1px 0px px;
${borderNone}
`
const CommuMenuTemp = styled.div`
border: thin solid;
border-radius: 10px 10px 0  0;
width:80%;

border-width: 0px 0px 1px 0px;

`
const ContentsBlock  = styled.div`
border: thin solid;
border-width: 0px 1px 1px 1px;
padding-left:1.3rem;
padding-right:1.3rem;
padding-top:0.5rem;
padding-bottom:0.5rem;

`


const CommuMenuItem = ({selectReply, selectMember, selectStatistics, selectMenu})=>{

    return(<CommuMenuItemsBlock>
        <CommuMenuItemBlock onClick={selectReply} borderNone={selectMenu===0? 1:0}>모임 댓글</CommuMenuItemBlock>
        <CommuMenuItemBlock onClick={selectMember} borderNone={selectMenu===1? 1:0}>모임 멤버</CommuMenuItemBlock>
        <CommuMenuItemBlock onClick={selectStatistics} borderNone={selectMenu===2? 1:0}>모임 통계</CommuMenuItemBlock>
        <CommuMenuTemp/>

    </CommuMenuItemsBlock>)
}
const CommuOtherMenu = ({children, selectMenu,selectReply,
    selectMember, selectStatistics,
     loading, error}) => {

    return (
        <CommuOtherMenuBlock>
       
            <CommuMenuItem 
            selectMenu={selectMenu}
            selectReply={selectReply} 
            selectMember={selectMember} 
            selectStatistics={selectStatistics}/>
            <ContentsBlock>
                {children[selectMenu]}

           
            </ContentsBlock>
        </CommuOtherMenuBlock>
    );
};

export default CommuOtherMenu;