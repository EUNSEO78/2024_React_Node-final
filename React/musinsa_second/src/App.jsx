import { useState } from "react";
import Checker from "./tidamungu_comp/Checker";
import Input from "./tidamungu_comp/input";

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

  return (
    <>
      <Input placeholder={"아이디를 입력해 주세요."} a={input} />
      <Checker
        text={"6~20자 내외"}
        isValid={inputValue.length >= 6 && inputValue.length <= 20}
      />

      <Input placeholder={"비밀번호를를 입력해 주세요."} a={input1} />
      <Checker
        text={"특수문자 (!@$%^*_+~)"}
        isValid={[..."!@$%^*_+~"].some((v) => inputValue1.includes(v))}
      />
      <Checker text={"8~20자 내외"} />
    </>
  );
}

export default App;
