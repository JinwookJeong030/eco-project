import qs from "qs";
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useNavigate } from '../../../node_modules/react-router-dom/index';
import CommusList from '../../components/commu/CommusList'
import { changeField, listCommus,listMyCommus } from '../../modules/commus';
const ClassListForm = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { type, contents, myCommus, commus, error, loading, user, } = useSelector(
    ({ commus, loading, user }) => ({
      type: commus.search_type,
      contents: commus.search_contents,
      myCommus: commus.myCommus,
      commus: commus.commus,
      commuError: commus.commuError,
      myCommuError: commus.myCommuError,
      loading: loading['commus/LIST_Commus']||loading['commus/LIST_My_Commus'],
      user: user.user,
    }),
  );
  
  const onChangeField = 
  useCallback(payload => dispatch(changeField(payload)), 
  [dispatch]);
  const onSearch =()=>{
    navigate("/post/list?search_type="+type+"&search_contents="+contents);
  };

  useEffect(() => {
    const  searchCommus = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    console.log(searchCommus)
    dispatch(listCommus(searchCommus));
    dispatch(listMyCommus(searchCommus));
  }, [dispatch, location.search]);





  return (
    <CommusList
    user={user}
    search_type={type}
    search_contents={contents}
    onChangeField={onChangeField}
    onSearch={onSearch}
    loading={loading}
    error={error}
    commus={commus}
    myCommus={myCommus}
    showWriteButton={user}
    />
  );
};

export default ClassListForm;
