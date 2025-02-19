import IcecreamCard from "./IcecreamCard";

const App = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <IcecreamCard
        src="https://www.baskinrobbins.co.kr/upload/product/main/fb92d70dee836652115c4f3b13175541.png"
        name="민트 초코"
      ></IcecreamCard>
      <IcecreamCard
        src="https://www.baskinrobbins.co.kr/upload/product/main/91c8668227bcf556c43a968b97e342e6.png"
        name="엄마는 외계인"
      ></IcecreamCard>
    </div>
  );
};

export default App;
