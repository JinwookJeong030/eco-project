import styled from 'styled-components';
import Button from '../common/Button'
import Responsive from './Responsive';

const PaginationBlock =styled(Responsive)`
 width:50%;
 display: flex;
 justify-content: space-between;
 margin-bottom: auto;
 margin-top:0.8rem;
 font-weight:bold;

`

const PageNumber =styled.div`
margin-top:auto;
margin-bottom:auto;
`

const buildLink = ({page,search_type,search_contents})=>{

    return `/post/list?page=${page}&search_type=${search_type}&search_contents=${search_contents}`;
}

const Pagination=({page,search_type,search_contents, lastPage})=>{
    
   
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

    )
}
export default Pagination;