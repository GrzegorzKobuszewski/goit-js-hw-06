const textInput = document.querySelector("input#validation-input");

textInput.addEventListener("blur", (e) => {
    if (e.currentTarget.value.length === 6) e.currentTarget.setAttribute("class", "valid")
    else e.currentTarget.setAttribute("class", "invalid");
});



