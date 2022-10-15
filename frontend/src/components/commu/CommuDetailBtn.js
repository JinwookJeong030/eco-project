import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import Responsive from '../common/Responsive';
import AskRemoveModal from '../post/AskRemoveModal';


const CommuDetailBtnBlock = styled(Responsive)`
display:flex;
justify-content:end;


`

const CommuDetailBtn = ({ user = true, commu =true, loading, onRemove}) => {

    const [deleteAskModal, setDeleteAskModal] = useState(false);
  const [succesModal, setSuccesModal] = useState(false);
  const onRemoveClick = () => {
    setDeleteAskModal(true);
  }
  const onCancel = () => {
    setDeleteAskModal(false);
    setSuccesModal(false);
  }
  const onConfirm = () => {
    setDeleteAskModal(false);
    onRemove()
    setSuccesModal(true);
  }

    const user_id = 1;
    const leader_id = 1;
    const joinState =true;
    return (
        <>
        <CommuDetailBtnBlock>
          
            {/*일반 사용자*/}
            {!loading&&user&&commu&&( !(user_id === leader_id) ?(joinState?
           <Button cyan>모임탈퇴</Button>:
            <Button cyan>가입요청</Button> )
        :(<> 
            {/*모임장 모임초대 -> 팝업창 = 초대할 닉네임 버튼 , 모임관리-> 팝업창 = 수정 및 삭제*/}
            <Button cyan>모임초대</Button>
            <Button cyan>모임관리</Button>
            </>))
        }
        
        </CommuDetailBtnBlock>
      <AskRemoveModal
        visible={deleteAskModal}
        onConfirm={onConfirm}
        onCancel={onCancel}
        title=""
        discription=""
        discription2=""
      /> 
      </>
    );
};

export default CommuDetailBtn;