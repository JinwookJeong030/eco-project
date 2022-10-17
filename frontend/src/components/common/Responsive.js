import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`

  padding-left: 1rem;
  padding-right: 1rem;
  width: 900px;
  margin: 0 auto;

  @media (max-width: 1000px) {
    padding-right: 0rem;
    width: 95%;
   
    
  }
`;

const Responsive = ({ children, ...rest }) => {


  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
