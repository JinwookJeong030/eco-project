import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';

const NavBlock = styled.span`
position: fixed;
height: 100%;  
width: 12rem;
background: green;
box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.08);

`;
const Wrapper = styled(Responsive)`
  width: 12rem;
  display: flex;
  align-items: center;

 
`;

const Spacer = styled.div`
  width: 4rem;
`;

const Nav = () => {
    return (
        <>
        <NavBlock>
            <Wrapper></Wrapper>
            <></>
        </NavBlock>
        <Spacer />
        </>
    );
};

export default Nav;