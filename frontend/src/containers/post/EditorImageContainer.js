import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeField, initialize, writePost, categorys } from "../../modules/write";
import { useNavigate } from "../../../node_modules/react-router-dom/index";
import ImageEditor from "../../components/post/ImageEditor";

const EditorContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { post_title } = useSelector(({ write }) => ({
    post_title: write.post_title,
  }));
  
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

  return <ImageEditor/>;
};

export default EditorContainer;