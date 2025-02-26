const Price = (props) => {
  const { price } = props;
  return <span style={{ fontWeight: "800", fontSize: "25px" }}>{price}원</span>;
};

export default Price;
