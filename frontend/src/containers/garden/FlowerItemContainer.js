import FlowerGardenItem from "../../components/garden/FlowerGardenItem";


const FlowerItemContainer = () => {
  const plant ={
    plant_name:"해바라기",
    pt_regdate:"2022-01-01",
    pt_complete_date:"2022-01-01"

  } 

  const onClickItem =()=> {

  }

  return (
    <FlowerGardenItem plant={plant}  onClickItem={onClickItem}/>
  );
};

export default FlowerItemContainer;
