const btn = document.querySelector("#btn");
const input = document.querySelector("#input");

btn.addEventListener("click", (e) => {
  const { target } = e;
  const { innerHTML } = target;
  target.innerHTML = innerHTML == "🥰" ? "😍" : "🥰";
});

input.addEventListener("input", (e) => {
  const { target } = e;
  target.placeHordler = "검색어를 입력하시오";
  console.log(target.value.length);
  console.log(target.placeHordler);
});
