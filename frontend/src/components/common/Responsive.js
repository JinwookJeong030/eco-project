import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`

  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;
  margin: 0 auto;

  @media (max-width: 1300px) {
    width: 93%;
    
  }
`;

const Responsive = ({ children, ...rest }) => {


  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
