
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Flowerpots from '../../components/garden/FlowerPots';
import {  readCompletePlant, readGrowPlant, unloadPlant } from '../../modules/plant';



const FlowerpotsContainer = () => {
    // 처음 마운트될 때 포스트 읽기 API 요청
    const { user_id } = useParams();
    const dispatch = useDispatch();
    const {user, growPlant, error, loadingGrow } = useSelector(({ user, plant, loading }) => ({
      user: user.user,
      growPlant: plant.growPlant,
      error: plant.error,
      loadingGrow: loading['plant/READ_GROW_PLANT'],
    }));
    
    useEffect(() => {
      dispatch(readGrowPlant(user_id||0));
      // 언마운트될 때 리덕스에서 포스트 데이터 없애기
      return () => {
        dispatch(unloadPlant());
      };
    }, [dispatch, user_id]);
  return (
    <>
    <Flowerpots user={user} growPlant={growPlant}loadingGrow={loadingGrow} error={error}/>
    </>
  );
};

export default FlowerpotsContainer;
