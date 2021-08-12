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

// LOGIN
function userLogin(username, password) {
  console.log(username);
  console.log(password);
  fetch("https://secure-harbor-41796.herokuapp.com/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data["access_token"]) {
        console.log(data);
        myStorage = window.localStorage;
        myStorage.setItem("jwt-token", data["access_token"]);
        myStorage.setItem("username", username);
        myStorage.setItem("password", password);
        // window.location.href = "./products.html";
      }
    });
}

login_form.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  console.log(username);
  console.log(password);

  userLogin(username, password);
});

// REGISTER
// function register(firstName, lastName, email, username, password) {
//   console.log(firstName, lastName, email, username, password);
//   fetch("https://agile-tundra-03577.herokuapp.com/register/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       first_name: firstName,
//       last_name: lastName,
//       email: email,
//       username: username,
//       password: password,
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// }

// switch between register and sign in
// let switchButtons = document.querySelectorAll(".switchButton");
// let signInForm = document.querySelector(".signIn");
// let registerForm = document.querySelector(".register");

// switchButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     signInForm.classList.toggle("active");
//     registerForm.classList.toggle("active");
//   });
// });
