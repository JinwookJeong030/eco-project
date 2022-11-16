import React, { useEffect, useCallback } from "react";
import qs from "qs";
import { useParams,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "../../../node_modules/react-router-dom/index";
import RankingList from "../../components/ranking/RankingList";
import { listRanking,changeField, initialize } from "../../modules/ranking";

const RankingListContainer = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

const pageNum = parseInt(searchParams.get('page'),10) || 1;
  const { type, contents,ranking, plant, error, loading, user} = useSelector(
    ({ ranking, loading, user, }) => ({
      type: ranking.search_type,
      contents: ranking.search_contents,
      ranking: ranking.ranking,
      plant: ranking.rankingPlant,
      error: ranking.error,
      loading: loading['ranking/LIST_RANKING'],
      user: user.user,
    
    }),
  );

  const onChangeField = 
  useCallback(payload => dispatch(changeField(payload)), 
  [dispatch]);
  
  const onSearch =()=>{
    navigate("/ranking?search_type="+type+"&search_contents="+contents);
  };

  
  useEffect(() => {
    const search_type = searchParams.get('search_type');
    const search_contents = searchParams.get('search_contents');
    const page = parseInt(searchParams.get('page'),10) || 1;
    dispatch(listRanking({search_type, search_contents, page}));
  // 언마운트될 때 리덕스에서 reply 데이터 없애기
 

  }, [dispatch, location.search,searchParams]);



  return (
    <RankingList pageNum={pageNum} user={user} loading={loading} ranking={ranking}
    search_type={type}
    search_contents={contents}
    plant={plant}
    onChangeField={onChangeField}
    onSearch={onSearch}
    />
  );
};

export default RankingListContainer;