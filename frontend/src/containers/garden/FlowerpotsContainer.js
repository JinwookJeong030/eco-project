
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Flowerpots from '../../components/garden/FlowerPots';
import {  deletePlant, plusPointPlant, pointUpPlant, readCompletePlant, readGrowPlant, unloadPlant } from '../../modules/plant';
import { check } from '../../modules/user';



const FlowerpotsContainer = () => {
    // 처음 마운트될 때 포스트 읽기 API 요청
    const { user_id } = useParams();
    const dispatch = useDispatch();
    const {user, growPlant,plantPoint,selectPlant, error, loadingGrow } = useSelector(({ user, plant, loading }) => ({
      user: user.user,
      growPlant: plant.growPlant,
      plantPoint:plant.plantPoint,
      selectPlant:plant.selectPlant,
      error: plant.error,
      loadingGrow: loading['plant/READ_GROW_PLANT'],
    }));
    
    const onClickWateringItem = (selectPlant,plantPoint)=>{
      dispatch(plusPointPlant({selectPlant,plantPoint}));
    }
    const onSubmitPoint = (point)=>{
      dispatch(pointUpPlant({growPlant: growPlant[selectPlant-1] , point}));
    }

    const onDeletePlant = ()=>{
      const pt_id = growPlant[selectPlant-1].pt_id;
      dispatch(deletePlant({pt_id}));
    }

    useEffect(() => {
      dispatch(check());
      dispatch(readGrowPlant(user_id||0));
      // 언마운트될 때 리덕스에서 포스트 데이터 없애기
      return () => {
        dispatch(unloadPlant());
      };
    }, [dispatch, user_id]);
  return (
    <>
    <Flowerpots   user={user} growPlant={growPlant} plantPoint={plantPoint} loadingGrow={loadingGrow} error={error} 
    selectPlant={selectPlant} onClickWateringItem={onClickWateringItem} onDeletePlant={onDeletePlant}
    onSubmitPoint={onSubmitPoint}
    />
    </>
  );
};

export default FlowerpotsContainer;
