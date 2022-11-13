
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Garden from '../../components/garden/Garden';
import { readCompletePlant, unloadPlant } from '../../modules/plant';

const GardenContainer = () => {
    // 처음 마운트될 때 포스트 읽기 API 요청
    const { user_id, page} = useParams();
    const dispatch = useDispatch();
    const {user,completePlant, error ,loading} = useSelector(({ user, plant, loading }) => ({
      user: user.user,
      completePlant: plant.completePlant,
      error: plant.error,
      loading: loading['plant/READ_COMPLETE_PLANT'],
   
    }));
    
    useEffect(() => {
      dispatch(readCompletePlant({user_id:user_id||0 , page: page||0}));
    }, [dispatch, user_id,page]);
  

  return (
    <>
    <Garden user={user} completePlant={completePlant} error={error} loading={loading}/>
    </>
  );
};

export default GardenContainer;
