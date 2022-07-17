const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

input.addEventListener("input", (e) => {
    if (!e.currentTarget.value) output.textContent = "Anonymous"
    else output.textContent = e.currentTarget.value;
});