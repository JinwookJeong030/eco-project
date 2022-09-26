import AuthTemplate from '../../components/auth/AuthTemplate';
import LoginForm from '../../containers/auth/LoginForm';
import ContentsBoxContainer from '../../containers/common/ContentsBoxContaniner';
import HeaderContainer from '../../containers/common/HeaderContainer';
import NavContainer from '../../containers/common/NavContainer';

/**
 * 로그인 페이지
 */
const LoginPage = () => {
  return (
    <>      
    <HeaderContainer />

    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>

    </>
  );
};

export default LoginPage;
