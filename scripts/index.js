// Active class function
// for login/register buttons
let buttons = document.querySelectorAll(".tab");

let reg_form = document.querySelector(".register-form");
let login_form = document.querySelector(".login-form");

let login = document.querySelector("#login");
let register = document.querySelector("#register");

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
let date = new Date();

let logInButton = document.querySelector(".login");

function loginF(username, password) {
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
        window.location.href = "/products.html";
      }
    });
}

// REGISTER
function registerF(name, email, username, password) {
  console.log(name, email, username, password);
  fetch("https://secure-harbor-41796.herokuapp.com/registration/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      username: username,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
