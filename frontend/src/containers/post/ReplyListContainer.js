import React, { useEffect, useCallback } from "react";
import qs from "qs";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReplyList from "../../components/post/ReplyList";
import { changeField, deleteReply, listReplys, unloadReplys, writeReply } from "../../modules/replys";
import { useNavigate, useSearchParams } from "../../../node_modules/react-router-dom/index";

const ReplyListContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const {user}= useSelector(({user})=>({user: user.user}));
  const {addIndex,addReplyState,removeReplyState, reply_post,reply_contents,reply_type,reply_group_id,replys, replysError, loading } = useSelector(
    ({ replys, loading }) => ({
      addIndex: replys.addIndex,
      addReplyState: replys.addReplyState,
      removeReplyState: replys.removeReplyState,
      reply_post: id,
      reply_contents: replys.reply_add_contents,
      reply_type: 1,
      reply_group_id: replys.addReplyState,
      replys: replys.replys,
      replysError: replys.replysError,
      loading: loading['replys/LIST_REPLYS'],
    }),
  );

  const onPublish = (e) => {
    e.preventDefault();
    dispatch(writeReply({reply_post, reply_contents,reply_type, reply_group_id}));
   
  };

  const onRemove =()=>{
    const reply_id =removeReplyState;
    console.log("remve: "+removeReplyState)
    dispatch(deleteReply(reply_id));
  }
  const onRemoveSuccess=()=>{
    navigate(0);
  }

  const onChangeField = 
  useCallback(payload => dispatch(changeField(payload)), 
  [dispatch]);


  useEffect(() => {
    dispatch(listReplys(id));

    // 언마운트될 때 리덕스에서 reply 데이터 없애기
    return () => {
      dispatch(unloadReplys());
    };
  }, [dispatch, id,]);
  return (
    <ReplyList
      user={user}
      loading={loading}
      error={replysError}
      addIndex={addIndex}
      addReplyState={addReplyState}
      removeReplyState={removeReplyState}
      replys={replys}
      onChangeField={onChangeField}
      onPublish={onPublish}
      onRemove ={onRemove}
      onRemoveSuccess= {onRemoveSuccess}
      reply_contents={reply_contents}
    />
  );
};

export default ReplyListContainer;