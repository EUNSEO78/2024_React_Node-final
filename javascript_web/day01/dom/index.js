const btn = document.createElement("button");
btn.innerText = "고기쌀롱";
document.body.appendChild(btn);

// quiz
const hello = document.createElement("h1");
hello.innerText = "고기쌀롱 어서오고";
hello.style.color = "red";
document.body.appendChild(hello);

const meats = [
  "삼겹살",
  "목살",
  "돼지갈비",
  "양념갈비",
  "항정살",
  "갈매기살",
  "꼬들살",
  "냉삼",
  "뽈살",
  "돼지껍데기",
];

meats.forEach((x, i) => {
  const inner = document.createElement("button");
  inner.innerText = `${i}번째` + x;
  inner.style.backgroundColor = i % 2 ? "skyblue" : "yellow";
  inner.addEventListener("click", () => {
    alert(x);
  });

  document.body.appendChild(inner);
});

// quiz
