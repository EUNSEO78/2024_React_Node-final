import Item from "../molecules/Item";
import "../css/scrollBar.css";
const ItemList = () => {
  const data = [
    {
      clothesSrc:
        "https://image.msscdn.net/thumbnails/images/goods_img/20240109/3783092/3783092_17164556227922_500.png?w=390",
      brandName: "디미트리블랙",
      clothesName: "[기모선택] ASI 포시즌 에센셜 피그먼트 후드집업_차콜 그레이",
      discount: "22%",
      price: "39,900원",
    },
    {
      clothesSrc:
        "https://image.msscdn.net/thumbnails/images/goods_img/20240729/4280526/4280526_17313741600749_500.jpg?w=390",
      brandName: "트래블",
      clothesName: "져지 트랙 자켓 브라운",
      discount: "25%",
      price: "56,000원",
    },
    {
      clothesSrc:
        "https://image.msscdn.net/thumbnails/images/goods_img/20241029/4568222/4568222_17307957146053_500.jpg?w=390",
      brandName: "언탭트 스튜디오",
      clothesName: "유니버스 오버랩 스웨트 오버핏 후드티셔츠 5Color",
      discount: "44%",
      price: "27,900원",
    },
    {
      clothesSrc:
        "https://image.msscdn.net/thumbnails/images/goods_img/20240801/4288950/4288950_17234187400333_500.png?w=390",
      brandName: "디미트리블랙",
      clothesName: "[기모선택] ASI 포시즌 에센셜 피그먼트 후드 티셔츠_차콜",
      discount: "15%",
      price: "37,900원",
    },
    {
      clothesSrc:
        "https://image.msscdn.net/thumbnails/images/goods_img/20240805/4296687/4296687_17394315353233_big.jpg?w=1200",
      brandName: "뉴발란스",
      clothesName: "NBNAF21013 / UNI ESS 헤리티지 웜업 자켓 (BLACK)",
      price: "129,000원",
    },
    {
      clothesSrc:
        "https://image.msscdn.net/thumbnails/images/goods_img/20240126/3825608/3825608_17073572579308_big.jpg?w=1200",
      brandName: "트래블",
      clothesName: "트레이스 크리즈 데님 스웨트셔츠 인디고",
      discount: "80%",
      price: "15,800원",
    },
    {
      clothesSrc:
        "https://image.msscdn.net/thumbnails/images/goods_img/20230823/3489381/3489381_16938997764488_big.jpg?w=1200",
      brandName: "꼼파뇨",
      clothesName: "크래킹 레글런 롱슬리브 화이트",
      discount: "50%",
      price: "34,500원",
    },
    {
      clothesSrc:
        "https://image.msscdn.net/thumbnails/images/goods_img/20230918/3568898/3568898_16950179190582_big.jpg?w=1200",
      brandName: "아티스트웨어",
      clothesName: "[ATW x HOOLIGAN] 로고 와이드밴딩 팬츠",
      discount: "45%",
      price: "43,450원",
    },
  ];
  return (
    <div className="itemList">
      {data.map((v) => (
        <Item {...v} />
      ))}
    </div>
  );
};

export default ItemList;
