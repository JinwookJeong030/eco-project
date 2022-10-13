import React, { useCallback } from'react';
import { useDispatch, useSelector } from 'react-redux';
import PaginationMini from '../../components/common/PaginationMini';
import { changeField } from '../../modules/commus';


const PaginationMyCommuContainer =() =>{

    const dispatch = useDispatch();
    const {page,lastPage, commus, loading, error} = useSelector(({commus,loading})=>
    ({
        page: commus.myCommusPage||1,
        lastPage: commus.myCommusLastPage,
        commus: commus.myCommus,
        loading: loading['commus/LIST_MY_COMMUS'],
        error: commus.myCommuError
    }));
    const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
    const downPaging  = () =>{
        if(!(page===1))
        onChangeField({ key: 'myCommusPage', value: page-1 });
      }
    const upPaging  = () =>{
        if(!(page===lastPage))
        onChangeField({ key: 'myCommusPage', value: page+1 });
      }
    if(!commus || loading) return null;
    return(<PaginationMini
        downPaging={downPaging}
        upPaging={upPaging}
        page={parseInt(page,10)}
        lastPage={lastPage}
        erorr={error}
    />)
}
export default PaginationMyCommuContainer;