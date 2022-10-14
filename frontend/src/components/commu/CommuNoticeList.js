import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import WhiteBox, { WhitePostsItemBox } from '../common/WhiteBox';



const CommuNoticeBlock = styled(WhiteBox)` 
width: 100%;
border:2px solid;
`;

const Title =styled.h2`
margin-bottom:0.5rem;
`
const NoticeItemBlock = styled(WhitePostsItemBox)`

`
const NoticeTitle = styled.div`
    margin:0.5rem;
    margin-left:1.5rem;
    
`
const Regdate = styled.div`
margin-left: auto;
margin-top:auto;
margin-bottom:auto;
margin-right:1rem;
color: ${palette.gray[6]};
font-size: 13px;
`
const CommuNoticeListItem = ({cn})=>{
    
    return (
    <Link to={'/commu/notice/'+cn.cn_id}>
    <NoticeItemBlock>  
        <NoticeTitle>{cn.cn_title}</NoticeTitle>
        <Regdate>{cn.cn_regdate}</Regdate>
    </NoticeItemBlock>
    </Link>
    )

}

const CommuNoticeList = ({cns, loading, error}) => {

    return (
        <CommuNoticeBlock>
        
            <Title>공지사항</Title>
            {!loading&&cns&&cns.map(cn=>(<CommuNoticeListItem cn={cn} key={cn.cn_id} paddingMinTop/>))}
       
        </CommuNoticeBlock>
    );
};

export default CommuNoticeList;