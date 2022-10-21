
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Flowerpots from '../../components/garden/FlowerPots';
import { readPlant, unloadPlant } from '../../modules/plant';



const FlowerpotsContainer = () => {
    // 처음 마운트될 때 포스트 읽기 API 요청
    const { user_id } = useParams();
    const dispatch = useDispatch();
    const {user, plant, error, loading } = useSelector(({ user, plant, loading }) => ({
      user: user.user,
      plant: plant.plant,
      error: plant.error,
      loading: loading['plant/READ_PLANT'],
    }));
    
    useEffect(() => {
      dispatch(readPlant(user_id||0));
      // 언마운트될 때 리덕스에서 포스트 데이터 없애기
      return () => {
        dispatch(unloadPlant());
      };
    }, [dispatch, user_id]);
  return (
    <>
    <Flowerpots user={user} plant={plant} loading={loading} error={error}/>
    </>
  );
};

export default FlowerpotsContainer;
