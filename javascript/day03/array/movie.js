const movieType = +prompt("영화 종류 입력( 1~3 ) : ");
const age = +prompt("나이 입력 : ");
const movie_genre = ["액션영화", "로맨틱 코미디", "공포영화"];
const movie_fee = [10000, 8000, 9000];

if (age < 13)
  alert(
    `${movie_genre[movieType - 1]} 장르 총 가격은 ${
      movie_fee[movieType - 1] * 0.5
    }입니다😉`
  );
else if (age >= 60)
  alert(
    `${movie_genre[movieType - 1]} 장르 총 가격은 ${
      movie_fee[movieType - 1] * 0.7
    }입니다😉`
  );
else
  alert(
    `${movie_genre[movieType - 1]} 장르 총 가격은 ${
      movie_fee[movieType - 1]
    }입니다😉`
  );
