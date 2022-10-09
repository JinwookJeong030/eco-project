import styled from 'styled-components';
import qs from 'qs';
import Button from '../common/Button'
import Responsive from './Responsive';

const PaginationBlock =styled(Responsive)`
 width:320px;
 margin: 0 , auto;
 display: flex;
 justify-content: space-between;
 margin-bottom: 3rem;
`
const PageNumber =styled.div``

const buildLink = ({page,search_type,search_contents})=>{

    return `/post/list?page=${page}&search_type=${search_type}&search_contents=${search_contents}`;
}

const Pagination=({page,search_type,search_contents, lastPage})=>{
    
    console.log(page)
    console.log()
    return (
<PaginationBlock>
    <Button disabled={page === 1} to={page===1? undefined: buildLink({page:page - 1, search_type,search_contents})}>
        이전
    </Button>
    <PageNumber>{page}</PageNumber>
    <Button disabled={page === lastPage} to={page===lastPage? undefined: buildLink({page:page + 1,search_type,search_contents})}>
        다음
    </Button>
</PaginationBlock>

    )
}
export default Pagination;