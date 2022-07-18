const createButton = document.querySelector(`button[data-create=""]`);
const destroyButton = document.querySelector(`button[data-destroy=""]`);
const input = document.querySelector(`div#controls>input`);
const boxes = document.querySelector(`div#boxes`);

createButton.addEventListener("click", () => createBoxes(input.value));
destroyButton.addEventListener("click", () => destroyBoxes());

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function createBoxes(number) {
  let BoxWidth = 30;
  let BoxHeight = 30;

  for (let i = 0; i < number; i += 1) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = `${getRandomHexColor()}`;
    box.style.width = `${BoxWidth+(10*i)}px`;
    box.style.height = `${BoxHeight+(10*i)}px`;
    boxes.prepend(box);
  }
};

const destroyBoxes = () => {
  boxes.textContent = "";
};