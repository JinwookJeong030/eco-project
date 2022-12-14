import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  z-index:100;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);

`;

const HeaderIcon = styled.img`
width:2.5rem;
height:2.5rem;
margin-right:5px;
vertical-align: bottom;
@media (max-width: 1000px) {
  height:2rem;
  width:2rem;
  }
`
const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.125rem;
    font-weight: 900;
    letter-spacing: 2px;
    margin-right: auto;
  }
  .right {
    display: flex;
    align-items: center;
  }
  @media (max-width: 1000px) {
    height:3rem;
    width:97%;
    }
`;
const Spacer = styled.div`
  height: 4rem;
  @media (max-width: 1000px) {
    height:3rem;
    }
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
  @media (max-width: 1000px) {
   font-size: 0.7rem;
   margin-right: 0.5rem;
   
  }
  
`;

const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link  to="/">
        <HeaderIcon  src={ process.env.PUBLIC_URL + "/eco-icon.png" } />
        </Link>
          <Link to="/" className="logo">
            EcoWeb
          </Link>
          {user ? (
            <div className="right">
              <UserInfo> 포인트: {user.user_total_point}  {user.user_name} 님 
              </UserInfo>
              <Button  onClick={onLogout} postWriteBtn> 로그아웃</Button>
            </div>
          ) : (
            <div className="right">
              <Button cyan to="/login" postWriteBtn> 로그인</Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer/>
          
     
    </>
  );
};

export default Header;
