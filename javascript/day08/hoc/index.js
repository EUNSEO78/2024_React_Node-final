const arr = [1, 3, 5, 7, 9];

const q1 = arr.map((x, i) => {
  return i;
});

// quiz ❤️
const q2 = Array(1001)
  .fill(0)
  .map((x, i) => i);

console.log(q2);

// quiz ❤️
const q3 = Array(101)
  .fill(0)
  .map((x, i) => i)
  .filter((i) => {
    return i % 5 == 0;
  });

Array(21)
  .fill(0)
  .map((x, i) => i * 5);

console.log(q3);

// quiz ❤️
const q4 = Array(101)
  .fill(0)
  .map((x, i) => i)
  .map((x) => {
    if (x % 3 == 0 && x % 5 == 0) return "🐰";
    else if (x % 3 == 0) return "🐭";
    else if (x % 5 == 0) return "🐷";
    else return x;
  });

console.log(q4);

// quiz ❤️
//const result = [1, 2, 3, 4, 5].reduce( (acc, current) => acc + current,0 /* 생략가능: 시작 */);

const makeZodic = (to, from) => {
  const zodiac = {
    0: "원숭이",
    1: "닭",
    2: "개",
    3: "돼지",
    4: "쥐",
    5: "소",
    6: "호랑이",
    7: "토끼",
    8: "용",
    9: "뱀",
    10: "말",
    11: "양",
  };
  return Array(from - to)
    .fill(0)
    .map((v, i) => i + to)
    .map((v) => {
      return { 연도: v, 띠: zodiac[v % 12] };
    });
};

const result = makeZodic(1000, 3000);
console.log(result);
