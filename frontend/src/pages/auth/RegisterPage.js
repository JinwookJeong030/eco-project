import AuthTemplate from '../../components/auth/AuthTemplate';
import RegisterForm from '../../containers/auth/RegisterFrom';
import HeaderContainer from '../../containers/common/HeaderContainer';

/**
 * 회원가입 페이지
 */
const RegisterPage = () => {
  return (

    <>      
    <HeaderContainer />

    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
    </>
  );
};

export default RegisterPage;
