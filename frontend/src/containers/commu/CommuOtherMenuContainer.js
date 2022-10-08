import React, { useEffect, useCallback, useState, Children } from "react";

import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "../../../node_modules/react-router-dom/index";
import CommuOtherMenu from "../../components/commu/CommuOtherMenu";

const CommuOtherMenuContainer = ({children}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [selectMenu , setSelectMenu] = useState(0);
  
  const selectReply=()=>{
    setSelectMenu(0);
  }
  const selectMember=()=>{
    setSelectMenu(1);
    }
  const selectStatistics=()=>{
    setSelectMenu(2);
  }

  

  return (
    <CommuOtherMenu
    selectMenu={selectMenu}
    selectReply={selectReply}
    selectMember={selectMember}
    selectStatistics={selectStatistics}
    children={children}
    >

    </CommuOtherMenu>
  );
};

export default CommuOtherMenuContainer;