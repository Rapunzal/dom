const mainEle = document.getElementById("app");
const frm = document.querySelector("form");
const btn = document.querySelector("form button");
const changeBackground = document.querySelector("button");
const inpStyle = document.querySelectorAll("form input");

inpStyle.forEach((items)=>)

btn.addEventListener("click", function () {
  console.log("Click me");
});

changeBackground.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  const bgColor = document.body.style.backgroundColor;
  const colour = document.body.style.color;
  if (bgColor !== "black" && colour !== "white") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
}
