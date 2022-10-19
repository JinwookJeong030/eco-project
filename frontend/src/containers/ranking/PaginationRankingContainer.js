import React, { useCallback } from'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from '../../../node_modules/react-router-dom/index';
import Pagination from '../../components/common/Pagination';
import { changeField } from '../../modules/ranking';


const PaginationRankingContainer =() =>{

    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();
    const page =parseInt(searchParams.get('page'),10)||1;
    const search_type =searchParams.get('search_type');
    const search_contents=searchParams.get('search_contents');
    const {lastPage,ranking, loading, error} = useSelector(({ranking,loading})=>
    ({

        lastPage: ranking.lastPage,
        ranking: ranking.ranking,
        loading: loading['ranking/LIST_RANKING'],
        error: ranking.rankingError
    }));
    const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
    const downPaging  = () =>{
        if(!(page===1))
        onChangeField({ key: 'page', value: page-1 });
      }
    const upPaging  = () =>{
        if(!(page===lastPage))
        onChangeField({ key: 'page', value: page+1 });
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