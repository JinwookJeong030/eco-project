import React from 'react';
import { useSelector } from 'react-redux';
import ManagementCommu from '../../components/commu/ManagementCommu';

const ManagementCommuContainer = () => {

    const {apply, loading} = useSelector(({apply,loading})=>({
        apply: [{
            apply_id: 1,
            apply_commu: 1,
            apply_user:1,
            apply_type: 0,
            apply_regdate:"",
        }],
        loading: null

    }));

    return (
        <ManagementCommu/>
    );
};

export default ManagementCommuContainer;