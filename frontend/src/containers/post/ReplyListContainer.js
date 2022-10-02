import React, { useEffect, useCallback } from "react";
import qs from "qs";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReplyList from "../../components/post/ReplyList";
import { changeField, listReplys, unloadReplys, writeReply } from "../../modules/replys";

const ReplyListContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const {user}= useSelector(({user})=>({user: user.user}));
  const {addReplyState, reply_post,reply_contents,reply_order,reply_type,reply_group_id,replys, replysError, loading } = useSelector(
    ({ replys, loading }) => ({
      addReplyState: replys.addReplyState,
      reply_post: id,
      reply_contents: replys.reply_add_contents,
      reply_type: 1,
      reply_order:replys.reply_order,
      reply_group_id: replys.addReplyState,
      replys: replys.replys,
      replysError: replys.replysError,
      loading: loading['replys/LIST_REPLYS'],
    }),
  );
  
  const onPublish = (e) => {
    dispatch(writeReply({reply_post, reply_contents,reply_type,reply_order, reply_group_id}));
   
  };


  const onChangeField = 
  useCallback(payload => dispatch(changeField(payload)), 
  [dispatch]);


  useEffect(() => {
    dispatch(listReplys(id));

    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadReplys());
    };
  }, [dispatch, id,]);
  return (
    <ReplyList
      user={user}
      loading={loading}
      error={replysError}
      addReplyState={addReplyState}
      replys={replys}
      onChangeField={onChangeField}
      onPublish={onPublish}
    />
  );
};

export default ReplyListContainer;