import { useSelector } from 'react-redux';
import { useDispatch } from '../../../node_modules/react-redux/es/exports';
import Nav from '../../components/common/Nav';
import user, { hidingMenu } from '../../modules/user';

const NavContainer = () => {
  const dispatch = useDispatch();
  const {hidingState}= useSelector(({ user }) => ({ hidingState: user.hidingState }));
  const onHidingMenu =()=>{
    dispatch(hidingMenu(!hidingState));
  }
  return <Nav onHidingMenu={onHidingMenu} hidingState={hidingState}/>;
};

export default NavContainer;
