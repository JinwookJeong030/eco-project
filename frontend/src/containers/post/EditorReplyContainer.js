import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeField, initialize, writeReply } from "../../modules/replys";
import { useNavigate, useParams } from "../../../node_modules/react-router-dom/index";
import ReplyEditor from "../../components/post/ReplyEditor";

const EditorContainer = () => {
  const dispatch = useDispatch();
  const {reply_post} =useParams();
  const navigate = useNavigate();
  const { reply_contents, reply_type,reply_order,reply_group_id, reply, replyError } = useSelector(({ replys }) => ({
    reply_contents:replys.reply_contents,
    reply_type:replys.reply_type,
    reply_order:replys.reply_order,
    reply_group_id:replys.reply_group_id,
    reply:replys.reply,
    replyError:replys.replyError
  }));
  const onPublish = () => {
    dispatch(writeReply({reply_post, reply_contents,reply_type,reply_order, reply_group_id}));
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
    if (reply) {
      navigate('/post/view/'+reply_post);
    }
    if (replyError) {
      console.log(replyError);
    }
  }, [navigate, reply, replyError]);  

  return <ReplyEditor onChangeField={onChangeField} onPublish={onPublish} onCancel={onCancel}/>;
};

export default EditorContainer;