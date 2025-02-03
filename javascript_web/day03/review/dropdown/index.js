const click = document.querySelector("#click");
const linkList = document.querySelector("#linkList");

click.addEventListener("click", () => {
  if (linkList.style.display == "none") {
    linkList.style.display = "flex";
    click.style.backgroundColor = "blue";
    click.style.color = "white";
  } else {
    linkList.style.display = "none";
    click.style.backgroundColor = "white";
    click.style.color = "black";
  }
});
