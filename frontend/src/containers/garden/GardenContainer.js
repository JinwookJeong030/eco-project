
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Garden from '../../components/garden/Garden';
import { readCompletePlant, unloadPlant } from '../../modules/plant';

const GardenContainer = () => {
    // 처음 마운트될 때 포스트 읽기 API 요청
    const { user_id } = useParams();
    const dispatch = useDispatch();
    const {user,completePlant, error ,loadingComplete} = useSelector(({ user, plant, loading }) => ({
      user: user.user,
      completePlant: plant.completePlant,
      error: plant.error,
      loadingGrow: loading['plant/READ_GROW_PLANT'],
      loadingComplete: loading['plant/READ_COMPLETE_PLANT'],
    }));
    
    useEffect(() => {
      dispatch(readCompletePlant(user_id||0));
      // 언마운트될 때 리덕스에서 포스트 데이터 없애기
      return () => {
        dispatch(unloadPlant());
      };
    }, [dispatch, user_id]);
  

  return (
    <>
    <Garden user={user} completePlant={completePlant} error={error} loadingComplete={loadingComplete}/>
    </>
  );
};

export default GardenContainer;
