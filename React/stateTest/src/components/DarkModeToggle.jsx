// 다크 모드 토글 버튼 만들기
// 다크 모드와 라이트 모드를 전환할 수 있도록 수정

import { useState } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const style = {
    backgroundColor: isDarkMode ? "black" : "white",
    color: isDarkMode ? "white" : "black",
    border: "1px solid black",
    width: "300px",
    height: "300px",
  };
  const darkMode = () => {
    setIsDarkMode((prev) => !isDarkMode);
  };

  return (
    <div>
      <p style={style}>현재 모드: 라이트 모드</p>
      <button onClick={darkMode}>다크 모드 전환</button>
    </div>
  );
};

export default DarkModeToggle;
