// 1.
const nickname = prompt("닉네임 입력");
const name = nickname ? nickname : "Guest";
alert(`${name}님 환영합니다😀`);

//const usernickname = prompt("닉네임 입력") || "Guest"; // teacher's

// 2.
// const pw = Number(prompt("화장실 비밀번호 입력"));
// const result = pw == 1024 ? "화장실 비밀번호 정답😊" : "";
// alert(result);
const password = prompt("화장실 비밀번호 입력");
password == "1024" && alert("비밀번호 화장실 정답😊");
