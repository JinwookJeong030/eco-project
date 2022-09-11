import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: 'register', key: name, value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirm } = form;

    //빈칸이 존재하는 경우
    if ([email, password, passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력해주세요.');
      return;
    }
    const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if(!emailRegex.test(email)){
      setError('이메일 형식이 옳지 않습니다.');
      dispatch(changeField({ form: 'register', key: 'email', value: '' }));
    
      return ;
    }

    //비밀번호가 일치하지 않는 경우
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      dispatch(changeField({ form: 'register', key: 'password', value: '' }));
      dispatch(
        changeField({ form: 'register', key: 'passwordConfirm', value: '' }),
      );
      return;
    }
    var pwRegex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    
    if(!(pwRegex.test(password)||pwRegex.test(passwordConfirm))){
      setError('비밀번호는 숫자, 문자, 특수문자를 포함한 8~15자이어야 합니다.');
      dispatch(changeField({ form: 'register', key: 'password', value: '' }));
      dispatch(
        changeField({ form: 'register', key: 'passwordConfirm', value: '' }),
      );
      return ;
    }
    dispatch(register({ email, password }));
  };

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  //회원가입 실패 처리 DB
  useEffect(() => {
    if (authError) {
      if (authError.response.status === 500) {
        setError('알수없는 오류');
        return;
      }
      if (authError.response.status === 409) {
        setError('이미 존재하는 계정입니다.');
        return;
      }

      console.log('회원가입 실패');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
      dispatch(check());
      return;
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      navigate('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [navigate, user]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default RegisterForm;
