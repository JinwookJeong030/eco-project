
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import { Link } from "react-router-dom";
import { WhitePostsItemBox } from '../common/WhiteBox';
import Pagination from '../common/Pagination';
import PaginationMini from '../common/PaginationMini';
import PaginationMyCommuContainer from '../../containers/commu/PaginationMyCommuContainer';
import PaginationContainer from '../../containers/commu/PaginationCommuContainer';
import AskRemoveModal from '../post/AskRemoveModal';
import { useState } from 'react';
const CommuListTotBlock = styled.div` 
margin-left:1rem;
`;
const CommuListBlock = styled(Responsive)`
border: solid 2px;
box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);

padding-top:0.5rem;
padding-left:0.8rem;
padding-right:0.8rem;
padding-bottom:0.5rem;
`;
const MyCommuListBlock = styled(Responsive)`
display:flex;
flex-direction: column;
border: solid 2px;
padding-left:0.8rem;
padding-right:0.8rem;
box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
margin-bottom: 0.5rem;
padding-top:0.5rem;
`;
const MyCommuItemsBlock = styled.div`
display: flex;
flex-direction: row;
`
const Block = styled(WhitePostsItemBox)`
`


const CommuItemInfoBlock = styled.div`
  
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

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
width:25%;
height:16rem;

margin-right:auto;

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
  display:flex;
  padding-bottom: 0.2rem;
  justify-content: flex-end;
`
const Title= styled.div`
   margin:0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow:hidden; 
  text-overflow:ellipsis;
  width:60%;
  font-weight: bold;
  font-size: 1.6rem;
  
  @media (max-width: 768px) {
    margin-top:0rem;
    font-size: 3.5vw;
    width:100%;
  }
  
`
const MyItemTitle = styled.h3`
margin-top:0rem;
padding-left:1rem;
padding-right:1rem;
@media (max-width: 768px) {
  font-size:0.5rem;

}
font-size:1rem;

`

const Contents =styled.div`
  margin-Top: 10px;
`

const MyImage = styled.img`
width: 10rem;
height: 10rem;
border: solid thin;
margin: 0.5rem;
@media (max-width: 950px) {
  margin:0rem;
  height:50%;
  width: 100%;
}
`
const Image = styled.img`
width: 6rem;
height: 6rem;
border: solid thin;
border-width:2px;
margin: 0.5rem;
padding:0;
@media (max-width: 768px) {
  width: 4rem;
  height: 4rem;
  margin-top:auto;
 margin-left:0.2rem;
 margin-right:0.5rem;
 margin-bottom:auto;
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
    <WhitePostsItemBox whiteBoxStyle>
        <Image src={process.env.PUBLIC_URL + "/eco-icon.png"}/>
        <CommuItemInfoBlock>
        <Title>{commu.commu_name}</Title>
        <Contents>{commu.commu_contents}</Contents>
      </CommuItemInfoBlock>
    </WhitePostsItemBox>
    </Link>
    );
  };

  const CommusListError =()=>{return <div>모임을 불러올 수 없습니다...<p/></div>;}
  const Head =styled.div`
    height:3rem;
    display:flex;
    flex-direction:row;
    margin-right:0;
 

  `
  const CommuList = ({ user, search_type, search_contents, onChangeField, onSearch, loading,loadingMy, error, 
    commus, myCommus, showWriteButton }) => {
      const [applyAskModal, setApplyAskModal] = useState(false);
  
      const onApplyClick = () => {
        setApplyAskModal(true);
      }
      const onCancel = () => {
        setApplyAskModal(false);
    
      }
      const onConfirm = () => {
        setApplyAskModal(false);
    
      }

    return (
      <>
      <CommuListTotBlock>
   
        {showWriteButton && (
      <ManagementCommuBlock>
   
        <Button onClick={onApplyClick} postWriteBtn cyan>
          초대관리
        </Button>
         <Button postWriteBtn cyan to="/commu/edit">
          모임 생성
        </Button>        
   
      </ManagementCommuBlock>
        )
    }
 {!loadingMy&&user&&
      <MyCommuListBlock>
       
        <Head> <Title >나의 모임</Title> <PaginationMyCommuContainer/></Head>
       
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
      <Head> <Title>전체 모임</Title>  <PaginationContainer/></Head>
   
      {error? <CommusListError/>:(!loading && commus && (<div>
          {

      commus.map(commu=> (
            <CommuItem commu={commu} key={commu.class_id} />
          ))}
        </div>))}
           </CommuListBlock>
      </CommuListTotBlock>
      <AskRemoveModal
        visible={applyAskModal}
        onConfirm={onConfirm}
        onCancel={onCancel}
        title=""
        discription=""
        discription2=""
      /> 
      </>
    );
  };
  
  export default CommuList;