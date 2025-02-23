import BaseText from "./BaseText";

const BrandName = (props) => {
  return (
    <BaseText
      style={{ fontSize: "11px", fontWeight: "800" }}
      brandName={props.brandName}
    />
  );
};

export default BrandName;
