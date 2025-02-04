const btn = document.querySelector("#btn");
const input = document.querySelector("#input");

btn.addEventListener("click", (e) => {
  const { target } = e;
  const { innerHTML } = target;
  target.innerHTML = innerHTML == "🥰" ? "😍" : "🥰";
});

input.addEventListener("input", (e) => {
  const { target } = e;
  console.log(target.value.length);
});
