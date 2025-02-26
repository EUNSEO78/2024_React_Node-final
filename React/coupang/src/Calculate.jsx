import { useState } from "react";
import Price from "./components/Price";
import Counter from "./components/Counter";

const Calculate = () => {
  const [numArr, setNumArr] = useState([
    { price: 30000, cnt: 1, restrict: 11 },
    { price: 25000, cnt: 1, restrict: 20 },
    { price: 2000, cnt: 1 },
  ]);
  const plus = (i) => {
    setNumArr((prev) => {
      const newArr = [...prev];
      const { cnt, restrict } = newArr[i];
      newArr[i].cnt = cnt == restrict ? cnt : cnt + 1;
      return newArr;
    });
  };
  const minus = (i) => {
    setNumArr((prev) => {
      const newArr = [...prev];
      newArr[i].cnt = newArr[i].cnt == 1 ? 1 : newArr[i].cnt - 1;
      return newArr;
    });
  };
  const reset = (i) => {
    setNumArr((prev) => {
      const newArr = [...prev];
      newArr[i].cnt = 1;
      return newArr;
    });
  };
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    margin: "30px",
  };
  return (
    <>
      {numArr.map((v, i) => (
        <div style={style}>
          <Price price={v.price} />
          <Counter cnt={v.cnt} minus={() => minus(i)} plus={() => plus(i)} />
        </div>
      ))}
      <span>
        총 상품 가격🚀:{" "}
        {numArr.map((v, i) => v.price * v.cnt).reduce((a, c) => a + c)}원
      </span>
      <button
        onClick={() => numArr.map((v, i) => reset(i))}
        style={{
          border: "1px solid blue",
          borderRadius: "5px",
          backgroundColor: "white",
          margin: "0 30px",
          fontSize: "20px",
        }}
      >
        reset
      </button>
    </>
  );
};

export default Calculate;
