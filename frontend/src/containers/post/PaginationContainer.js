import React from'react';
import Pagination from '../../components/common/Pagination';
import { useSelector } from 'react-redux';
import {useParams, useSearchParams} from 'react-router-dom';


const PaginationContainer =() =>{
    const [searchParams] = useSearchParams();

    const page =parseInt(searchParams.get('page'),10)||1;
    const search_type =searchParams.get('search_type');
    const search_contents=searchParams.get('search_contents');
    const {lastPage, posts, loading, error} = useSelector(({posts,loading,error})=>
    ({
        lastPage: posts.lastPage,
        posts: posts.posts,
        loading: loading['posts/LIST_POST'],
        error: posts.error
    }));
   
    if(!posts || loading) return null;
    return(<Pagination
        type={"post"}
        search_type ={search_type}
        search_contents ={search_contents}
        page={parseInt(page,10)}
        lastPage={lastPage}
        erorr={error}
    />)
}
export default PaginationContainer;