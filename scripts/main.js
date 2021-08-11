// let width = getComputedStyle(document.body).width;
// let height = getComputedStyle(document.body).height;

// let logContainer = document.querySelector(".login-img");

// logContainer.style.width = width;
// logContainer.style.height = height;

// Active class function
// for login/register buttons
let buttons = document.querySelectorAll(".tab");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", change);
}

function change(e) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  e.currentTarget.classList.add("active");
}
