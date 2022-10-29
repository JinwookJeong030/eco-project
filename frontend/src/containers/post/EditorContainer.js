import React, { useEffect, useCallback } from "react";
import Editor from "../../components/post/Editor";
import { useSelector, useDispatch } from "react-redux";
import { changeField, initialize, writePost, categorys, editPost , mission } from "../../modules/write";
import { useNavigate } from "../../../node_modules/react-router-dom/index";
import { uploadFile } from "../../lib/api/post";


const EditorContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { post_title, post_contents,post_category, post_mission,categoryArray, categorysError, missionData, missionError,originalPostId, post, postError, user_id } = useSelector(({ write, user }) => ({
    post_title: write.post_title,
    post_contents: write.post_contents,
    post_category: write.post_category,
    post_mission: write.post_mission,
    categoryArray: write.categorys,
    categorysError: write.categorysError,
    missionData: write.mission,
    missionError: write.missionError,
    originalPostId: write.originalPostId,
    post: write.post,
    postError: write.postError,
    post_image: write.post_image,
    user_id:user.user.user_id
  }));

  const onPublish =  (e) => {
    const formData = new FormData();
    const filesCnt =e.target.file.files.length;
    for(let i = 0 ; i< filesCnt ; i++){
      formData.append('file',e.target.file.files[i])
    }
    formData.append('user_id', user_id);
    // 폼 객체 key 값을 순회.
let keys = formData.keys();
for (const pair of keys) {
    console.log(pair); 
}
 
// 폼 객체 values 값을 순회.
let values = formData.values();
for (const pair of values) {
    console.log(pair); 
}
 
// 폼 객체 key 와 value 값을 순회.
let entries = formData.entries();
for (const pair of entries) {
    console.log(pair[0]+ ', ' + pair[1]); 
}
 
    if(originalPostId){
      dispatch(editPost({post_id: originalPostId, post_title, post_contents, post_category, post_mission}));
      return;
    }
    e.preventDefault();
    uploadFile(formData);
    dispatch(writePost({post_title,post_contents,post_category, post_mission }));
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
  useEffect(()=>{
    dispatch(mission());
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
  mission={missionData} 
  post_mission={post_mission}
  post_title={post_title}
  post_contents={post_contents}
  onChangeField={onChangeField} 
  onPublish={onPublish} 
 
  onCancel={onCancel}/>;
};

export default EditorContainer;