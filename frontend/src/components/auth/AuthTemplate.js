import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Responsive from '../common/Responsive';

const AuthTemplateBlock = styled(Responsive)`
  margin-top:8rem;
  z-index:0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AuthIcon =styled.img`
vertical-align: bottom;
width: 60px;
height:60px;


`
const WhiteBox = styled.div`
  .logo-area {
    font-size:30px;
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  
    
  }
  
  box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
  border: solid thin;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>

      <Link to="/">
        
        <div className="logo-area">
         EcoWeb
        </div>
        </Link>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
