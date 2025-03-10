type Hamburger = "불고기버거" | "상하이버거" | "빅맥버거" | "콰트로치즈버거";
type Side = "초코츄러스" | "감자튀김" | "애플파이" | "선데이아이스크림";
type Drinks = "콜라" | "바닐라쉐이크" | "초코쉐이크" | "사이다";

type MacMorningBurger = "에그머핀" | "몰라";
type MacMorningSide = "해쉬브라운";
type MacMorningDrinks = "아메리카노" | "라떼" | "콜라";

type MacdonaldSet<
  T extends Hamburger | MacMorningBurger,
  U extends Side | MacMorningSide,
  V extends Drinks | MacMorningDrinks
> = {
  main: T;
  side: U;
  drink: V;
};

const a: MacdonaldSet<Hamburger, Side, Drinks> = {
  main: "불고기버거",
  side: "선데이아이스크림",
  drink: "콜라",
};

const b: MacdonaldSet<MacMorningBurger, MacMorningSide, MacMorningDrinks> = {
  main: "에그머핀",
  side: "해쉬브라운",
  drink: "아메리카노",
};
