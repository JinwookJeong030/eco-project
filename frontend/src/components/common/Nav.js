import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';

const NavBlock = styled.div`
position: fixed;
height: 100%;  
width: 12rem;
background: green;
box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.08);


`;
const Wrapper = styled(Responsive)`
  height: 5rem;  
  width: 100%;
  background: red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;

 
`;

const Spacer = styled.nav`
width:100%; 

`;

const MenuInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;
const Nav = () => {
    return (
        <>
        <NavBlock>
            <Wrapper>
              <MenuInfo>메뉴</MenuInfo>
            </Wrapper>
        </NavBlock>
        <Spacer/>
        
        </>
    );
};

export default Nav;