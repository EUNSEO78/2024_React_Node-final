// const bus_num = +prompt("버스 노선의 종류 입력 :");
// const age = +prompt("나이 입력 :");
// const bus_type =
//   bus_num == 1 ? "시내버스" : bus_num == 2 ? "광역버스" : "마을버스";
// const bus_price = bus_num == 1 ? 1200 : bus_num == 2 ? 2000 : 1000;
// if (age < 7 || age > 65) {
//   alert(`${bus_type}의 요금 : 무료입니다.`);
// } else if (age >= 8 && age <= 19) {
//   alert(`${bus_type}의 요금 : ${bus_price * 0.7} 입니다.`);
// } else {
//   alert(`${bus_type}의 요금 : ${bus_price} 입니다.`);
// }

const bus_num = +prompt("버스 노선의 번호 입력(1~3) : ");
const age = +prompt("나이 입력 : ");

// const bus_type = ["시내버스", "광역버스", "마을버스"];
// const bus_price = [1200, 2000, 1000];
// const age_sale =
//   age < 7 || age > 65
//     ? "무료입니다."
//     : age >= 8 && age <= 19
//     ? bus_price[bus_num - 1] * 0.7
//     : [bus_num - 1];

// alert(
//   `${bus_type[bus_num - 1]}의 총 가격 : ${age_sale[bus_price[bus_num - 1]]} `
// );

const bus_data = ["시내버스", "광역버스", "마을버스"];
const bus_fee = [1200, 2000, 1000];
if (age < 7 || age > 65) alert("무료입니다.");
else if (age >= 8 && age <= 19)
  alert(
    `청소년 비용은 ${bus_data[bus_num - 1]}비용은 ${
      bus_fee[bus_num - 1] * 0.7
    }원 입니다.`
  );
else
  alert(
    `청소년 비용은 ${bus_data[bus_num - 1]}비용은 ${
      bus_fee[bus_num - 1] * 0.1
    }원 입니다.`
  );
