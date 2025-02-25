// 1. 숫자 증가 및 감소 버튼 만들기

import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  const plus = () => {
    setNum((prev) => prev + 1);
  };
  const minus = () => {
    setNum((prev) => (prev == 0 ? prev : prev - 1));
  };
  const reset = () => {
    setNum((prev) => (prev = 0));
  };
  return (
    <div>
      <p>숫자: {num}</p>
      <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button>
      <button onClick={reset}>초기화</button>
    </div>
  );
};

export default Counter;
