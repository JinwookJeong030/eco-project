
import styled from 'styled-components';
import Responsive from '../common/ResponsiveHeader';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';

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
const ClassItem = () => {
    return (
    <ClassItemBlock>
        <Image src={process.env.PUBLIC_URL + "/eco-icon.png"}/>
        <ClassItemInfoBlock>
        <Title>모임 이름</Title>
        <Contents>모임 설명</Contents>
        <SubInfo username="username" publishedDate={new Date()} />
      </ClassItemInfoBlock>
    </ClassItemBlock>
    );
  };

  const PostList = () => {
    return (
      <>
           
      <ClassListBlock>
        <Title>나의 모임</Title>
        <WriteClassButtonWrapper>
          <Button cyan to="/class/edit">
            새 모임 생성 
          </Button>
        </WriteClassButtonWrapper>
        <div>
          <ClassItem />
          <ClassItem />
          

        </div>
      </ClassListBlock>
      <ClassListBlock>
      <Title>전체 모임</Title>
      <ClassItem />
          <ClassItem />
          <ClassItem />
          <ClassItem />
          <ClassItem />
          <ClassItem />
          <ClassItem />
          <ClassItem />
           </ClassListBlock>
      </>
    );
  };
  
  export default PostList;