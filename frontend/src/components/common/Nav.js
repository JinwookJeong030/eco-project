import styled from 'styled-components';

import { Link } from 'react-router-dom';

const NavBlock = styled.div`

height: calc( 100vh - 4rem );  
width: ${props=>(props.hidingState? '3rem':'12rem' )};
background: #81F781;
float:left;
z-index:29;
border-right: solid 2px #088A68;
.hid {
  width: 5rem;
}

  @media (max-width: 1000px) {
    position:fixed;
    height:100%;
  }

`;
const Wrapper = styled.ul`
margin:0;

font-weight: 600;
list-style:none;
width:100%;
padding-left:0;
border-top: solid 2px #088A68;
border-bottom: solid 2px #088A68;
 
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
border-top: solid 2px #088A68;

&:hover{
  color:#81F781;
  background:#04B486;
}
&:active{
  color:#81F781;
  background:#088A68;
}
`



const Nav = ({user, onHidingMenu ,hidingState}) => {

    return (
        <>
        <NavBlock  hidingState={hidingState}>
      
            <Wrapper >
              <MenuIcon src={process.env.PUBLIC_URL +"/menu-icon.png"}onClick={onHidingMenu}/>
              <Link to='/'><Menu>
                <Icon src={process.env.PUBLIC_URL +"/post-icon.png"}/>{hidingState?'':'게시판'}</Menu></Link>
                {/* <Link to='/commu/list'><Menu><Icon src={process.env.PUBLIC_URL +"/class-icon.png"}/>{hidingState?'':'모임'}</Menu></Link> */}

            <Link to='/ranking'> <Menu><Icon src={process.env.PUBLIC_URL +"/ranking-icon.png"}/>{hidingState?'':'랭킹'}</Menu></Link>
    
            {user? <>
              <Link to={'/garden/'+user.user_id+'/1'}> <Menu><Icon src={process.env.PUBLIC_URL +"/mission-icon.png"}/>{hidingState?'':'마이 가든'}</Menu></Link>
                <Link to='/mypage'>
                  <Menu><Icon src={process.env.PUBLIC_URL +"/mypage-icon.png"}/>{hidingState?'':'마이페이지'}</Menu>
                </Link>
                </>
                :<>
                  <Link to={'/garden'}> <Menu><Icon src={process.env.PUBLIC_URL +"/mission-icon.png"}/>{hidingState?'':'마이 가든'}</Menu></Link>
                </>
}

           </Wrapper>
        </NavBlock>
      
        
        </>
    );
};

export default Nav;