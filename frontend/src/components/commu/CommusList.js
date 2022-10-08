
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import { Link } from "react-router-dom";
const CommuListBlock = styled(Responsive)`
border: solid thin;
box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
margin-bottom: 3rem;
`;
const MyCommuListBlock = styled(Responsive)`
display:flex;
flex-direction: column;
border: solid thin;
box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
margin-bottom: 1.5rem;
`;
const MyCommuItemsBlock = styled.div`
display: flex;
flex-direction: row;
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
margin-bottom:1rem;
border: thin solid ;
border-color: #424242;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);
margin-top:1rem;

`
const CommuItemInfoBlock = styled.div`
  
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
const MyCommuItemBlock = styled(Link)`
display: flex;
flex-direction: row;
width:30%;
height:16rem;
margin-left:auto;
margin-right:auto;
margin-bottom:2rem;

border: thin solid ;
border-color: #424242;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);


`
const MyCommuItemInfoBlock = styled.div`
 
  margin-left:auto;
  margin-right: auto;

`;


const ManagementCommuBlock =styled(Responsive)`
  padding-top: 1rem;
  padding-bottom: 1rem;
`
const Title= styled.h2`
  margin:1rem;
  
  
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

const Image = styled.img`
width: 10rem;
height: 10rem;
border: solid thin;
margin: 1rem;
`
const MyCommuItem = ( {commu, pages} ) =>{
  return (
  
    <MyCommuItemBlock to={`/commu/view/${commu.commu_id}`}>

      <MyCommuItemInfoBlock>
      <Image src={process.env.PUBLIC_URL + "/eco-icon.png"}/>
       <MyItemTitle>{commu.commu_name}</MyItemTitle>
      </MyCommuItemInfoBlock>
  
    </MyCommuItemBlock>
   
  
    );
}

const CommuItem = ({ commu }) => {
    return (<Link to={`/commu/view/${commu.commu_id}`}>
    <CommuItemBlock>
        <Image src={process.env.PUBLIC_URL + "/eco-icon.png"}/>
        <CommuItemInfoBlock>
        <Title>{commu.commu_name}</Title>
        <Contents>{commu.commu_contents}</Contents>
      </CommuItemInfoBlock>
    </CommuItemBlock>
    </Link>
    );
  };
const ClassItemError =()=>{return <div>모임을 불러올 수 없습니다...<p/></div>;}
  const CommuList = ({ search_type, search_contents, onChangeField, onSearch, loading, error, 
    commus, myCommus, showWriteButton }) => {


    return (
      <>
   
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
 
      <MyCommuListBlock>
        <Title>나의 모임</Title>
     <MyCommuItemsBlock>
        {error?<ClassItemError/>:(!loading && myCommus && (<>
          {
myCommus.map(commu => (
            <MyCommuItem commu={commu} key={commu.class_id} />
          ))}
        </>))}
        </MyCommuItemsBlock>
      </MyCommuListBlock>
      <CommuListBlock>
      <Title>전체 모임</Title>
   
      {error? <ClassItemError/>:(!loading && commus && (<div>
          {

      commus.map(commu=> (
            <CommuItem commu={commu} key={commu.class_id} />
          ))}
        </div>))}
           </CommuListBlock>
      </>
    );
  };
  
  export default CommuList;