import styled from 'styled-components';
import palette from '../../lib/styles/palette';




const SearchBlock = styled.form`
display: flex;
flex-direction: row;
height: 3rem;
width:24rem;
border: thin solid;
box-shadow: 2px 2px 2px rgba(10, 10, 10, 0.3);
`;
const SearchInput = styled.input`
width:25rem;
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
    width: 8rem;
    height: 1.8rem;
    margin-left:0.5rem;
    margin-top:auto;
    margin-bottom:auto;
    margin-right:0.5rem:
`
const SearchInputCategory = ({categorys, onChagneSearchCategory})=>{

  console.log(categorys+"df");
  const categoryOption = categorys&&categorys.map(category =>(<option key={category.category_id}>{category.category_id}</option>));
  return <SearchCategory onChange={onChagneSearchCategory}>
    {categoryOption}
  </SearchCategory>

}
const Search = ({search_type, search_contents, onChangeField, onSearch, categorys}) => {


  const onChagneSearchType = (e)=>{
    onChangeField({ key: 'search_type', value: e.target.value });
  }
  const onChagneContents = (e)=>{
    onChangeField({ key: 'search_contents', value: e.target.value });
  }
  const onChagneSearchCategory = (e)=>{
    onChangeField({ key: 'search_contents', value: e.target.value});
  }
  console.log(search_type);
  return <SearchBlock >
   
    <SearchCategory value={search_type} onChange={onChagneSearchType}>
      <option value ={"title"}>제목</option>
      <option value ={"contents"}>내용</option>
      <option value ={"user"}>작성자</option>
      <option value ={"category"}>카테고리</option>
    </SearchCategory>
  
    {!(search_type === "category")?
    <SearchInput value={search_contents} onChange = {onChagneContents} />:
    <SearchInputCategory value={search_contents} categorys={categorys} onChagneSearchCategory={onChagneSearchCategory}/>}
    <SearchBtn src={process.env.PUBLIC_URL +"/search-icon.png"} onClick={onSearch}/>
  </SearchBlock>;
};

export default Search;
