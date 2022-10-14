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

  const { allMission, cMission, loadingMission, loadingCMission } = useSelector(
    ({ loading, commu }) => ({
   
      allMission: commu.allMission,
      cMission: commu.cMission,
      loadingMission: loading['write/MISSION'],
      loadingCMission: loading['commu/COMMU_MISSION'],
    }),
  );
  

  useEffect(() => {
    dispatch(categorys());
    dispatch(mission());
  }, [dispatch, location.search]);


  return (
    <CommuMission
      allMission={allMission}
      cMission={cMission}
      loadingMission={loadingMission}
      loadingCMission={loadingCMission}
    />
  );
};

export default CommuMissionContainer;