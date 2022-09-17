import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';

const NavBlock = styled.div`
.hid {
  width: 5rem;
  }
position: fixed;
height: 100%;  
width: ${props=>(props.hidingState? '3rem':'12rem' )};
background: #81F781;
  

`;
const Wrapper = styled.ul`
margin:0;

font-weight: 600;
list-style:none;
width:100%;
padding-left:0;

border-bottom: solid thin;
 
`;
const MenuIcon = styled.img`
margin-left: 8px;
margin-top:5px;
margin-bottom:5px;
width:30px;
height:30px;
`
const Icon = styled.img`
 width:25px;
 height:25px;
 color:#81F781;
 padding:0;
 margin:0;
 vertical-align: bottom;
 margin-left: 10px;
 margin-right: 18px;
`
const Menu = styled.li`
padding-top: 15px;
padding-bottom: 15px;

font-size: 1.2rem;
color:#088A68;
display: normal;
width:100%;
border-top: solid thin;

&:hover{
  color:#81F781;
  background:#04B486;
}
&:active{
  color:#81F781;
  background:#088A68;
}
`

const Spacer = styled.nav`


`;

const Nav = ({onHidingMenu ,hidingState}) => {

    return (
        <>
        <NavBlock  hidingState={hidingState}>
      
            <Wrapper >
              <MenuIcon src={process.env.PUBLIC_URL +"menu-icon.png"}onClick={onHidingMenu}/>
              <Menu><Icon src={process.env.PUBLIC_URL +"post-icon.png"}/>{hidingState?'':'게시판'}</Menu>
              <Menu><Icon src={process.env.PUBLIC_URL +"class-icon.png"}/>{hidingState?'':'모임'}</Menu>
              <Menu><Icon src={process.env.PUBLIC_URL +"mission-icon.png"}/>{hidingState?'':'미션&식물'}</Menu>
              <Menu><Icon src={process.env.PUBLIC_URL +"mypage-icon.png"}/>{hidingState?'':'마이페이지'}</Menu>
              
           </Wrapper>
        </NavBlock>
        <Spacer/>
        
        </>
    );
};

export default Nav;