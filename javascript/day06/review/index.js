// 1.
const inputFood = (food) => console.log(food + "피자");
const inputEng = (eng) => console.log(eng.repeat(3));
const inputWon = (won) => console.log(won * 1430);

inputFood("😀");
inputEng("choi");
inputWon(1000);

// 2.
const gotoAcademy = (trans) => {
  console.log("집에서 출발");
  trans();
  console.log("학원 도착");
};

function taxi() {
  console.log("택시 탑승");
}
function bus() {
  console.log("버스 탑승");
}
function walk() {
  console.log("걷기 시작");
}
function bike() {
  console.log("자전거 탑승");
}
function momCar() {
  console.log("엄마차 탑승");
}

gotoAcademy(taxi);

// 3.
const makeBeverage = (beverage) => {
  console.log("주문 받기😊");
  beverage();
  console.log("주문 완료😊");
};

const coffee = () => {
  console.log(
    "1. 원두갈기 \n 2. 평탄화하기 \n 3. 커피기계넣기 \n 4. 버튼 클릭 \n 5. 즙짜기"
  );
};

const smoothie = () => {
  console.log("1. 재료 넣기 \n 2. 얼음 넣기 \n 3. 갈기 \n 4. 즙짜기");
};

const tea = () => {
  console.log("1. 티백넣기 \n 2. 뜨거운 물 넣기 \n 3. 후후 불기");
};

makeBeverage(coffee);
