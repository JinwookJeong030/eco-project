import { useSelector } from 'react-redux';
import ContentsBox from '../../components/common/ContentsBox';


const ContentsBoxContainer = ({children, title}) => {
  const {hidingState}= useSelector(({ user }) => ({ hidingState: user.hidingState }));
  return <ContentsBox children={children} title={title} hidingState={hidingState}/>;
};

export default ContentsBoxContainer;
