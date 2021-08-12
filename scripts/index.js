// let width = getComputedStyle(document.body).width;
// let height = getComputedStyle(document.body).height;

// let logContainer = document.querySelector(".login-img");

// logContainer.style.width = width;
// logContainer.style.height = height;

// Active class function
// for login/register buttons
let buttons = document.querySelectorAll(".tab");

let reg_form = document.querySelector(".register-form");
let login_form = document.querySelector(".login-form");

let login = document.querySelector("#login");
let register = document.querySelector("#register");

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", change);
// }

// function change(e) {
//   for (let i = 0; i < buttons.length; i++) {
//     buttons[i].classList.remove("active");
//   }
//   e.currentTarget.classList.add("active");
// }

login.addEventListener("click", () => {
  register.classList.remove("active");
  reg_form.classList.remove("active");

  login.classList.add("active");
  login_form.classList.add("active");
});

register.addEventListener("click", () => {
  login.classList.remove("active");
  login_form.classList.remove("active");

  register.classList.add("active");
  reg_form.classList.add("active");
});
