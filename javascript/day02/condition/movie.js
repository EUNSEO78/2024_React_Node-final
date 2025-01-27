const movie_type = +prompt("1~3 중 입력>>");
const age = +prompt("나이 입력 >>");
const movie_title =
  movie_type == 1
    ? "액션 영화"
    : movie_type == 2
    ? "로맨틱 코미디"
    : "공포 영화";
const price = movie_type == 1 ? 10000 : movie_type == 2 ? 8000 : 9000;
if (age <= 13) {
  alert(`최종 티켓 가격 => ${movie_title}의 가격 ${price * 0.5}`);
} else if (age >= 60) {
  alert(`최종 티켓 가격 => ${movie_title}의 가격 ${price * 0.7}`);
} else {
  alert(`최종 티켓 가격 => ${movie_title}의 가격 ${price}`);
}
