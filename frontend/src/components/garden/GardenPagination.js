import React from 'react';

import styled from 'styled-components';
import Button from '../common/Button'
import Responsive from '../common/Responsive';

const PaginationBlock =styled(Responsive)`
 width:100%;
 display: flex;
 justify-content: space-between;
 margin-right:auto;
 margin-bottom:1rem;
 font-weight:bold;

`

const PageNumber =styled.div`
margin-top:auto;
margin-bottom:auto;
`

const buildLink = ({user_id,page})=>{

    return `/garden/${user_id}/${page}`;

}
   


const GardenPagination = ({user_id,page,lastPage}) => {

    return (
        <PaginationBlock>
        <Button disabled={page === 1} to={buildLink({user_id,page:page - 1})}>
            &lt;
        </Button>
        <PageNumber>{page} 페이지</PageNumber>
        <Button disabled={(lastPage===0)||page === lastPage} to={(lastPage===0)||page===lastPage? undefined: buildLink({user_id,page:page + 1})}>
            &gt;
        </Button>
    </PaginationBlock>
    );
};

export default GardenPagination;