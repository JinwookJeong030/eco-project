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
  useEffect(() => {
    dispatch(initializeForm('register'));

  }, [dispatch]);

  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: 'register', key: name, value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { user_email, user_password, passwordConfirm, user_name } = form;

    //빈칸이 존재하는 경우
    if ([user_email, user_password, passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력해주세요.');
      return;
    }
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!emailRegex.test(user_email)) {
      setError('이메일 형식이 옳지 않습니다.');
      dispatch(changeField({ form: 'register', key: 'user_email', value: '' }));

      return;
    }

    //비밀번호가 일치하지 않는 경우
    if (user_password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      dispatch(changeField({ form: 'register', key: 'user_password', value: '' }));
      dispatch(
        changeField({ form: 'register', key: 'passwordConfirm', value: '' }),
      );
      return;
    }
    const pwRegex =
      /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

    if (!(pwRegex.test(user_password) || pwRegex.test(passwordConfirm))) {
      setError('비밀번호는 숫자, 문자, 특수문자를 포함한 8~15자이어야 합니다.');
      dispatch(changeField({ form: 'register', key: 'user_password', value: '' }));
      dispatch(
        changeField({ form: 'register', key: 'passwordConfirm', value: '' }),
      );
      return;
    }
    dispatch(register({ user_email, user_password, user_name }));
  };

  //회원가입 실패 처리 DB
  useEffect(() => {
    if (authError) {
      if(authError ==={}){
      return;
      }
      if (authError.response.status === 500) {
        setError('알수없는 오류');
        return;
      }
      if (authError.response.status === 429) {
        setError('이미 존재하는 계정입니다.');
        return;
      }
      if (authError.response.status === 439) {
        setError('이미 존재하는 닉네임입니다.');
        return;
      }
      console.log('회원가입 실패');
      console.log(authError);
      return;
    }
    else{
      setError('');
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
      alert('회원가입 성공! 로그인 페이지로 이동합니다');
      dispatch(initializeForm('auth'));
      navigate('/login');

      return;
    }
  }, [auth, authError, dispatch]);

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
