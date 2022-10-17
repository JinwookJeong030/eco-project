import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from '../../../node_modules/react-router-dom/index';
import EditCommu from '../../components/commu/EditCommu';
import { uploadFile } from '../../lib/api/post';

import { changeField, initialize } from '../../modules/commus';
import { editCommu, writeCommu } from '../../modules/writeCM';

const CreateCommuContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { commu_name, commu_contents 
        ,originalCommuId, commu, commuError,commu_image} = useSelector(({ writeCM }) => ({
        commu_name: writeCM.commu_name,
        commu_contents: writeCM.commu_contents,
        originalCommuId: writeCM.originalCommuId,
        commu: writeCM.commu,
        commuError: writeCM.commuError,
        commu_image: writeCM.commu_image,
      }));


    const onCancel = (e) => {
        
        e.preventDefault();
        navigate(-1);
      };
    
    const onPublish =  (e,images) => {
        const formData = new FormData();
        const filesCnt =e.target.file.files.length;
        for(let i = 0 ; i< filesCnt ; i++){
          formData.append('file',e.target.file.files[i])
        }
       
      
         uploadFile({formData});

        if(originalCommuId){
          dispatch(editCommu({commu_id: originalCommuId, commu_name, commu_contents }));
          return;
        }
        e.preventDefault();
        dispatch(writeCommu({commu_name,commu_contents }));
      };

      const onChangeField = 
      useCallback(payload => dispatch(changeField(payload)), 
      [dispatch]);

      useEffect(() => {
        return () => {
          dispatch(initialize());
         
        };
      }, [dispatch]);
    

    return (
       <EditCommu onCancel={onCancel} onPublish={onPublish}/>
    );
};

export default CreateCommuContainer;