// number, string , boolean, null, undefined
// array, object, window, console

const coffee = "americano";
console.log(coffee.includes("can"));

// quiz
const id = prompt("아이디를 입력하시오.");
const result = id.includes("@") && id.includes("IT") ? "합격😀" : "불합격😂";
alert(result);

"choco".toUpperCase(); // 대문자화
"choco".toLowerCase(); // 소문자화

// quiz
const word = prompt("단어를 입력하시오");
const result2 =
  word == word.toLowerCase()
    ? alert(word.toUpperCase())
    : alert(word.toLowerCase());

const a = "ice".repeat(3);
"americano".replaceAll("a", "😀");
"icecream".slice(1, 4); // cec

"icecream".length; // 글자 길이
