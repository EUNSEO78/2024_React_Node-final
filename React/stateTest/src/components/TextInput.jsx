// 텍스트 입력 필드 상태 관리하기
// useState를 활용해 입력 값을 저장하고, 입력할 때마다 p 태그에 반영되도록 수정

import { useState } from "react";

const TextInput = () => {
  const [text, setText] = useState("");
  const inputValue = (e) => {
    setText((prev) => e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="텍스트를 입력하세요"
        onChange={inputValue}
      />
      <p>{text}</p>
    </div>
  );
};

export default TextInput;
