
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FlowerGardenItem from "../../components/garden/FlowerGardenItem";
import { changeLeaderPlant, readCompletePlant, unloadPlant } from "../../modules/plant";
import { check } from "../../modules/user";


const FlowerItemContainer = ({user, plant,marginTop,marginLeft}) => {
  const dispatch = useDispatch();
  const onClickItem =()=> {
    console.log("plant:"+plant.pt_id)
    dispatch(changeLeaderPlant({user_leader_plant:plant.pt_id}))
    dispatch(check());
    dispatch(readCompletePlant({user_id:user.user_id, page:1}));
  }

  return (
    <FlowerGardenItem user={user} plant={plant} marginTop={marginTop} marginLeft={marginLeft} onLeader={onClickItem}/>
  );
};

export default FlowerItemContainer;
