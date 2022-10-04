import React, { useEffect, useCallback } from "react";
import Editor from "../../components/post/Editor";
import { useSelector, useDispatch } from "react-redux";
import { changeField, initialize, writePost, categorys, editPost } from "../../modules/write";
import { useNavigate } from "../../../node_modules/react-router-dom/index";

const EditorContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { post_title, post_contents,post_category, post_mission,categoryArray, categorysError, missionArray, missionsError,originalPostId, post, postError } = useSelector(({ write }) => ({
    post_title: write.post_title,
    post_contents: write.post_contents,
    post_category: write.post_category,
    post_mission: write.post_mission,
    categoryArray: write.categorys,
    categorysError: write.categorysError,
    missionArray: write.missions,
    missionsError: write.missionsError,
    originalPostId: write.originalPostId,
    post: write.post,
    postError: write.postError,
  }));
  const onPublish = (e) => {
    if(originalPostId){
      dispatch(editPost({post_id: originalPostId, post_title, post_contents, post_category, post_mission}));
      return;
    }
    e.preventDefault();
    dispatch(writePost({post_title,post_contents,post_category, post_mission}));
  };
  const onCancel = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const onChangeField = 
  useCallback(payload => dispatch(changeField(payload)), 
  [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  useEffect(()=>{
    dispatch(categorys());
  },[]);

  useEffect(() => {
    if (post) {
      navigate('/post/list');
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError]);  

  return <Editor 
  categorys={categoryArray} 
  category={post_category} 
  missions={missionArray} 
  mission={post_mission}
  post_title={post_title}
  post_contents={post_contents}
  onChangeField={onChangeField} 
  onPublish={onPublish} 
  onCancel={onCancel}/>;
};

export default EditorContainer;