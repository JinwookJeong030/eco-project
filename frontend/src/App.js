import React from 'react';

import PostListPage from './pages/post/PostListPage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import PostPage from './pages/post/PostPage';
import RegisterPage from './pages/auth/RegisterPage';
import EditPostPage from './pages/post/EditPostPage';
import ClassListPage from './pages/class/ClassListPage';
import ClassPage from './pages/class/ClassPage';
import EditClassPage from './pages/class/EditClassPage';
import MypagePage from './pages/mypage/MypagePgae'
import MainMission from './pages/mission/MainMissionPage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<PostListPage />} />
      {/*로그인, 회원가입*/}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
     
   

      {/*게시글 작성메뉴*/}
      <Route path="/post/@:username">
        <Route index element={<PostListPage />} />
        <Route path=":postId" element={<PostPage />} />
      </Route>
      <Route path="/post/edit" element={<EditPostPage />} />
      {/*모임 메뉴*/}
      <Route path="/class/list" element={<ClassListPage />} />
      <Route path="/class/edit" element={<EditClassPage />} />
      <Route path="/class/@:classname">
        <Route index element={<ClassListPage />} />
        <Route path=":classId" element={<ClassPage />} />
      </Route>
      {/*미션 & 식물 메뉴*/}
      <Route path="/mission/myMission" element={<MainMission />} />
      {/*마이페이지 메뉴*/}
      <Route path="/mypage" element={<MypagePage />} />
      {/*기타*/}
      <Route path="/*" element={<NotFound/>} />

    </Routes>
  );
}

export default App;
