import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [total, setTotal] = useState(0);
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);
  return (
    <>
      <Counter total={total} setTotal={setTotal} />
      <Counter total={total1} setTotal={setTotal1} />
      <Counter total={total2} setTotal={setTotal2} />
      <span>{total + total1 + total2}</span>
    </>
  );
}

export default App;
