// 1.
const id = prompt("만들고 싶은 아이디 입력하시오.");

!(id.length >= 4 && id.length <= 16)
  ? alert("길이 오류")
  : !(
      id.includes("!") ||
      id.includes("@") ||
      id.includes("#") ||
      id.includes("&")
    )
  ? alert("특수문자 넣어")
  : !(
      id.slice(id.length - 1, id.length) ==
      id.slice(id.length - 1, id.length).toUpperCase()
    )
  ? alert("마지막 대문자")
  : alert(id);
