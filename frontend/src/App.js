import React from 'react';

import PostListPage from './pages/post/PostListPage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import PostViewPage from './pages/post/PostViewerPage';
import RegisterPage from './pages/auth/RegisterPage';
import EditPostPage from './pages/post/EditPostPage';
import CommuListPage from './pages/commu/CommuListPage';
import CommuViewPage from './pages/commu/CommuViewPage';
import CommuEditPage from './pages/commu/CommuEditPage';
import CommuManagementPage from './pages/commu/CommuManagementPage';
import CommuNoticePage from './pages/commu/CommuNoticePage';
import CommuEditNoticePage from './pages/commu/CommuEditNoticePage';
import MypagePage from './pages/mypage/MypagePgae'
import MainMission from './pages/plant/PlantPage'
import NotFound from './pages/NotFound'
import RankingPage from './pages/ranking/RankingPage';
import { Helmet } from 'react-helmet-async';


//script set PORT=80
//배포 시 npx serve -l 80 -s  build
function App() {
  return (
    <>
    <Helmet><title>ECO_WEB</title></Helmet>
    <Routes>
      {/*메인 - 게시물 리스트*/}
      <Route path="/" element={<PostListPage />} />

      {/*로그인, 회원가입*/}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
     
    

      {/*---게시글 작성메뉴*/}
      {/*게시물 리스트*/}
      <Route path="/post/list" element={<PostListPage />} />
      {/*게시물 조회*/}
      <Route path="/post/view">
        <Route index element={<PostListPage />} />
        <Route path=":id" element={<PostViewPage />} />
      </Route>
      {/*게시물 작성,수정*/}
      <Route path="/post/edit" element={<EditPostPage />} />

      {/*---모임 메뉴*/}
      {/*모임 리스트*/}
      <Route path="/commu/list" element={<CommuListPage />} />
      {/*모임 관리 */}
      <Route path="/commu/management" element={<CommuManagementPage/>} />
      {/*모임 조회*/}
      <Route path="/commu/view">
        <Route index element={<PostListPage />} />
        <Route path=":id" element={<CommuViewPage />} />
      </Route>
      {/*모임 공지글 조회 */}
      <Route path="/commu/notice/:cn_id" element={<CommuNoticePage/>} />
      {/*모임 공지글 작성 */}
      <Route path="/commu/editNotice/:cn_id" element={<CommuEditNoticePage/>} />
      {/*모임 생성,수정*/}
      <Route path="/commu/edit" element={<CommuEditPage />} />
      
      

      {/*미션 & 식물 메뉴*/}
      <Route path="/mission/myMission" element={<MainMission />} />
      {/*마이페이지 메뉴*/}
      <Route path="/mypage" element={<MypagePage />} />
      {/*랭킹 메뉴*/}
      <Route path="/ranking" element={<RankingPage/>} />
      {/*null*/}
      <Route path="/*" element={<NotFound/>} />

    </Routes>
    </>
  );
}

export default App;
