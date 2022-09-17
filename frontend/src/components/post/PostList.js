
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
  
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;
const PostItemBlock = styled.div`
display: flex;
margin-bottom:1rem;
border: thin solid ;
border-color: #424242;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);

`
const PostItemInfoBlock = styled.div`

  padding-top: 3rem;
  padding-bottom: 3rem;
  /* 맨 위 포스트는 padding-top 없음 */
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
  /* margin-top: 1rem; */
  color: ${palette.gray[6]};

  /* span 사이에 가운뎃점 문자 보여 주기 */
  span + span::before {
    color: ${palette.gray[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7'; /* 가운뎃점 문자 */
  }
`;


const Image = styled.img`
width: 10rem;
height: 10rem;
border: solid thin;
margin: 1rem;
`
const PostItem = () => {
    return (
    <PostItemBlock>
        <Image src={process.env.PUBLIC_URL + "eco-icon.png"}/>
        <PostItemInfoBlock>
        <h2>제목</h2>
        <SubInfo username="username" publishedDate={new Date()} />
        <p>포스트 내용</p>
      </PostItemInfoBlock>
    </PostItemBlock>
    );
  };

  const PostList = () => {
    return (
      <PostListBlock>
        <WritePostButtonWrapper>
          <Button cyan to="/write">
            새 글 작성하기
          </Button>
        </WritePostButtonWrapper>
        <div>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />

        </div>
      </PostListBlock>
    );
  };
  
  export default PostList;