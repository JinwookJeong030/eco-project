import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate  } from "react-router-dom";
import post, { readPost, unloadPost } from "../../modules/post";
import PostViewer from "../../components/post/PostViewer";
import PostManagement from "../../components/post/PostManagement";
import { deletePost } from "../../modules/write";
const PostManagementContainer = () => {

  const navigate = useNavigate();
  // 처음 마운트될 때 포스트 읽기 API 요청
  const { id } = useParams();
  const dispatch = useDispatch();


  const { post, error, loadingRead,loadingDelete, user } = useSelector(
    ({ post, loading, user }) => ({
      post:post.post,
      error: post.error,
      loadingRead: loading['post/READ_POST_SUCCESS'],
      loadingDelete: loading['post/DELETE_POST_SUCCESS'],
      user: user.user,
    }),
  );


  const onEdit =(e)=>{
    e.preventDefault();

  }
  const onRemove =()=>{
    dispatch(deletePost(id));
  }
  const onRemoveSuccess=()=>{
    navigate('/post/list');
  }
  const onBack=(e)=>{
    e.preventDefault();
    navigate(-1);
  }

  return <PostManagement user={user} post={post} loadingRead={loadingRead} loadingDelete={loadingDelete} id={id} onEdit={onEdit} onRemove={onRemove}
  onRemoveSuccess={onRemoveSuccess} onBack ={onBack} />;
};

export default PostManagementContainer;