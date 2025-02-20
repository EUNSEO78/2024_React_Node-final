import DrinkCard from "./DrinkCard";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <DrinkCard
        drinkSrc={
          "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg"
        }
        drinkName={"나이트로 바닐라 크림"}
      />
      <DrinkCard
        drinkSrc={
          "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg"
        }
        drinkName={"나이트로 콜드 브루"}
      />
      <DrinkCard
        drinkSrc={
          "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg"
        }
        drinkName={"돌체 콜드 브루"}
      />
    </div>
  );
}

export default App;
