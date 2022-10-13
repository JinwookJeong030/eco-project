import styled from 'styled-components';
import Button from '../common/Button'
import Responsive from './Responsive';

const PaginationMiniBlock =styled(Responsive)`
 width:25%;
 display: flex;
 justify-content: space-between;
 margin-bottom: auto;
 margin-top:auto;
 font-weight:bold;
 margin-right:0;
 height:1.7rem;

`
const PageBtn = styled(Button)`
width:2.6rem;
height:2rem;

`

const PageNumber =styled.div`
margin-top:auto;
margin-bottom:auto;
`

const buildLink = ({page,search_type,search_contents})=>{

    return `/commu/list?page=${page}&search_type=${search_type}&search_contents=${search_contents}`;
}

const PaginationMini=({page,search_type,search_contents, lastPage})=>{
    
   
    return (
<PaginationMiniBlock>
    <PageBtn disabled={page === 1} to={page===1? undefined: buildLink({page:page - 1, search_type,search_contents})}>
        &lt;
    </PageBtn>
    <PageNumber>{page}</PageNumber>
    <PageBtn disabled={page === lastPage} to={page===lastPage? undefined: buildLink({page:page + 1,search_type,search_contents})}>
        &gt;
    </PageBtn>
</PaginationMiniBlock>

    )
}
export default PaginationMini;