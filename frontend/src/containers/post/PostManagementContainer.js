import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate  } from "react-router-dom";
import { readPost, unloadPost } from "../../modules/post";
import PostViewer from "../../components/post/PostViewer";
import PostManagement from "../../components/post/PostManagement";

const PostManagementContainer = () => {

  // 처음 마운트될 때 포스트 읽기 API 요청
  const { id } = useParams();
  const dispatch = useDispatch();
  const {user} = useSelector(({user}) => ({
    user: user.user
  }));
  const onEdit =()=>{

  }
  const onRemove =()=>{
   
}
  return <PostManagement user={user} id={id} onEdit={onEdit} onRemove={onRemove} />;
};

export default PostManagementContainer;