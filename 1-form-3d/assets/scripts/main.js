let signUpBtn = document.querySelector(".sign-up-btn");
let signInBtn = document.querySelector(".sign-in-btn");
let signForm = document.querySelector(".sign-form");

signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signForm.classList.add("rotate");
});

signInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signForm.classList.remove("rotate");
});