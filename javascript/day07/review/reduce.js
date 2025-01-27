// 누적시킴
const result = [1, 2, 3, 4, 5].reduce(
  (acc, current) => acc + current,
  0 /* 생략가능: 시작 */
);

const coffee = "americano";
const result1 = coffee.split("a").reduce((a, b) => a + b);

console.log(result1);
