if (JSON.parse(localStorage.getItem("users")) === null) {
  localStorage.setItem("users", JSON.stringify([]));
}

const login = document.querySelector(".login");
const registration = document.querySelector(".registration");
const changeToReg = document.querySelector("#singup");
const changeToLog = document.querySelector("#backtologin");

changeToReg.addEventListener("click", () => {
  login.style.display = "none";
  registration.style.display = "flex";
});
changeToLog.addEventListener("click", () => {
  login.style.display = "flex";
  registration.style.display = "none";
});

const username = document.getElementById("login");
const password = document.getElementById("pass");
const signInBtn = document.getElementById("btn");

const regname = document.getElementById("name");
const regusername = document.getElementById("user");
const regpass = document.getElementById("password");
const regbtn = document.getElementById("signUpBtn");

regbtn.addEventListener("click", () => {
  let oldData = JSON.parse(localStorage.getItem("users"));
  let newData = {
    Name: regname.value,
    Username: regusername.value,
    Password: regpass.value,
  };
  localStorage.setItem("users", JSON.stringify([...oldData, newData]));
});

signInBtn.addEventListener("click", () => {
  let allUsers = JSON.parse(localStorage.getItem("users"));

  let currentUser = allUsers.find(
    (item) =>
      item.Password === password.value && item.Username === username.value
  );
  localStorage.setItem("current", JSON.stringify(currentUser));

  currentUser ? window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" :alert("User information is wrong!!!");
});

const forgotbtn = document.getElementById("forgot-pass");

forgotbtn.addEventListener("click", () => {
  let allUsers = JSON.parse(localStorage.getItem("users"));
  let findUser = allUsers.find((item) => item.Username === username.value);

  alert(findUser.Password);
});
