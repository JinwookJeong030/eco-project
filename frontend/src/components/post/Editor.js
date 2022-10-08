import React, { useRef, useEffect } from "react";
import ReactQuill from 'react-quill';
import './EditorQuill.css'
import Quill from "quill";
import 'react-quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import Responsive from "../common/Responsive";
import styled from "styled-components";
import PostActionBtn from "./PostActionBtn";
import { useLocation } from "react-router-dom";

const EditorBlock = styled(Responsive)`
  /* 페이지 위아래 여백 지정 */
  padding-top: 1rem;

  border: solid thin;
  
  
  @media (min-width: 1024px) {
    width: 900px;
  }
  @media (max-width: 1050px) {
    width: 90%;
  
  }
  
`;
const CategoryBlock = styled(Responsive)`
display: flex;
flex-direction: row;
margin:0;
padding:0;
`

const Select= styled.select`
width: 18rem;
height: 2rem;
font-size: 1.2rem;
margin-bottom: 15px;
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
`

const TitleInput = styled.input`
  outline: none;

  font-size: 1.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
  :focus{
    border-color:#0982f0;
    outline: none;}
    :focus + label {
      color: #0083cb;
  }
}
`;

const QuillWrapper = styled.div`
  /* 최소 크기 지정 및 padding 제거 */
  
  .ql-editor {
    padding: 0;
   
    min-height: 400px;
    max-height: 580px;
    font-size: 1.125rem;
    max-length: '2';
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;
const EditBody = styled.div`
  padding:5px;
  
`

var Parchment = Quill.import('parchment');
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
      [{'font': []}],
      [{ 'header': [6,5,4,3,2,1] }],
      [{ 'color': [] }, { 'background': [] }],
      ['bold','underline', 'italic','strike',],
      [ { 'align': '' },{ 'align': 'center' },{ 'align': 'right' },{ 'align': 'justify' },{'indent': '-1'}, {'indent': '+1'},{
        'list': ['ordered', 'bullet']},{ lineheight: ['1.0', '1.2', '1.5', '1.6', '1.8', '2.0', '2.4', '2.8', '3.0', '4.0', '5.0'] }],
      ['image','link']
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


        return( <EditorBlock>
          <CategoryBlock>{categorys?
          <Select
                 placeholder="카테고리를 선택하세요." 
                 onChange={onChangeCategory} 
          >
          
          {categorys.map(category =>(<option value={category.category_id}>{category.category_name}</option>))}
            </Select>:<></>
}
        {((category === "4")&&mission)?<Mission> 미션 : {mission.mission_title}</Mission>:<>
           </>}
          </CategoryBlock>
          <TitleInput 
            placeholder="제목을 입력하세요." 
            onChange={onChangeTitle} 
            value={post_title}
            maxLength="50"
          />
            <QuillWrapper>
                <EditBody 
                   ref={quillElement}  
                   maxLength="500"
                   />
            
              <PostActionBtn Styled='margin: 5rem;' onPublish={onPublish} onCancel={onCancel}/>
            </QuillWrapper>
            </EditorBlock>

        )
    
}
export default Editor;