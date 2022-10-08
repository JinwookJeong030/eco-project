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


const RankingItemBlock = styled.div`
display: flex;
border: thin solid ;
border-width: 2px;
border-color: #424242;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);
margin-top:0.5rem;
margin-bottom:0.5rem;

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

`;
const PlantImage = styled.img`
width: 9.1rem;
height: 11.7rem;
border: solid thin;
border-width: 2px;
margin: 1rem;
padding:0;
@media (max-width: 768px) {
 margin-left:auto;
 margin-right:auto;
}
@media (max-width: 1024px) {
  width: 5.6rem;
  height: 7.2rem;
  margin:1rem;
 }
`;

const TopRankingItemInfoBlock = ``
const RankingNickName = styled.div`
width: 10rem; 
height:2rem;
font: bold;
margin:0;
padding:0;
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
        <RankingNickName> {user.user_total_point}</RankingNickName>
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
 
        {!loading && user && <RankingItem user={user} key={user.user_id} />}
   
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