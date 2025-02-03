const contents = document.querySelector("#contents");
const title = document.querySelector("#title");
const desc = document.querySelector("#desc");

const list = [
  {
    id: "#home",
    title: "Home",
    bacgroundColor: "pink",
    desc: "To go Home, click here.",
  },
  {
    id: "#news",
    title: "News",
    bacgroundColor: "skyblue",
    desc: "To go News, click here.",
  },
  {
    id: "#contacts",
    title: "Contacts",
    bacgroundColor: "palevioletred",
    desc: "To go Contacts, click here.",
  },
  {
    id: "#about",
    title: "About",
    bacgroundColor: "orange",
    desc: "To go About, click here.",
  },
];

list.forEach((v) => {
  const li = document.querySelector(v.id);
  li.innerHTML = v.title;

  li.addEventListener("click", () => {
    list.forEach((v1) => {
      const target = document.querySelector(v1.id);
      target.style.backgroundColor = "white";
      target.style.color = "black";
    });

    li.style.backgroundColor = v.bacgroundColor;
    li.style.color = "white";

    contents.style.backgroundColor = v.bacgroundColor;
    title.innerHTML = v.title;
    desc.innerHTML = v.desc;
  });
});
