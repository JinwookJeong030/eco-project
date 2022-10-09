import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useNavigate } from '../../../node_modules/react-router-dom/index';
import CommuMemberList from '../../components/commu/CommuMemberList';

const CommuMemberContainer = () => {
    const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const {user, users} = useSelector(({user})=>({
    user: user.user,
    users:[
        {user_id: 50,
        user_name:"랭킹1위임"},
        {user_id: 51,
            user_name:"랭킹2위임"},
        {user_id: 52,
        user_name:"랭킹3위임"},
    ]
  }));

    return (
            <CommuMemberList users={users}/>
    );
};

export default CommuMemberContainer;