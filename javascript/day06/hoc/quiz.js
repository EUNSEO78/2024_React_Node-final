const menu = [
  {
    name: "부대찌개",
    price: 13000,
    kcal: 700,
    ingredients: ["햄", "라면", "파", "두부", "김치", "콩"],
  },
  { name: "죽", price: 4000, kcal: 200, ingredients: ["소고기", "밥", "물"] },
  {
    name: "샌드위치",
    price: 0,
    kcal: 400,
    ingredients: ["고구마", "참치", "빵", "치즈"],
  },
  {
    name: "해장국",
    price: 10000,
    kcal: 700,
    ingredients: ["뼈다귀", "시래기", "감자", "수제비"],
  },
];

// 1.
const inflation = menu.map((x) => parseInt((x.price = x.price * 1.1)));
console.log(inflation);

// 2.
const inSugar = menu.map((x) => {
  x.ingredients.push("설탕");
  x.kcal = x.kcal + 100;
  return x;
});
console.log(inSugar);

// 3.
const vegan = menu.filter(
  (x) => !(x.ingredients.includes("햄") || x.ingredients.includes("소고기"))
);
console.log(vegan);

const starbucks = [
  {
    name: "카페모카",
    price: 6000,
    shots: 2,
    ingredients: ["커피콩", "물", "초코"],
  },
  {
    name: "레몬에이드",
    price: 4000,
    shots: 0,
    ingredients: ["레몬", "사이다", "시럽"],
  },
  {
    name: "아메리카노",
    price: 3000,
    shots: 2,
    ingredients: ["커피콩", "물"],
  },
  {
    name: "자몽허니블랙티",
    price: 4000,
    shots: 0,
    ingredients: ["자몽", "꿀", "홍차"],
  },
  {
    name: "화이트초코",
    price: 5000,
    shots: 1,
    ingredients: ["크림", "초코", "우유", "얼음"],
  },
];

// 1.
const nonCaffein = starbucks.filter((x) => x.shots == 0);
console.log(nonCaffein);

// 2.
// const saleCoffee = starbucks.map((x) => {
//   x.ingredients.includes("커피콩") ? (x.price = x.price * 0.8) : x.price;
//   return x;
// });
// console.log(saleCoffee);

// 3.
const honeyParty = starbucks.map((x) => {
  x.ingredients.includes("꿀")
    ? x.name && x.price
    : (x.name = x.name + "꿀🖤") && (x.price = x.price + 300);
  return x;
});

console.log(honeyParty);

// String -> Array
const arr = "엄준식".split(" ");
const arr1 = [..."엄준식"];

// Array -> String
["김밥", "천국"].join("");
