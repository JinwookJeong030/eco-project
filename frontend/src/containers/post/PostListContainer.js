import React, { useEffect, useCallback } from "react";
import qs from "qs";
import { useParams,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../../components/post/PostList";
import { changeField, listPosts } from "../../modules/posts";
import { useNavigate } from "../../../node_modules/react-router-dom/index";
import write, { categorys,mission } from "../../modules/write";

const PostListContainer = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { type, contents,posts, error, loading, user, categoryList ,todayMission } = useSelector(
    ({ posts, loading, user, write }) => ({
      type: posts.search_type,
      contents: posts.search_contents,
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: user.user,
      categoryList: write.categorys,
      todayMission: write.mission,
    }),
  );
  


  const onChangeField = 
  useCallback(payload => dispatch(changeField(payload)), 
  [dispatch]);
  const onSearch =()=>{
    navigate("/post/list?search_type="+type+"&search_contents="+contents);
  };

  useEffect(() => {
    dispatch(categorys());
    dispatch(mission());
    const  searchPost = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    console.log(searchPost)
    dispatch(listPosts(searchPost));
  }, [dispatch, location.search]);


  return (
    <PostList
      search_type={type}
      search_contents={contents}
      onChangeField={onChangeField}
 
      onSearch={onSearch}
      loading={loading}
      error={error}
      posts={posts}
      showWriteButton={user}
      categorys={categoryList}
      mission={todayMission}
    />
  );
};

export default PostListContainer;