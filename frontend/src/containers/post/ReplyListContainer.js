import React, { useEffect } from "react";
import qs from "qs";
import { useParams,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReplyList from "../../components/post/ReplyList";
import { listReplys, unloadReplys } from "../../modules/replys";

const PostListContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { replys, error, loading } = useSelector(
    ({ replys, loading }) => ({
      replys: replys.replys,
      error: replys.replysError,
      loading: loading['replys/LIST_REPLYS'],
    }),
  );

  useEffect(() => {
    dispatch(listReplys(id));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadReplys());
    };
  }, [dispatch, id]);
  return (
    <ReplyList
      loading={loading}
      error={error}
      replys={replys}
      
    />
  );
};

export default PostListContainer;