import FlowerGardenItem from "../../components/garden/FlowerGardenItem";


const FlowerItemContainer = ({plant}) => {

 console.log(plant)
  const onClickItem =()=> {

  }

  return (
    <FlowerGardenItem plant={plant}  onClickItem={onClickItem}/>
  );
};

export default FlowerItemContainer;
