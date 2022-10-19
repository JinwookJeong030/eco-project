import styled from 'styled-components';
import palette from '../../lib/styles/palette';




const SearchBlock = styled.div`
margin-top:0.5rem;
margin-bottom:0.5rem;
display: flex;
flex-direction: row;
height: 2.6rem;
width:26rem;
border: thin solid;
border-width: 2px;
box-shadow: 2px 2px 2px rgba(10, 10, 10, 0.3);
margin-left:auto;
@media (max-width: 1000px) {
  width: 100%;

}
`;
const SearchInput = styled.input`
width:25rem;
height:1.7rem;
margin-top:auto;
margin-bottom:auto;
margin-right:0.5rem;
margin-left:0.5rem;
@media (max-width: 1000px) {

  width: 90%;
}

`
const SearchBtn = styled.img`
width:2rem;
height:2rem;
border: thin solid;
border-width: 2px;
padding: 5px;
margin-left:auto;
margin-right:6px;
background: ${palette.green[0]};
margin-top:auto;
margin-bottom:auto;
border-radius: 5rem;
&:hover{
    background: ${palette.gray[3]};
}
&:active{
    background: ${palette.gray[5]};
}
`


const SearchCategory = styled.select`
  border-width: 2px;
    width: 8rem;
    height: 1.8rem;
    margin-left:0.5rem;
    margin-top:auto;
    margin-bottom:auto;
    margin-right:0.5rem:
`
const Search = ({search_type, search_contents, onChangeField, onSearch}) => {


  const onChagneSearchType = (e)=>{
    onChangeField({ key: 'search_type', value: e.target.value });
  }
  const onChagneContents = (e)=>{
    onChangeField({ key: 'search_contents', value: e.target.value });
  }
  const onChagneSearchCategory = (e)=>{
    onChangeField({ key: 'search_contents', value: e.target.value});
  }
  return <SearchBlock >
   
    <SearchCategory value={search_type} onChange={onChagneSearchType}>
      <option value ={"user"}>이름</option>
    </SearchCategory>
  

    <SearchInput value={search_contents} onChange = {onChagneContents} />
    <SearchBtn src={process.env.PUBLIC_URL +"/search-icon.png"} onClick={onSearch}/>
  </SearchBlock>;
};

export default Search;
