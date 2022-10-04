import React, { useRef, useEffect, useState } from "react";
import ReactQuill from 'react-quill';
import './EditorQuill.css'
import Quill from "quill";
import 'react-quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import Responsive from "../common/Responsive";
import styled from "styled-components";
import PostActionBtn from "./PostActionBtn";

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





const Images = ({ detailImages }) => {
    return (
      <>
        {detailImages.map((url) => {
          return <img alt={url} key={url} src={url} />;
        })}
      </>
    );
  };



const ImageEditor =()=>{

    const [postImages, setPostImages] = useState([]); // 서버로 보낼 이미지 데이터
    const [detailImages, setDetailImages] = useState([]); // 프리뷰 보여줄 이미지 데이터

    const uploadFile = (event) => {
        let fileArr = event.target.files; //  사용자가 선택한 파일들
        setPostImages(Array.from(fileArr)); //
        let fileURLs = [];
        let filesLength = fileArr.length > 10 ? 10 : fileArr.length; // 최대 10개
    
        // 프리뷰
        for (let i = 0; i < filesLength; i++) {
          let file = fileArr[i];
          let reader = new FileReader();
          reader.onload = () => {
            fileURLs[i] = reader.result;
            setDetailImages([...fileURLs]);
          };
          reader.readAsDataURL(file);
        }
      };

        return( <EditorBlock>
        
        <input id="upload-file" type="file" accept="image/*" multiple onChange={uploadFile}></input>
      <Images detailImages={detailImages} />
      <button type="submit" >
        제출하기
      </button>
            </EditorBlock>

        )
    
}
export default ImageEditor;