
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import { Link } from "react-router-dom";
import { WhitePostsItemBox } from '../common/WhiteBox';
import Pagination from '../common/Pagination';
const CommuListTotBlock = styled.div` 
margin-left:1rem;
`;
const CommuListBlock = styled(Responsive)`
border: solid thin;
border-width: 2px;
box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
margin-bottom: 3rem;
`;
const MyCommuListBlock = styled(Responsive)`
display:flex;
flex-direction: column;
border: solid thin;
box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
border-width: 2px;
margin-bottom: 1.5rem;
`;
const MyCommuItemsBlock = styled.div`
display: flex;
flex-direction: row;
`
const Block = styled(WhitePostsItemBox)`
`
const WriteCommuButtonWrapper = styled.div`
  width: 1024px;
  display: flex;
  justify-content: flex-end;
  padding-right:1rem;
  @media (max-width: 1300px) {
    width: 105%;
    padding-right:0rem;
  }
  
`;
const CommuItemBlock = styled.div`
display: flex;
border: thin solid ;
border-width: 2px;
border-color: #424242;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);
margin-top:0.5rem;
margin-bottom:0.5rem;

`
const CommuItemInfoBlock = styled.div`
  
  padding-top: 1rem;
  padding-bottom: 1rem;

  h2 {
    font-size: 2rem;
    margin-left:0;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }

`;
const MyCommuItemBlock = styled(Link)`

display: flex;
flex-direction: row;
width:30%;
height:16rem;
margin-left:auto;
margin-right:auto;
margin-top:1rem;
margin-bottom:1rem;

border: thin solid ;
border-width: 2px;
border-color: #424242;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);
@media (max-width: 768px) {
  margin-left:0.2rem;
  margin-right:0.2rem;
  height:80%;
  width: 100%;
}


`

const MyCommuItemInfoBlock = styled.div`
 
  margin-left:auto;
  margin-right: auto;

`;


const ManagementCommuBlock =styled(Responsive)`
  padding-top: 1rem;
  padding-bottom: 1rem;
`
const Title= styled.div`
  font-size:1.5rem;
  font-weight:bold;

  
`
const MyItemTitle = styled.h3`
margin-top:0rem;
padding-left:1rem;
padding-right:1rem;

`
const MyItemContents = styled.h3`
margin-left:auto;
margin-right:auto;
`
const Contents =styled.div`
  margin-Top: 10px;
`

const MyImage = styled.img`
width: 10rem;
height: 10rem;
border: solid thin;
margin: 1rem;
@media (max-width: 950px) {
  margin-top:1rem;;
  margin-left:0.5rem;;

  height:50%;
  width: 90%;
}
`
const Image = styled.img`
width: 10rem;
height: 10rem;
border: solid thin;
margin: 1rem;
@media (max-width: 950px) {
  width: 30%;
  height:30%
}
`
const NoTitle =styled.h1`
margin-left: auto;
margin-right:auto;
color: ${palette.green[0]};
margin-top:3rem;
margin-bottom:3rem;
`
const NoItem =({title})=>{
  return (
<Block>
<NoTitle>{title}</NoTitle>
</Block>
);
}
const MyCommuItem = ( {commu, pages} ) =>{
  return (
  
    <MyCommuItemBlock to={`/commu/view/${commu.commu_id}`}>

      <MyCommuItemInfoBlock>
      <MyImage src={process.env.PUBLIC_URL + "/eco-icon.png"}/>
       <MyItemTitle>{commu.commu_name}</MyItemTitle>
      </MyCommuItemInfoBlock>
  
    </MyCommuItemBlock>
   
  
    );
}

const CommuItem = ({ commu }) => {
    return (<Link to={`/commu/view/${commu.commu_id}`}>
    <CommuItemBlock >
        <Image src={process.env.PUBLIC_URL + "/eco-icon.png"}/>
        <CommuItemInfoBlock>
        <Title>{commu.commu_name}</Title>
        <Contents>{commu.commu_contents}</Contents>
      </CommuItemInfoBlock>
    </CommuItemBlock>
    </Link>
    );
  };

  const CommusListError =()=>{return <div>모임을 불러올 수 없습니다...<p/></div>;}


  const CommuList = ({ user, search_type, search_contents, onChangeField, onSearch, loading, error, 
    commus, myCommus, showWriteButton }) => {


    return (
      <CommuListTotBlock>
   
        {showWriteButton && (
         
      <ManagementCommuBlock>
      <WriteCommuButtonWrapper>
      <Button cyan to="/commu/management">
      가입 관리
      </Button> 
      <Button cyan to="/commu/edit">
      모임 생성
      </Button>        
        </WriteCommuButtonWrapper>
        </ManagementCommuBlock>
        )
    }
 {user&&
      <MyCommuListBlock>
        <></>
        <Title >나의 모임</Title>
        <Pagination/>
     <MyCommuItemsBlock>
        {error?<CommusListError/>:(!loading && myCommus&&(myCommus===[]? <NoItem title={"현재 가입된 모임이 없습니다."}/>:<>
          {
myCommus.map(commu => (
            <MyCommuItem commu={commu} key={commu.class_id} />
          ))}
        </>))}
        </MyCommuItemsBlock>
      </MyCommuListBlock>}
      <CommuListBlock>
      <Title>전체 모임</Title>
   
      {error? <CommusListError/>:(!loading && commus && (<div>
          {

      commus.map(commu=> (
            <CommuItem commu={commu} key={commu.class_id} />
          ))}
        </div>))}
           </CommuListBlock>
      </CommuListTotBlock>
    );
  };
  
  export default CommuList;