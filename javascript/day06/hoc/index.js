// const arr = [1, 3, 5, 7, 9];
// 😍많이 중요한 함수😍
// 요소들을 바꿔주는 함수
// const double = (x) => x * 2;
// const newArr = arr.map(double);
// console.log(newArr);

// const newArr1 = arr.map((x) => x + 10);
// console.log(newArr1);

// const newArr2 = arr.map((x) => (x ** 2 < 10 ? "짜장면" : "탕수육"));
// console.log(newArr2);

// const newArr3 = arr.map((x) => (String(x ** 3).length < 3 ? "커피" : "붕어빵"));
// console.log(newArr3);

// const fruits = [
//   "peach",
//   "mango",
//   "strawberry",
//   "apple",
//   "orange",
//   "mandarin",
//   "plum",
//   "persimmon",
//   "fig",
// ];

// const overLength = fruits.map((x) => (x.length >= 6 ? x + "💙" : x + "💔"));
// console.log(overLength);

// const changeLength = fruits.map((word) =>
//   word.length * 2 < 15 ? "과일이름 짧음" : "과일이름 김"
// );
// console.log(changeLength);

const arr = [1, 3, 5, 7, 9];

// 요소 중에 하나라도 있으면 true 없으면 false
const isThree = (x) => x == 3;
const hasThree = arr.some(isThree);
console.log(hasThree);

const isEven = (x) => x % 2 == 0;
const hasEven = arr.some(isEven);
console.log(hasEven);

const fruits = [
  "peach",
  "mango",
  "strawberry",
  "apple",
  "orange",
  "mandarin",
  "plum",
  "persimmon",
  "fig",
];

const startKbS = fruits.some(
  (word) => word.startsWith("k") || word.startsWith("b") || word.startsWith("s")
);
console.log(startKbS);

const isLengthTure = fruits.every(
  (word) => word.length >= 4 && word.length <= 12
);
console.log(isLengthTure);

const hasSpell = fruits.map((word) =>
  word.includes("i") || word.includes("o") || word.includes("u") ? "💛" : "💥"
);
console.log(hasSpell);

const song = `
Ooh
I, I just woke up from a dream
Where you and I had to say goodbye
And I don't know what it all means
But since I survived, I realized
Wherever you go, that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night like it's the last night
Like it's the last night
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
Ooh
Oh, lost, lost in the words that we scream
I don't even wanna do this anymore
'Cause you already know what you mean to me
And our love's the only war worth fighting for
Wherever you go, that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night like it's the last night
Like it's the last night
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
Right next to you
Next to you
Right next to you
Oh-oh, oh
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
If the world was ending, I'd wanna be next to you
Ooh
I'd wanna be next to you`;

const changHeart = song
  .split(" ")
  .map((word) => (word.length > 6 ? "💛" : word))
  .join(" ");
console.log(changHeart);

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter[입구컷]
const overSix = numArr.filter((x) => x >= 6);
console.log(overSix);

const lower100 = numArr.filter((x) => x ** 2 < 100).map((x) => x + 10);
console.log(lower100);
