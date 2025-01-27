// if문
// const username = prompt("이름이 뭐에요");
// if (username == "엄준식") {
//   alert("살아이따.");
// }

// quiz
// const num = Number(prompt("숫자 입력"));
// if (num > 0) {
//   alert("양의 정수입니다.");
// } else {
//   alert("음의 정수입니다.");
// }

// quiz
// const num = +prompt("정수 입력");
// if (num % 2 == 0) {
//   alert("짝수입니다.");
// } else {
//   alert("홀수입니다.");
// }

// const num = +prompt("정수 입력");
// if (num > 0) {
//   alert("양의 정수");
// } else if (num == 0) {
//   alert("0입니다");
// } else {
//   alert("음의 정수");
// }

// quiz
// const num = +prompt("정수 입력");
// const isPositive = num > 0;
// const isNegative = num < 0;
// if (num > 0 && num % 2) {
//   alert("양의 홀수");
// } else if (num > 0 && !(num % 2)) {
//   alert("양의 짝수");
// } else if (num < 0 && num % 2) {
//   alert("음의 홀수");
// } else if (num < 0 && !(num % 2)) {
//   alert("음의 짝수");
// } else if (num == 0) {
//   alert("0입니다.");
// } else {
//   alert("에러!");
// }

// quiz
const birth_year = +prompt("몇년생 ??");
if (birth_year % 12 == 0) {
  alert("원숭이 띠 입니다");
} else if (birth_year % 12 == 1) {
  alert("닭 띠 입니다");
} else if (birth_year % 12 == 2) {
  alert("개 띠 입니다");
} else if (birth_year % 12 == 3) {
  alert("돼지 띠 입니다");
} else if (birth_year % 12 == 4) {
  alert("쥐 띠 입니다");
} else if (birth_year % 12 == 5) {
  alert("소 띠 입니다");
} else if (birth_year % 12 == 6) {
  alert("호랑이 띠 입니다");
} else if (birth_year % 12 == 7) {
  alert("토끼 띠 입니다");
} else if (birth_year % 12 == 8) {
  alert("용 띠 입니다");
} else if (birth_year % 12 == 9) {
  alert("뱀 띠 입니다");
} else if (birth_year % 12 == 10) {
  alert("말 띠 입니다");
} else {
  alert("양 띠 입니다");
}
