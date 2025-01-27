// function[함수]
// 마술상자
// 입력: x
// 출력: x + 100

function plus100(x) {
  return x + 100;
}
const a = plus100(500);
console.log(a); // 600

function twice(x) {
  return x * 2;
}
const b = twice(100);
console.log(b);

function luckybiky(x) {
  return x + "럭키비키잖아😁";
}
const c = luckybiky("오늘은 월요일..");
console.log(c);

// 홀수 짝수 판별 함수
function hol(num) {
  return num % 2 ? "홀수입니다😀😀" : "짝수입니다😀😀";
}
const d = hol(4);
console.log(d);
