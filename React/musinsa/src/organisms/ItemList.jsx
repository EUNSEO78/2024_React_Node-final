import BrandName from "../atoms/text/BrandName";
import Item from "../molecules/Item";

const ItemList = () => {
  const data = [
    {
      clothesSrc:
        "https://image.msscdn.net/thumbnails/images/goods_img/20240109/3783092/3783092_17164556227922_500.png?w=390",
      brandName: "디미트리블랙",
      clothesName: "[기모선택] ASI 포시즌 에센셜 피그먼트 후드집업_차콜 그레이",
      discount: "22%",
      price: "39,900",
    },
    {
      clothesSrc:
        "https://image.msscdn.net/thumbnails/images/goods_img/20240109/3783092/3783092_17164556227922_500.png?w=390",
      brandName: "디미트리블랙",
      clothesName: "[기모선택] ASI 포시즌 에센셜 피그먼트 후드집업_차콜 그레이",
      discount: "22%",
      price: "39,900",
    },
    {
      clothesSrc:
        "https://image.msscdn.net/thumbnails/images/goods_img/20240109/3783092/3783092_17164556227922_500.png?w=390",
      brandName: "디미트리블랙",
      clothesName: "[기모선택] ASI 포시즌 에센셜 피그먼트 후드집업_차콜 그레이",
      discount: "22%",
      price: "39,900",
    },
    {
      clothesSrc:
        "https://image.msscdn.net/thumbnails/images/goods_img/20240109/3783092/3783092_17164556227922_500.png?w=390",
      brandName: "디미트리블랙",
      clothesName: "[기모선택] ASI 포시즌 에센셜 피그먼트 후드집업_차콜 그레이",
      discount: "22%",
      price: "39,900",
    },
    {
      clothesSrc:
        "https://image.msscdn.net/thumbnails/images/goods_img/20240109/3783092/3783092_17164556227922_500.png?w=390",
      brandName: "디미트리블랙",
      clothesName: "[기모선택] ASI 포시즌 에센셜 피그먼트 후드집업_차콜 그레이",
      discount: "22%",
      price: "39,900",
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        display: "flex",
        overflow: "scroll",
        //     :: -webkit - scrollbar: {
        // display: "none"
        //     }
      }}
    >
      {data.map((v) => (
        <Item {...v} />
      ))}
    </div>
  );
};

export default ItemList;
