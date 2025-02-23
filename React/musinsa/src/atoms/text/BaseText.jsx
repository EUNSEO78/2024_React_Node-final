const BaseText = (props) => {
  const { style } = props;
  const { brandName, clothesName, discount, price } = props;
  return (
    <span style={style}>{brandName || clothesName || discount || price}</span>
  );
};

export default BaseText;
