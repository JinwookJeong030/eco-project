import FlowerGardenItem from "../../components/garden/FlowerGardenItem";


const FlowerItemContainer = ({plant,marginTop,marginLeft}) => {

 console.log(plant)
  const onClickItem =()=> {

  }

  return (
    <FlowerGardenItem  plant={plant} marginTop={marginTop} marginLeft={marginLeft} onClickItem={onClickItem}/>
  );
};

export default FlowerItemContainer;
