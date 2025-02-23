import ClothesImg from "../atoms/img/clothesImg";
import BrandName from "../atoms/text/BrandName";
import ClothesName from "../atoms/text/ClothesName";
import Discount from "../atoms/text/Discount";
import Price from "../atoms/text/Price";

const Item = (props) => {
  const { clothesSrc, brandName, clothesName, discount, price } = props;
  return (
    <div style={{ width: "175px", display: "flex", flexDirection: "column" }}>
      <ClothesImg clothesSrc={clothesSrc} />
      <BrandName brandName={brandName} />
      <ClothesName clothesName={clothesName} />
      <div style={{ display: "flex", gap: "5px" }}>
        <Discount discount={discount} />
        <Price price={price} />
      </div>
    </div>
  );
};

export default Item;
