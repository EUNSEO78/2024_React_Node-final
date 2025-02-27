import { useState } from "react";
import Checker from "./tidamungu_comp/Checker";
import Input from "./tidamungu_comp/input";
import Button from "./tidamungu_comp/Button";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const input = (e) => {
    setInputValue((prev) => {
      return e.target.value;
    });
  };
  const input1 = (e) => {
    setInputValue1((prev) => {
      return e.target.value;
    });
  };

  const isLengthIDValid = inputValue.length >= 6 && inputValue.length <= 20;
  const isSpecialPWValid = [..."!@$%^*_+~"].some((v) =>
    inputValue1.includes(v)
  );
  const isLengthPWValid = inputValue1.length >= 8 && inputValue1.length <= 20;

  return (
    <>
      <Input placeholder={"아이디를 입력해 주세요."} a={input} />
      <Checker text={"6~20자 내외"} isValid={isLengthIDValid} />

      <Input placeholder={"비밀번호를를 입력해 주세요."} a={input1} />
      <Checker text={"특수문자 (!@$%^*_+~)"} isValid={isSpecialPWValid} />
      <Checker text={"8~20자 내외"} isValid={isLengthPWValid} />

      <Button
        isAllValid={isLengthIDValid && isSpecialPWValid && isLengthPWValid}
      />
    </>
  );
}

export default App;
