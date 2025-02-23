import BaseText from "./BaseText";

const Price = (props) => {
  return (
    <BaseText
      style={{ fontSize: "13px", fontWeight: "600" }}
      price={props.price}
    />
  );
};

export default Price;
