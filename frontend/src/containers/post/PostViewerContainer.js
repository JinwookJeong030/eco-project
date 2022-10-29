import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate  } from "react-router-dom";
import { readPost, unloadPost } from "../../modules/post";
import PostViewer from "../../components/post/PostViewer";

const PostViewerContainer = () => {

  // 처음 마운트될 때 포스트 읽기 API 요청
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post,postFiles, error, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    postFiles:post.postFiles,
    error: post.error,
    loading: loading['post/READ_POST'],
  }));
  
  useEffect(() => {
    dispatch(readPost(id));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, id]);

  return <PostViewer post={post} postFiles={postFiles} loading={loading} error={error} />;
};

export default PostViewerContainer;