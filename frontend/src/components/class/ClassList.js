
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import { Link } from "react-router-dom";
const ClassListBlock = styled(Responsive)`
border: solid thin;
box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
margin-bottom: 3rem;
`;

const WriteClassButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const ClassItemBlock = styled.div`
display: flex;
margin-bottom:1rem;
border: thin solid ;
border-color: #424242;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);
margin-top:1rem;

`
const ClassItemInfoBlock = styled.div`

  padding-top: 1rem;
  padding-bottom: 1rem;

  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }

  p {
    margin-top: 2rem;
  }
`;

const SubInfo = styled.div`
  color: ${palette.gray[6]};

  span + span::before {
    color: ${palette.gray[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7'; /* 가운뎃점 문자 */
  }
`;

const Title= styled.h2`
  margin:1rem;
  
`
const Contents =styled.div`
  margin-Top: 10px;
`
const Image = styled.img`
width: 10rem;
height: 10rem;
border: solid thin;
margin: 1rem;
`
const ClassItem = ({ class_1 }) => {
    return (
    <ClassItemBlock>
        <Image src={process.env.PUBLIC_URL + "/eco-icon.png"}/>
        <ClassItemInfoBlock>
        <Link to={`/class/@${class_1.class_user}/${class_1.post_id}`}><Title>{class_1.class_name}</Title></Link>
        
        <Contents>{class_1.class_contents}</Contents>

      </ClassItemInfoBlock>
    </ClassItemBlock>
    );
  };
const ClassItemError =()=>{return <div>모임을 불러올 수 없습니다...<p/></div>;}
  const ClassList = ({ classes, loading, error, showWriteButton }) => {
    return (
      <>
           
      <ClassListBlock>
        <Title>나의 모임</Title>
        <WriteClassButtonWrapper>
        {showWriteButton && (<Button cyan to="/class/edit">
            새 글 작성하기
          </Button>)}
        </WriteClassButtonWrapper>

        
        {true? <ClassItemError/>:(!loading && classes && (<div>
          {

          classes.map(class_1 => (
            <ClassItem class={class_1} key={class_1.class_id} />
          ))}
        </div>))}



        
      </ClassListBlock>
      <ClassListBlock>
      <Title>전체 모임</Title>
   
      {true? <ClassItemError/>:(!loading && classes && (<div>
          {

          classes.map(class_1 => (
            <ClassItem class={class_1} key={class_1.class_id} />
          ))}
        </div>))}
           </ClassListBlock>
      </>
    );
  };
  
  export default ClassList;