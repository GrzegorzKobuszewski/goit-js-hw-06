const form = document.querySelector("form.login-form");

form.addEventListener("submit", e => {
    e.preventDefault();
    const { elements: { email, password } } = e.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return alert("Wypełnij wszystkie pola formularza");
    };

    const userData = { email: email.value, password: password.value }
    console.log (userData);
    e.currentTarget.reset();
});