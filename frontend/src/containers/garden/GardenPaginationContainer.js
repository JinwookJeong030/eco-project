import React from'react';

import { useSelector } from 'react-redux';
import {useParams, useSearchParams} from 'react-router-dom';
import GardenPagination from '../../components/garden/GardenPagination';


const GardenPaginationContainer =() =>{
    const params = useParams();
    const page =parseInt(params.page,10)||1;
    const user_id = params.user_id;
    const {plant, lastPage, loading, error} = useSelector(({plant,loading,error})=>
    ({
        lastPage: plant.lastPage,
        plant: plant.completePlant,
        loading: loading['plant/READ_COMPLETE_PLANT'],
        error: plant.error
    }));
   
    if(!plant || loading) return null;
    return(<GardenPagination
        page={page}
        user_id={user_id}
        lastPage={lastPage}
        erorr={error}
    />)
}
export default GardenPaginationContainer;