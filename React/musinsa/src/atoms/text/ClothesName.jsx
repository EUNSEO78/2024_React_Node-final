import BaseText from "./BaseText";

const ClothesName = (props) => {
  return (
    <BaseText style={{ fontSize: "13px" }} clothesName={props.clothesName} />
  );
};

export default ClothesName;
