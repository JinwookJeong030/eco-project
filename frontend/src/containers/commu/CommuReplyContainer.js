import React from 'react';
import { useSelector } from 'react-redux';
import CommuReplyEditor from '../../components/commu/CommuReplyEditor';
import CommuReplyList from '../../components/commu/CommuReplyList';

const CommuReplyContainer = () => {

    const {user, loading, crs} =useSelector(({user,loading,commu_reply})=>({
        user: user.user,
        loading: loading['replys/LIST_REPLYS'],
        crs: [{
            cr_user:"user",
            cr_contents:"dfdf",
            cr_regdate:"2021-01-01"
        }]
    }))

    return (
        <> 
        <CommuReplyEditor user={user}/>
         <CommuReplyList user={user} loading={loading} replys={crs}/>
            </>
      
    );
};

export default CommuReplyContainer;