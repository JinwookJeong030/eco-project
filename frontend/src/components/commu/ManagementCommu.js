import React from 'react';
import styled from 'styled-components';
import WhiteBox from '../common/WhiteBox';

const ManagementCommuBlock = styled(WhiteBox)`
`
const Title = styled.div`
font-size:1.5rem;
font-width: 2rem;
`
const ItemBlock = styled(WhiteBox)`

`;

const InviteItems =()=>{
    return (<ItemBlock>

    </ItemBlock>)
}
const Items =()=>{
    return (<ItemBlock>
        dd
        </ItemBlock>)
    
}
const ManagementCommu = ({applys, loading}) => {
    return (
        <>
        <ManagementCommuBlock>
        <Title>가입 관리</Title>
        {!loading&&applys&&(applys.map((apply)=>(<ItemBlock key={apply.apply_id}/>)))}
        </ManagementCommuBlock>
        <ManagementCommuBlock>
        <Title>모임 관리</Title>
        </ManagementCommuBlock>
        </>
    );
};

export default ManagementCommu;