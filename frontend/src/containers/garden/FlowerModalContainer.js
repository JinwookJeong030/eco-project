import React from "react";
import FlowerModal from "../../components/garden/FlowerModal";


export const PlantModalContainer = ({ user, visible, onCancel, plant,onLeader }) => {
  return (
    <FlowerModal
      user={user}
      visible={visible}
      cancelText="X"
      plant={plant}
      onCancel={onCancel}
      onLeader={onLeader}
  
    />
  );
};

export default PlantModalContainer;