import IcecreamCard from "./IcecreamCard";

const data = [
  {
    img: "https://www.baskinrobbins.co.kr/upload/product/main/fb92d70dee836652115c4f3b13175541.png",
    iceName: "Mint",
  },
  {
    img: "https://www.baskinrobbins.co.kr/upload/product/main/91c8668227bcf556c43a968b97e342e6.png",
    iceName: "MO",
  },
  {
    img: "https://www.baskinrobbins.co.kr/upload/product/main/cadcf14827ab46f9aec081e06e9da2c0.png",
    iceName: "Banana",
  },
  {
    img: "https://www.baskinrobbins.co.kr/upload/product/main/7d1637a8d51cae0806ecb565eacc524e.png",
    iceName: "Monak",
  },
  {
    img: "https://www.baskinrobbins.co.kr/upload/product/main/8d5d05796a25abe91ab26e3ff8cfb4e2.png",
    iceName: "Blice",
  },
  {
    img: "https://www.baskinrobbins.co.kr/upload/product/main/8d5d05796a25abe91ab26e3ff8cfb4e2.png",
    iceName: "Amond Bong",
  },
  {
    img: "https://www.baskinrobbins.co.kr/upload/product/main/6b7de3ba55a71e3e99dc341d5cb908a9.png",
    iceName: "Chitos",
  },
  {
    img: "https://www.baskinrobbins.co.kr/upload/product/main/8d5d05796a25abe91ab26e3ff8cfb4e2.png",
    iceName: "Blice",
  },
  {
    img: "https://www.baskinrobbins.co.kr/upload/product/main/fb92d70dee836652115c4f3b13175541.png",
    iceName: "Mint",
  },
  {
    img: "https://www.baskinrobbins.co.kr/upload/product/main/91c8668227bcf556c43a968b97e342e6.png",
    iceName: "MO",
  },
];

const App = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
      {data.map((v) => (
        <IcecreamCard src={v.img} name={v.iceName}></IcecreamCard>
      ))}
    </div>
  );
};

export default App;
