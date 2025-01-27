// 1.
// const starbucks = {
//   menu: [
//     { name: "아이스 아메리카노", price: 4000 },
//     { name: "라떼", price: 4500 },
//     { name: "유자차", price: 4000 },
//   ],
//   sales: 0,
//   sellMenu: function () {
//     const num = prompt("번호를 입력하시오");
//     this.menu[num] == undefined
//       ? alert("번호 오류😂")
//       : (this.sales = this.sales + this.menu[num].price);
//   },
//   printSale: function () {
//     console.log(`총 매출 => ${this.sales}`);
//   },
//   addMenu: function (name, price) {
//     this.menu.push({ name: name, price: price });
//   },
// };

// starbucks.addMenu("바닐라 라떼", 6000);
// starbucks.sellMenu();
// starbucks.sellMenu();
// starbucks.sellMenu();
// starbucks.sellMenu();
// starbucks.printSale();

// 2.
// const magician = {
//   stamina: 100,
//   mana: 100,
//   level: 1,
//   experience: 0,
//   getExp: function (exp) {
//     this.experience = this.experience + exp;
//     if (this.exp >= 100) {
//       this.level = this.level + 1;
//       this.experience = this.experience - 100;
//       console.log("레벨이 올랐습니다.");
//     }
//   },
//   magicClaw: function () {
//     this.mana > 10
//       ? (this.mana = this.mana - 10) &&
//         this.getExp(10) &&
//         console.log("매직클로 발동😋")
//       : console.log("마나 부족😂");
//   },
//   teleport: function () {
//     this.mana > 50
//       ? (this.mana = this.mana - 50) &&
//         this.getExp(50) &&
//         console.log("텔레포트 발동😋")
//       : console.log("마나 부족😂");
//   },
//   potionDrink: function () {
//     this.stamina = this.stamina + 50;
//     this.mana = this.mana + 50;
//     console.log(
//       `포션을 마십니다. 현재 체력: ${this.stamina} 현재 마나: ${this.mana}`
//     );
//   },
//   printAll: function () {
//     console.log(
//       `stamina: ${this.stamina}, mana: ${this.mana}, level: ${this.level}, experience: ${this.experience} `
//     );
//   },
// };

// magician.magicClaw();
// magician.teleport();
// magician.teleport();
// magician.potionDrink();
// magician.teleport();

// 3.
// const youtube = {
//   id: "yyy3182",
//   subChanel: 0,
//   likedChanel: 0,
//   subscribe: function () {
//     this.subChanel = this.subChanel + 1;
//     console.log(`구독했습니다😊 현재 구독채널: ${this.subChanel}`);
//   },
//   like: function () {
//     this.likedChanel = this.likedChanel + 1;
//     console.log(
//       `좋아요 눌렀습니다.😀 현재 좋아요 누른 채널: ${this.likedChanel}`
//     );
//   },
// };

// youtube.subscribe();
// youtube.subscribe();
// youtube.subscribe();
// youtube.like();
// youtube.like();

// const car = {
//   name: "기아 스포티지 하이브리드",
//   speed: 0,
//   upSpeed: function (speed) {
//     this.speed = this.speed + speed;
//     console.log(`속도를 ${speed} 올렸습니다😀`);
//   },
//   downSpeed: function (speed) {
//     this.speed = this.speed ? this.speed - 1 : 0;
//     console.log(`속도를 ${speed} 내렸습니다😊`);
//   },
//   breakCar: function () {
//     this.speed = 0;
//     console.log("브레이크를 밟았습니다.");
//   },
//   currentSpeed: function () {
//     console.log(`현재 속도 : ${this.speed}`);
//   },
// };

// car.upSpeed(30);
// car.upSpeed(50);
// car.upSpeed(40);
// car.downSpeed(20);
// car.currentSpeed();
// car.breakCar();
// car.currentSpeed();

const calculator = {
  result: 0,
  history: [],
  add: function (x) {
    this.result = this.result + x;
    this.showHistory();
  },
  minus: function (x) {
    this.result = this.result - x;
    this.showHistory();
  },
  multiply: function () {
    console.log(`현재 결과: ${this.result}`);
    this.showHistory();
  },
  divide: function (x) {
    x
      ? (this.result = this.result / x) && this.showHistory()
      : this.history.push("error");
  },
  square: function () {
    this.result = this.result ** 2;
    this.showHistory();
  },
  clear: function () {
    this.result = 0;
    this.showHistory();
  },
  showHistory: function () {
    this.history.push(this.result);
  },
};

calculator.add(50);
calculator.minus(20);
calculator.divide(0);
calculator.divide(2);
calculator.square();
console.log(calculator.history);
