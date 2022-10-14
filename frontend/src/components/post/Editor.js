import React, { useRef, useEffect, useState } from "react";
import ReactQuill from 'react-quill';
import './EditorQuill.css'
import Quill from "quill";
import 'react-quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import Responsive from "../common/Responsive";
import styled from "styled-components";
import PostActionBtn from "./PostActionBtn";
import { useLocation } from "react-router-dom";
import Button from "../common/Button";
import palette from "../../lib/styles/palette";

const EditorBlock = styled(Responsive)`
  /* 페이지 위아래 여백 지정 */
  padding-top: 0.8rem;
  border: solid 2px;
  padding-left:0rem;
  padding-right:0rem;
  box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.3);
  @media (min-width: 1100px) {
    width: 50rem;
  }
  @media (max-width: 1050px) {
    width: 93%;
    margin-left:1.3rem;
  
  }
  
`;
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
const Mission = styled.div`
height: 2rem;
border: solid thin;
border-radius: 2px;
padding:2px;
padding-left:10px;
padding-right:10px;
margin-left:1rem;
font-weight: bold;
@media (max-width: 768px) {
  font-size: 0.8rem;
  height:1.2rem;
  margin-left:0.5rem;
}
`

const TitleInput = styled.input`
  margin-left:10px;
  outline: none;

  font-size: 1.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  width: 95%;
  :focus{
    border-color:#0982f0;
    outline: none;}
    :focus + label {
      color: #0083cb;
  }
@media (max-width: 768px) {
  width:95%;
  height:1.8rem;
  font-size: 1.2rem;
  padding-top: 0.5rem;
  margin-top:0.2rem;
  
}
}
`;

const QuillWrapper = styled.div`

  .ql-editor {
    padding: 0;
    min-height: 300px;
    @media (max-width: 768px) {
      min-height: 250px;
    }
    max-height: 300px;
    font-size: 1rem;
    max-length: '2';
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
   
  }
`;
const EditBody = styled.div`
  padding:5px;
  margin-left:0.2rem;
  margin-right:0.2rem;
  
`

const ImageFilesBlock =styled.div`
  display: flex;
  flex-direction: rwo;
  height:6.5rem;
  width:95%;
  padding-left:0.2rem;
  border: 2px solid;
  margin-left:10px;
  margin-right:auto;
  overflow: auto;
  white-space: nowrap;
 
  ::-webkit-scrollbar {
    width: 10px;
    height: 6px;
    box-shadow: inset 0px 0px 5px white;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${palette.green[0]};
    box-shadow: inset 0px 0px 5px white;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: grey;
`
const Image = styled.img`
height:5.8rem;
width:5.8rem;
margin-top:0.2rem;
margin-bottom:auto;
margin-left: 0.05rem;
margin-right: 0.05rem;
border: 1px solid;

`
const InputFile= styled.input`
display: none;
`
const ImageFileUpload =({handleAddImages})=>{

  return(  <>
    <label for="file"  >
      <Image src={process.env.PUBLIC_URL + "/camera-icon.png"}/>
    </label>
    <InputFile type="file" name="file" id="file" accept="image/*" capture="camera" multiple onChange={handleAddImages}/>
    </>
    );
}
let Parchment = Quill.import('parchment');
    var lineHeightConfig = {
      scope: Parchment.Scope.INLINE,
      whitelist: [
        '1.0',
        '1.2',
        '1.5',
        '1.6',
        '1.8',
        '2.0',
        '2.4',
        '2.8',
        '3.0',
        '4.0',
        '5.0'
      ]
    };
    var lineHeightClass = new Parchment.Attributor.Class('lineheight', 'ql-line-height', lineHeightConfig);
    var lineHeightStyle = new Parchment.Attributor.Style('lineheight', 'line-height', lineHeightConfig);
    Parchment.register(lineHeightClass);
    Parchment.register(lineHeightStyle);

const Editor =({categorys,category,  post_mission, mission, post_title,post_contents,onChangeField, onPublish, onCancel })=>{
    const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
    const quillInstance =  useRef(null); 


    useEffect(() => {
  const modules = {
    toolbar: [

      [{ 'color': [] }, { 'background': [] }],
      ['bold','underline', 'italic','strike',],
      [ { 'align': ['' , 'center' , 'right' , 'justify'] },{'indent': '-1'}, {'indent': '+1'},{
        'list': ['ordered', 'bullet']},{ lineheight: ['1.0', '1.2', '1.5', '1.6', '1.8', '2.0', '2.4', '2.8', '3.0', '4.0', '5.0'] }]
    ],
  }
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'snow',
      placeholder: ' 내용을 작성하세요...',
      modules,
    });

    // quill에 text-change 이벤트 핸들러 등록
    // 참고: https://quilljs.com/docs/api/#events
    const quill = quillInstance.current;
    quill.off();
    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        onChangeField({ key: 'post_contents', value: quill.root.innerHTML });
      }
    });
    }, [onChangeField]);

    const mounted = useRef(false);
    useEffect(()=>{
      if(mounted.current) return;
      mounted.current = true;
      quillInstance.current.root.innerHTML = post_contents;
    },[post_title, post_contents]);

    const onChangeTitle = e => {
      onChangeField({ key: 'post_title', value: e.target.value });
    };
    const onChangeCategory = e =>{
      onChangeField({ key: 'post_category', value: e.target.value });
    }
    const onChangeMission = e =>{
      onChangeField({ key: 'post_mission', value: 'e.target.value' });
    }
    const location = useLocation();
    let mission_state = location.state.mission_state;


    const [showImages, setShowImages] = useState([]);

    // 이미지 상대경로 저장
    const handleAddImages = (event) => {
      const imageLists = event.target.files;
      let imageUrlLists = [...showImages];
  
      for (let i = 0; i < imageLists.length; i++) {
        const currentImageUrl = URL.createObjectURL(imageLists[i]);
        imageUrlLists.push(currentImageUrl);
      }
  
      if (imageUrlLists.length > 10) {
        imageUrlLists = imageUrlLists.slice(0, 10);
      }
  
      setShowImages(imageUrlLists);
    };
  
    // X버튼 클릭 시 이미지 삭제
    const handleDeleteImage = (id) => {
      setShowImages(showImages.filter((_, index) => index !== id));
    };


    return( <EditorBlock>
          <CategoryBlock>{categorys?
          <Select
                 placeholder="카테고리를 선택하세요." 
                 onChange={onChangeCategory} 
                 value={mission_state?'4':'1'}
          >
          {categorys.map(category =>(<option value={category.category_id}  
          selected={category.cagetory_id===4&&mission_state?true:false}>{category.category_name}</option>))}
            </Select>:<></>}
            {mission_state=false}
        {((category === "4")&&mission)?<Mission> 미션 : {mission.mission_title}</Mission>:<>
           </>}
          </CategoryBlock>
          <TitleInput 
            placeholder="제목을 입력하세요." 
            onChange={onChangeTitle} 
            value={post_title}
            maxLength="50"
          />
           <ImageFilesBlock>
        <ImageFileUpload handleAddImages={handleAddImages}/>
            {showImages.map((image, id) => (
     
          <Image src={image} key={id} alt={`${image}-${id}`} onClick={() => handleDeleteImage(id)} />
       
      ))}
       </ImageFilesBlock>
            <QuillWrapper>
                <EditBody 
                   ref={quillElement}  
                   maxLength="500"
                   />
          
              <PostActionBtn  Styled='margin: 5rem;' onPublish={onPublish} onCancel={onCancel}/>
            </QuillWrapper>
            </EditorBlock>

        )
    
}
export default Editor;