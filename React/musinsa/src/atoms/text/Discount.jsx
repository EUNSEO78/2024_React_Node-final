import BaseText from "./BaseText";

const Discount = (props) => {
  return (
    <BaseText
      style={{ fontSize: "13px", fontWeight: "600", color: "#F32553" }}
      discount={props.discount}
    />
  );
};

export default Discount;
