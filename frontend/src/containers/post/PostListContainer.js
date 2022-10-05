import React, { useEffect, useCallback } from "react";
import qs from "qs";
import { useParams,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../../components/post/PostList";
import { changeField, listPosts } from "../../modules/posts";
import { useNavigate } from "../../../node_modules/react-router-dom/index";

const PostListContainer = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { type, contents,posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      type: posts.search_type,
      contents: posts.search_contents,
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: user.user,
    }),
  );


  const onChangeField = 
  useCallback(payload => dispatch(changeField(payload)), 
  [dispatch]);
  const onSearch =()=>{
    navigate("/post/list?search_type="+type+"&search_contents="+contents);
  };

  useEffect(() => {
  
    const  searchPost = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    console.log(searchPost)
    dispatch(listPosts(searchPost));
  }, [dispatch, location.search]);


  return (
    <PostList
      serach_type={type}
      serach_contents={contents}
      onChangeField={onChangeField}
      onSearch={onSearch}
      loading={loading}
      error={error}
      posts={posts}
      showWriteButton={user}
    />
  );
};

export default PostListContainer;