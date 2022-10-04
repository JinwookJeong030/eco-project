import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import Mypage from '../../components/mypage/Mypage';
import { check } from '../../modules/user';
import { useNavigate } from 'react-router-dom';
import MyPlant from '../../components/plant/MyPlant';

const MypageForm = ({ history }) => {

  return (
    <MyPlant
    />
  );
};

export default MypageForm;
