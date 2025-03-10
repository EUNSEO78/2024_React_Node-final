// 1. 어노테이션
const a: number = 123;
const b: boolean = true;
const c: string = "동우";
const d: string[] = ["dongwoo", "kangdongwoo"];
const e: number[] = [1, 2, 3, 4, 5];
const f: { name: string; age: number } = {
  name: "dongwoo",
  age: 25,
};

// array-object
const g: {
  price: number;
  shots: number;
  isCaffeein: boolean;
}[] = [
  { price: 2500, isCaffeein: true, shots: 2 },
  { price: 3500, isCaffeein: false, shots: 0 },
];

const h: {
  clothes: string;
  isFemale: boolean;
}[] = [
  { clothes: "에이블리", isFemale: true },
  { clothes: "무신사", isFemale: false },
];

// function
const add = (x: number, y: number): string => {
  return String(x + y);
};
const returnIndex = (x: number[]): number => {
  return x[0];
};
const test: (x: number) => number = (x: number) => {
  return x;
};
// const onClick: (e: Event) => void;
