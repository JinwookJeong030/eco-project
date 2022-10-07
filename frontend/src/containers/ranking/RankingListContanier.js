import React, { useEffect, useCallback } from "react";
import qs from "qs";
import { useParams,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../../components/post/PostList";
import { changeField, listPosts } from "../../modules/posts";
import { useNavigate } from "../../../node_modules/react-router-dom/index";
import write, { categorys } from "../../modules/write";
import RankingList from "../../components/ranking/RankingList";

const RankingListContainer = () => {



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
    <RankingList user={user} users={users}/>
  );
};

export default RankingListContainer;