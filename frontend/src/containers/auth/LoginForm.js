import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form, auth, authError, user,loading } = useSelector(({ auth, user,loading }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
    loading: loading['user/CHECK'],
  }));

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: 'login', key: name, value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { user_email, user_password } = form;
    if(!(user_email&&user_password)){
      setError("이메일, 패스워드를 입력해주세요.");
      return;
    }
    dispatch(login({ user_email, user_password }));
  };
  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      console.log(authError);
      setError('이메일 또는 비밀번호가 옳지 않습니다.' );
      return;
    }
    else {
      setError("");
    }

    if (auth) {
      dispatch(check());
      dispatch(initializeForm('auth'));
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    console.log(user);
    
    if (user) {
      
      navigate('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [navigate, user,auth]);
  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      loading={loading}
    />
  );
};

export default LoginForm;
