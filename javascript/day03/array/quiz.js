const fruits = ["딸기", "블루베리", "배", "애플", "바나나"];

// 1. 딸기, 블루베리, 나머지 변수 만들기
const [strawberry, blueberry, ...rest] = fruits;
console.log(rest);

// 2.
console.log(fruits[0] + fruits[2]);
