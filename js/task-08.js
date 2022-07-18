
const form = document.addEventListener("form.login-form");
const submit = document.querySelector(`form>button[type="submit"]`);

submit.addEventListener("submit", e => {
    e.preventDefault();
    const { elements: { login, password } } = e.currentTarget;
    
    if (login.value === "" || password.value === "") alert("Wypełnij wszystkie pola formularza");
    if (login.value !== "" && password.value !== "") {
        console.log (`Login: ${login.value}, Password: ${password.value}`);
        e.currentTarget.reset();
    }
});