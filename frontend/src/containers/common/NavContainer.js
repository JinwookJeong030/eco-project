import { useSelector } from 'react-redux';
import { useDispatch } from '../../../node_modules/react-redux/es/exports';
import Nav from '../../components/common/Nav';
import user, { hidingMenu } from '../../modules/user';

const NavContainer = () => {
  const dispatch = useDispatch();
  const {hidingMenuState}= useSelector(({ user }) => ({ hidingMenuState: user.hidingMenu }));
  const onHidingMenu =()=>{
    dispatch(hidingMenu());
  }
  return <Nav onHidingMenu={onHidingMenu} hiding={hidingMenuState}/>;
};

export default NavContainer;
