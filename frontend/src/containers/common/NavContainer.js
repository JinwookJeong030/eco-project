import { useSelector } from 'react-redux';
import { useDispatch } from '../../../node_modules/react-redux/es/exports';
import Nav from '../../components/common/Nav';
import { logout } from '../../modules/user';

const NavContainer = () => {
  const dispatch = useDispatch();
  return <Nav />;
};

export default NavContainer;
