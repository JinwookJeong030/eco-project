import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from '../../../node_modules/react-redux/es/exports';
import { useNavigate } from '../../../node_modules/react-router-dom/index';
import Header from '../../components/common/Header';
import { check, logout } from '../../modules/user';

const HeaderContainer = () => {
  const navigate = useNavigate();
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(check());
  },[dispatch])

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate('/login')
  };

  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;