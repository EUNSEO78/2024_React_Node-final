// 타입 조합 연산자
// 1. union type [or(|)]
const a: number | string = "10";
const b: (number | boolean)[] = [1, 2, 3, true, false];
const menu: { name: string; price: number; shots?: number; origin?: string }[] =
  [
    { name: "아메리카노", price: 2500, shots: 2 },
    { name: "라떼", price: 3000, origin: "몰라" },
  ];

// 2. intersection type [and(&)]
// 오브젝트 타입 합치 때 자주 사용
// const c: number & string;
const coffee: { name: string; price: number } & { shots: number } = {
  name: "아메리카노",
  price: 2500,
  shots: 3,
};

// 타입 알리아스(Type Alias)
// type 별명
type Umm = number | string;
const d: Umm = 12;

type Person = { name: string; age: number };
type Student = { major: string; id: number; courses: string[] };
type Academic = Person & Student;

type CoffeeBean = { origin: string; color: string; flavor: string };
type Ade = { sparkling: boolean; kcal: number };
type Bread = { ingredient: string[]; yeast: number };
type Product = { name: string; price: number };

const saltBread: Bread & Product = {
  name: "saltBread",
  ingredient: ["소금", "밀가루", "설탕"],
  price: 3500,
  yeast: 4,
};

// 리터럴 타입 알리아스
type Num = 1 | 2 | 3;
type ShesBeagle = "아메리카오" | "라떼" | "민트";
const e: ShesBeagle = "라떼";

type Bread1 = "플렛브레드" | "허니오트" | "오레가노" | "위트" | "화이트";
type Cheese = "슈레드" | "아메리칸" | "모짜렐라";
type Vegitable = "양파" | "피망" | "양상추" | "할라피뇨" | "올리브" | "토마토";
type Source =
  | "핫칠리"
  | "허니머스타드"
  | "렌치"
  | "스위트어니언"
  | "후추"
  | "소금";
type Subway = {
  bread: Bread1;
  cheese: Cheese;
  vegitable: Vegitable[];
  source: Source[];
};
const myOrder: Subway = {
  bread: "플렛브레드",
  cheese: "모짜렐라",
  vegitable: ["양상추", "토마토", "피망"],
  source: ["스위트어니언", "허니머스타드"],
};
