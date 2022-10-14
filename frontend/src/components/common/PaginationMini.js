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
 @media (max-width: 768px) {
    width: 100%;
  }
`
const PageBtn = styled(Button)`
width:2.6rem;
height:2rem;

`

const PageNumber =styled.div`
margin-top:auto;
margin-bottom:auto;
`



const PaginationMini=({page, lastPage,search_type,search_contents, downPaging, upPaging})=>{
  
    return (
<PaginationMiniBlock>
    <PageBtn disabled={page === 1} onClick={downPaging}>
        &lt;
    </PageBtn>
    <PageNumber>{page}</PageNumber>
    <PageBtn disabled={page === lastPage} onClick={upPaging}>
        &gt;
    </PageBtn>
</PaginationMiniBlock>

    )
}
export default PaginationMini;