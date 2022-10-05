import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const SearchBlock = styled.div`
display: flex;
flex-direction: row;
height: 3rem;
width:24rem;
border: thin solid;
box-shadow: 2px 2px 2px rgba(10, 10, 10, 0.3);
`;
const SearchInput = styled.input`
width:10rem;
height:1.7rem;
margin-top:auto;
margin-bottom:auto;
margin-right:0.5rem;
margin-left:0.5rem;
`
const SearchBtn = styled.img`
width:2rem;
height:2rem;
border: thin solid;
padding: 5px;
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
    width: 10rem;
    height: 1.8rem;
    margin-left:0.5rem;
    margin-top:auto;
    margin-bottom:auto;
`
const Search = ({search_type, search_contents , onChangeField, onSearch}) => {

  const onChagneSearchType = (e)=>{
    onChangeField({ key: 'search_type', value: e.target.value });
  }
  const onChagneContents = (e)=>{
    onChangeField({ key: 'search_contents', value: e.target.value });
  }
  return <SearchBlock >
    <SearchCategory value={search_type} onChange={onChagneSearchType}>
      <option value ={"title"}>제목</option>
      <option value ={"contents"}>작성자</option>
      <option value ={"user"}>작성자</option>
      <option value ={"category"}>카테고리</option>
    </SearchCategory>
    <SearchInput value={search_contents} onChange = {onChagneContents} />
    <SearchBtn src={process.env.PUBLIC_URL +"/search-icon.png"} onClick={onSearch}/>
  </SearchBlock>;
};

export default Search;
