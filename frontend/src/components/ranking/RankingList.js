import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import { Link } from "react-router-dom";
import Search from '../ranking/Search';
import Podium from './Podium';
import PaginationRankingContainer from '../../containers/ranking/PaginationRankingContainer';
const RankingListBlock = styled(Responsive)` 
`;


const RankingItemBlock = styled.div`
display: flex;
border: 2px solid ;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);
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
const TopPlantImage = styled.img`

width: 9.1rem;
height: 11.7rem;
border: solid thin;
border-width: 2px;
margin-top: 0.5rem;
margin-left:auto;
margin-right:auto;

@media (max-width: 900px) {

  width: 4.9rem;
  height: 6.3rem;

 }
`;
const PlantImage = styled.img`
width: 7.7rem;
height: 9.9rem;
border: solid thin;
border-width: 2px;
margin: 0.5rem;

padding:0;

@media (max-width: 900px) {
  width: 4.9rem;
  height: 7.4rem;
  margin:0.2rem;
 }
`;

const TopRankingItemBlock = styled.div`

display: flex;
flex-direction:column;
margin-top:1rem;
width:110%;
height: 17rem;
border: 2px solid ;
margin-left:auto;
margin-right:auto;
box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);
@media (max-width: 900px) {
  width: 6rem;
  height: 11rem;
  
 }


`
const TopRankingItemInfoBlock =styled.div`
  display:flex;
  flex-direction:column;
  padding:0.2rem;
  height: 100%;
  @media (max-width: 900px) {
    width:100%;
    margin-left:auto;
    margin-right:auto;
   }
`
const TopRankingPoint = styled.div`
text-align:center;
margin-top:0.5rem;
@media (max-width: 900px) {
  font-size: 0.4rem;
 }
`
const TopRankingNickName = styled.div`
width: 90%; 
height:1rem;
font-size:1rem;
font-weight: bold;
margin:0;
text-align:center;
padding:0;

margin-left:5px;
@media (max-width: 900px) {
  font-size: 0.4rem;
  
 }
`
const TopRankingItem =({user,plant, rank})=>{
  return (

    <Link to={`/garden/${user.user_id}/1`}>
      <TopRankingItemBlock >
   
      {plant&&<TopPlantImage src={user.user_leader_plant?(process.env.PUBLIC_URL + "/plant_img/"+plant.plant_img_path+".gif"):(process.env.PUBLIC_URL+process.env.PUBLIC_URL+"/plant_img/plant_no.png")}/>
}
        <TopRankingItemInfoBlock>
        <TopRankingNickName> {user.user_name}</TopRankingNickName>
        <TopRankingPoint> ??? ?????????: {user.user_total_point}</TopRankingPoint>
      </TopRankingItemInfoBlock>

    </TopRankingItemBlock>
    </Link>
  )
}

const RankingNickName = styled.div`
width: 10rem; 
height:2rem;
font-weight: bold;
margin:0;
padding:0;
margin-top:5px;
margin-left:5px;
`

const RankingHeader = styled.div`
display:flex;
flex-direction: row;
`

const Ranking =styled.div`
font-size:1.5rem;
font-weight:bold;
width:5rem;
margin-top:0.5rem;

margin-left:1rem;
`


const NoTitle =styled.h1`
margin-left: auto;
margin-right:auto;
color: ${palette.green[0]};
margin-top:3rem;
margin-bottom:3rem;
font-size: 1.5rem;
`


const NoPost =({title})=>{

  return (<RankingItemBlock>

  <NoTitle>{title}</NoTitle>

  </RankingItemBlock>);

}



const RankingItem = ({user,plant,rank, myRanking}) => {
 
    return (
      <Link to={`/garden/${user.user_id}/1`}>
      <RankingItemBlock>
   
        {!myRanking&&<Ranking>{rank}???</Ranking>}
        <RankingItemInfoBlock>
        <RankingNickName> {user.user_name}</RankingNickName>
        <RankingNickName> ??? ?????????: {user.user_total_point}</RankingNickName>
      </RankingItemInfoBlock>
      {plant&&<PlantImage src={user.user_leader_plant?(process.env.PUBLIC_URL + "/plant_img/"+plant.plant_img_path+".gif"):(process.env.PUBLIC_URL+"/plant_img/plant_no.png")}/>
}
    </RankingItemBlock>
    </Link>
    );
  };
  const RankingList = ({ plant, user, pageNum, ranking, loading, error, search_type, search_contents, onChangeField, onSearch}) => {
  
    if (error) {
      return     (<RankingListBlock><NoPost title={"???????????? ????????? ?????????????????????..."} /></RankingListBlock>)
    }
    return (
      <RankingListBlock>
 
        {/* {!loading && user &&plant && <RankingItem user={user} key={user.user_id} plant={plant} myRanking={true} />} */}

       <RankingHeader>
        
       <Search search_type={search_type} search_contents={search_contents} onChangeField={onChangeField} onSearch={onSearch}/>
       
        </RankingHeader>
       
       
        {!loading && ranking&& plant &&(ranking.length===0?<NoPost title={"???????????? ???????????? ????????????!"} />:(<div> { pageNum===1?
        <>
            <Podium>
             {ranking.length>=1?<TopRankingItem user={ranking[0]} plant={plant[0]} key={1} />:<></>}
             {ranking.length>=2?<TopRankingItem user={ranking[1]} plant={plant[1]} key={2} />:<></>}
             {ranking.length>=3?<TopRankingItem user={ranking[2]} plant={plant[2]} key={3} />:<></>}
             </Podium>
             {ranking.length>=4?<RankingItem user={ranking[3]} plant={plant[3]} key={4} rank={4}/>:<></>}
             {ranking.length>=5?<RankingItem user={ranking[4]} plant={plant[4]} key={5} rank={5}/>:<></>}
             </>
             :    
          ranking.map((user,idx) => (
            <RankingItem user={user} key={user.user_id} plant={plant[idx]} rank={1+(pageNum-1)*5+idx} />
          ))
          }
        </div>))}
       <PaginationRankingContainer/>
      </RankingListBlock>
    );
  };
  
  export default RankingList;