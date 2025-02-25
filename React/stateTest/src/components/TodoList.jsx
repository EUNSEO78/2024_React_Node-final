// 할 일 목록 (Todo List) 추가 기능 만들기 ** (다시 풀어보기)
/* 
    - input을 통해 새로운 할 일을 입력할 수 있어야 한다.
    - 버튼을 누르면 입력한 할 일이 목록에 추가되어야 한다.
    - 추가된 할 일 목록이 ul 태그 안에 나타나야 한다.

*/

import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setTodos([...todos, input])}>추가</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
