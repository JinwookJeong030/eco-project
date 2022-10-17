import React from "react";
import FlowerModal from "../../components/garden/FlowerModal";


export const PlantModalContainer = ({ visible, onCancel, plant }) => {
  return (
    <FlowerModal
      visible={visible}
      cancelText="X"
      plant={plant}
      onCancel={onCancel}
    />
  );
};

export default PlantModalContainer;