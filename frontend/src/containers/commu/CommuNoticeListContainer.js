import React, { useEffect, useCallback } from "react";
import qs from "qs";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "../../../node_modules/react-router-dom/index";
import write, { categorys,mission } from "../../modules/write";
import CommuMission from "../../components/commu/CommuMission";
import CommuNoticeList from "../../components/commu/CommuNoticeList";

const CommuEditNoticeListContainer = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { error, loading ,cns } = useSelector(
    ({ loading, write }) => ({
      error: write.missionError,
      loading: loading['write/MISSION'],
      cns: [{cn_title:"dd",cn_id:1, cn_regdate:"2022-01-01"},
      {cn_title:"dd",cn_id:1, cn_regdate:"2022-01-01"},
      {cn_title:"dd",cn_id:1, cn_regdate:"2022-01-01"}]
    }),
  );
  

  return (
    <CommuNoticeList
      loading={loading}
      error={error}
      cns={cns}
    />
  );
};

export default CommuEditNoticeListContainer;