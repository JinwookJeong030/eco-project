import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeField, initialize, writeReply } from "../../modules/replys";
import { useNavigate, useParams } from "../../../node_modules/react-router-dom/index";
import ReplyEditor from "../../components/post/ReplyEditor";

const EditorContainer = () => {
  const dispatch = useDispatch();
  const {id} =useParams();
  
  const navigate = useNavigate();

  const {user} = useSelector(({user})=>({user: user.user}));

  let {reply_post, reply_contents,reply_add_contents, reply_type,reply_order,reply_group_id,addReplyState, reply, replyError } = useSelector(({ replys }) => ({
    reply_post: id,
    reply_contents:replys.reply_contents,
    reply_add_contents:replys.reply_add_contents,
    reply_type:replys.reply_type,
    reply_order:replys.reply_order,
    reply_group_id:replys.reply_group_id,
    addReplyState: replys.addReplyState,
    reply:replys.reply,
    replyError:replys.replyError
  }));

  const onLocationLogin =()=>{
    navigate('/login');
  };
  const onPublish = () => {
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
      navigate(0);
    }
    if (replyError) {
      console.log(replyError);
    }
  }, [navigate, reply, replyError]);  

  return <ReplyEditor user={user} onLocationLogin={onLocationLogin} onChangeField={onChangeField} onPublish={onPublish}
  />;
};

export default EditorContainer;