import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {readPost}from "../../modules/post";
import { changeField, initialize, writeReply, listReplys } from "../../modules/replys";
import { useNavigate, useParams } from "../../../node_modules/react-router-dom/index";
import ReplyEditor from "../../components/post/ReplyEditor";

const EditorContainer = () => {
  const dispatch = useDispatch();
  const {id} =useParams();
  
  const navigate = useNavigate();

  const {user} = useSelector(({user})=>({user: user.user}));

  let {reply_post, reply_contents, reply_type,reply_order,reply_group_id, reply, replyError } = useSelector(({ replys }) => ({
    reply_post: id,
    reply_contents:replys.reply_contents,
    reply_type:replys.reply_type,
    reply_order:replys.reply_order,
    reply_group_id:replys.reply_group_id,
    reply:replys.reply,
    replyError:replys.replyError
  }));

  const onLocationLogin =()=>{
    navigate('/login');
  };
  const onPublish = (e) => {
    e.preventDefault();
    dispatch(writeReply({reply_post, reply_contents,reply_type,reply_order, reply_group_id}));
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
      dispatch(readPost(id));
      dispatch(listReplys(id));
      
    }
    if (replyError) {
      console.log(replyError);
    }
  }, [navigate, reply, replyError]);  

  return <ReplyEditor user={user} onLocationLogin={onLocationLogin} onChangeField={onChangeField} onPublish={onPublish} reply_contents={reply_contents}
  />;
};

export default EditorContainer;