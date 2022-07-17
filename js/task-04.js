const buttonDecrement = document.querySelector('div#counter>button[data-action="decrement"]');
const buttonIncrement = document.querySelector('div#counter>button[data-action="increment"]');
const counter = document.querySelector('div#counter>span#value');

let value = 0;

buttonDecrement.addEventListener("click", () => counter.textContent = value -= 1);
buttonIncrement.addEventListener("click", () => counter.textContent = value += 1);

/*
Dłuższy sposób:

const decrement = () => {
  counter.textContent = value -= 1;
};

const increment = () => {
  counter.textContent = value += 1;
};

buttonDecrement.addEventListener("click", decrement);
buttonIncrement.addEventListener("click", increment);

*/

