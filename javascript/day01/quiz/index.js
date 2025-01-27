// 1
const name = prompt("이름 입력 >>");
const age = Number(prompt("나이 입력 >>"));
const favorite_color = prompt("좋아하는 색 입력 >>");
console.log(
  `제 이름은 ${name}이고, 나이는 ${age}살 이고, 좋아하는 색은 ${favorite_color}입니다.❤`
);

// 2
const today_date = new Date().toLocaleDateString();
const schedule = prompt("일정 입력 >>");
console.log(`오늘은 ${today_date}, 계획하신 일정은 ${schedule}입니다😀`);

// 3
const num1 = Number(prompt("숫자1 입력 >>"));
const num2 = Number(prompt("숫자2 입력 >>"));
alert(num1 + num2);
alert(num1 - num2);

// 4
const price = Number(prompt("음식 가격 입력 >>"));
const how_num = Number(prompt("개수 입력 >>"));
const result = price * how_num;
alert(`총합 가격 : ${result}`);

// 5
const c = Number(prompt("섭씨 온도 입력 >>"));
const f = c * 1.8 + 32;
alert(`화씨온도 : ${f}`);

// 6
const length = Number(prompt("정사각형 한 변의 길이 입력 >>"));
const width = length * 2;
alert(`정사각형의 넓이 : ${width}`);
