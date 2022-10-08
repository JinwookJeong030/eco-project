import React, { useEffect, useCallback } from "react";
import qs from "qs";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "../../../node_modules/react-router-dom/index";
import write, { categorys,mission } from "../../modules/write";
import CommuMission from "../../components/commu/CommuMission";

const CommuMissionContainer = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { error, loading ,todayMission } = useSelector(
    ({ loading, write }) => ({
      error: write.missionError,
      loading: loading['write/MISSION'],
      todayMission: write.mission,
    }),
  );
  

  useEffect(() => {
    dispatch(categorys());
    dispatch(mission());
  }, [dispatch, location.search]);


  return (
    <CommuMission
      loading={loading}
      error={error}
      mission={todayMission}
    />
  );
};

export default CommuMissionContainer;