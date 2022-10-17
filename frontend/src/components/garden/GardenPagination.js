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

const buildLink = ({page,search_type,search_contents})=>{

    return; 
}
   


const GardenPagination = ({page,search_type,search_contents, lastPage}) => {
    return (
        <PaginationBlock>
        <Button disabled={page === 1} to={page===1? undefined: buildLink({page:page - 1, search_type,search_contents})}>
            &lt;
        </Button>
        <PageNumber>{page}</PageNumber>
        <Button disabled={(lastPage===0)||page === lastPage} to={(lastPage===0)||page===lastPage? undefined: buildLink({page:page + 1,search_type,search_contents})}>
            &gt;
        </Button>
    </PaginationBlock>
    );
};

export default GardenPagination;