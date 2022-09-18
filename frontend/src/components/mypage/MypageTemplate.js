import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Responsive from '../common/Responsive';
const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
  
`;

const MypageTemplateBlock = styled.div`

 width: 50rem;
 height: 30rem;
 display: flex;
margin-bottom:1rem;
border: thin solid ;
border-color: #424242;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);
`;


const MypageTemplate = ({ children }) => {
  return (
    <PostListBlock>
    <MypageTemplateBlock>
      
    </MypageTemplateBlock>
    </PostListBlock>
  );
};

export default MypageTemplate;
