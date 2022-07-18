const button = document.querySelector("button.change-color");
const colorName = document.querySelector("div.widget>p>span.color");
const body = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
  
button.addEventListener("click", e => {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  colorName.textContent = `${getRandomHexColor()}`;
});