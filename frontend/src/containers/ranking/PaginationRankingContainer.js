import React, { useCallback } from'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../components/common/Pagination';
import PaginationMini from '../../components/common/PaginationMini';
import { changeField } from '../../modules/ranking';


const PaginationRankingContainer =() =>{

    const dispatch = useDispatch();
    const {page,lastPage,ranking, loading, error} = useSelector(({ranking,loading})=>
    ({
        page: ranking.rankingPage||1,
        lastPage: ranking.rankingLastPage,
        ranking: ranking.ranking,
        loading: loading['ranking/LIST_RANKING'],
        error: ranking.rankingError
    }));
    const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
    const downPaging  = () =>{
        if(!(page===1))
        onChangeField({ key: 'rankingPage', value: page-1 });
      }
    const upPaging  = () =>{
        if(!(page===lastPage))
        onChangeField({ key: 'rankingPage', value: page+1 });
      }
    if(!ranking || loading) return null;
    return(<Pagination
        type={"ranking"}
        downPaging={downPaging}
        upPaging={upPaging}
        page={parseInt(page,10)}
        lastPage={lastPage}
        erorr={error}
    />)
}
export default PaginationRankingContainer;