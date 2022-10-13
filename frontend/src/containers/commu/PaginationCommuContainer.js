import React from'react';
import Pagination from '../../components/common/Pagination';
import { useSelector } from 'react-redux';
import {useParams, useSearchParams} from 'react-router-dom';
import PaginationMini from '../../components/common/PaginationMini';


const PaginationContainer =() =>{
    const [searchParams] = useSearchParams();


    const search_type =searchParams.get('search_type');
    const search_contents=searchParams.get('search_contents');
    const {page,lastPage, commus, loading, error} = useSelector(({commus,loading})=>
    ({
        page: commus.commusPage,
        lastPage: commus.myCommusLastPage,
        commus: commus.commus,
        loading: loading['commus/LIST_COMMUS'],
        error: commus.commusError
    }));
   
    if(!commus || loading) return null;
    return(<PaginationMini
        search_type ={search_type}
        search_contents ={search_contents}
        page={parseInt(page,10)}
        lastPage={lastPage}
        erorr={error}
    />)
}
export default PaginationContainer;