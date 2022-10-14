import React, { useCallback } from'react';
import Pagination from '../../components/common/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import {useParams, useSearchParams} from 'react-router-dom';
import PaginationMini from '../../components/common/PaginationMini';
import { changeField } from '../../modules/commus';


const PaginationContainer =() =>{
    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();
    const search_type =searchParams.get('search_type');
    const search_contents=searchParams.get('search_contents');
    const {page,lastPage, commus, loading, error} = useSelector(({commus,loading})=>
    ({
        page: commus.commusPage,
        lastPage: commus.commusLastPage,
        commus: commus.commus,
        loading: loading['commus/LIST_COMMUS'],
        error: commus.commusError
    }));
    const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
    const downPaging  = () =>{
        if(!(page===1))
        onChangeField({ key: 'commusPage', value: page-1 });
      }
    const upPaging  = () =>{
        if(!(page===lastPage))
        onChangeField({ key: 'commusPage', value: page+1 });
      }
    if(!commus || loading) return null;
    return(<PaginationMini
        downPaging={downPaging}
        upPaging={upPaging}
        search_type ={search_type}
        search_contents ={search_contents}
        page={parseInt(page,10)}
        lastPage={lastPage}
        erorr={error}
    />)
}
export default PaginationContainer;