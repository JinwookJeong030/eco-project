import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Responsive from '../common/Responsive';
import WhiteBox from '../common/WhiteBox';

const EditCommuBlock = styled(WhiteBox)`

`
const CategoryBlock = styled(Responsive)`
width:100%;
display: flex;
flex-direction: row;
margin-left:10px;
padding:0;
@media (max-width: 768px) {
  height:1.4rem;
}
`

const Select= styled.select`
width: 7rem;
height: 2rem;
font-size: 1.2rem;
margin-bottom: 15px;
@media (max-width: 768px) {
  font-size: 0.8rem;
  height:1.2rem;
}
`


const TitleInput = styled.input`

  outline: none;
  font-size: 1.2rem;
  width: 100%;
  height: 2.5rem;
  margin-top:auto;
  margin-bottom:1.2rem;
  margin-left:0.5rem;
}
`;

const InputContents = styled.input`
    width:100%;
    height:8rem;
    margin-bottom:0.5rem;
`;


const Image = styled.img`
height:10rem;
width:10rem;
margin-top:0.2rem;
margin-bottom:1rem;
margin-left: 0.05rem;
border: 1px solid;
`
const InputFile= styled.input`
display: none;
`
const RowDiv = styled.div`
display:flex;
flex-direction:row;
`
const BtnBlock = styled.div`
display:flex;
justify-content: end;

`
const ImageFileUpload =({handleAddImages, src})=>{

    return(  <>
      <label  htmlFor="file" type="file" name="file">
        <Image src={src}/>
      </label>
  
      <InputFile type="file" name="file" id="file" accept="image/*" capture="camera" multiple onChange={handleAddImages}/>
      </>
      );
  }



const EditCommu = ({commu_name, commu_contents, onPublish,onCancel, onChangeField}) => {
    const onChangeTitle = e => {
        onChangeField({ key: 'post_title', value: e.target.value });
      };
    const onChangeContents = e => {
        onChangeField({ key: 'post_title', value: e.target.value });
      };
    const onChangeCategory = e =>{
        onChangeField({ key: 'post_category', value: e.target.value });
      }
      const [showImages, setShowImages] = useState();
    
     
    const handleAddImages = (e) => {
        const imageLists = e.target.files;
     
        
        let imageUrlLists = [];
    
      
        const currentImageUrl = URL.createObjectURL(imageLists[0]);
        imageUrlLists.push(currentImageUrl);
        
    
        setShowImages(imageUrlLists);
      };
    
    
    return (
        <EditCommuBlock>
        <form encType='multipart/form-data' onSubmit={onPublish}>

        <RowDiv>
        <ImageFileUpload src={showImages} handleAddImages={handleAddImages}/>    
        {/* <CategoryBlock>
        <Select placeholder="지역을 선택하세요.">
        </Select>
        </CategoryBlock> */}
          <TitleInput 
        placeholder="제목을 입력하세요." 
        onChange={onChangeTitle} 
        value={commu_name}
        maxLength="50"
        />
        </RowDiv>
  
        <InputContents
         placeholder="내용을 입력하세요." 
         onChange={onChangeContents} 
         value={commu_contents}
         maxLength="150"
        />
        <BtnBlock>
        <Button onCancel={onCancel}>취소</Button>
        <Button cyan onSubmit={onPublish}>생성하기</Button>
        </BtnBlock>
        </form>
        </EditCommuBlock>
    );
};

export default EditCommu;