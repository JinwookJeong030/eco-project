import React, { useEffect, useCallback } from "react";
import Editor from "../../components/post/Editor";
import { useSelector, useDispatch } from "react-redux";
import { changeField, initialize, writePost } from "../../modules/write";
import { useNavigate } from "../../../node_modules/react-router-dom/index";

const EditorContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { post_title, post_contents, post, postError } = useSelector(({ write }) => ({
    post_title: write.post_title,
    post_contents: write.post_contents,
    post: write.post,
    postError: write.postError,
  }));
  const onPublish = () => {
    dispatch(writePost({post_title,post_contents}));
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
      navigate.push(`/@${user.user_name}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError]);  

  return <Editor onChangeField={onChangeField} onPublish={onPublish} onCancel={onCancel}/>;
};

export default EditorContainer;