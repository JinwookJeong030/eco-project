import React, { useEffect, useCallback } from "react";
import Editor from "../../components/post/Editor";
import { useSelector, useDispatch } from "react-redux";
import { changeField, initialize, writePost } from "../../modules/write";
import { useNavigate } from "../../../node_modules/react-router-dom/index";

const EditorContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title, body, post, postError } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    post: write.post,
    postError: write.postError,
  }));
  const onPublish = () => {
    dispatch(writePost(title,body));
  };
  const onCancel = () => {
    navigate.goBack();
  };

  const onChangeField = 
  useCallback(payload => dispatch(changeField(payload)), 
  [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      navigate.push(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError]);  

  return <Editor onChangeField={onChangeField} onPublish={onPublish} onCancel={onCancel}/>;
};

export default EditorContainer;