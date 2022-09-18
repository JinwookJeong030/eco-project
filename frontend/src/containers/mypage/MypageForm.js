import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import Mypage from '../../components/mypage/Mypage';
import { check } from '../../modules/user';
import { useNavigate } from 'react-router-dom';

const MypageForm = ({ history }) => {

  return (
    <Mypage
    />
  );
};

export default MypageForm;
