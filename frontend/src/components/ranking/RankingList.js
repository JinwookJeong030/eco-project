
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import {IoIosArrowDropdown, IoIosArrowDropup} from 'react-icons/io'
import { Link } from "react-router-dom";
import {WhitePostsItemBox} from '../common/WhiteBox';
import Search from '../common/Search';
const RankingListBlock = styled(Responsive)` 
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  margin-top:auto;
  margin-bottom:auto;
  height:2rem;

`;
const RankingItemBlock = styled(WhitePostsItemBox)`

`
const RankingItemInfoBlock = styled.div`
  display:flex;
  flex-direction:column;
  width: 80.5%;
  height: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right:1rem;
  padding-left:1rem;
  @media (max-width: 768px) {
    width: 90%;
    margin-left:auto;
    margin-right:auto;
   }
`;
const PlantImage = styled.img`
width: 10rem;
height: 10rem;
border: solid thin;
margin: 1rem;
padding:0;
@media (max-width: 768px) {
 margin-left:auto;
 margin-right:auto;
}
`;

const TopRankingItemInfoBlock = ``
const RankingNickName = styled.div`
width: 10rem; 
height:2rem;
font: bold;
margin:0;
padding:0;
color:${palette.gray[6]};
margin-top:5px;
margin-left:5px;
`

const RankingHeader = styled.div`
display:flex;
flex-direction: row;
`




const NoTitle =styled.h1`
margin-left: auto;
margin-right:auto;
color: ${palette.green[0]};
margin-top:3rem;
margin-bottom:3rem;
`


const NoPost =({title})=>{

  return (<RankingItemBlock>

  <NoTitle>{title}</NoTitle>

  </RankingItemBlock>);

}



const RankingItem = ({user}) => {
 
    return (
      <Link to={`/garden/view/${user.user_id}`}>
      <RankingItemBlock whiteBoxStyle>
   
        <PlantImage src={process.env.PUBLIC_URL + "/"+user.leaderplant+".png"}/>
        <RankingItemInfoBlock>
        <RankingNickName> {user.user_name}</RankingNickName>
      </RankingItemInfoBlock>
   
    </RankingItemBlock>
    </Link>
    );
  };
  const RankingList = ({ user, users, loading, error, search_type, search_contents, onChangeField, onSearch, categorys}) => {
     
    if (error) {
      return     (<RankingListBlock><NoPost title={"서버에서 문제가 발생하였습니다..."} /></RankingListBlock>)
    }
    return (
      <RankingListBlock>
        <RankingHeader>
        {!loading && user && <RankingItem user={user} key={user.user_id} />}
        </RankingHeader>
       <RankingHeader>
       <Search/>
        </RankingHeader>
        {!loading && users &&(users.length===0?<NoPost title={"ERROR! no user"} />:(<div>
          {
          users.map(user => (
            <RankingItem user={user} key={user.user_id} />
          ))}
        </div>))}
       
      </RankingListBlock>
    );
  };
  
  export default RankingList;