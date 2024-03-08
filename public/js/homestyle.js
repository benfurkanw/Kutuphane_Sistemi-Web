var loginForm = document.getElementById("loginForm");
var signupForm = document.getElementById("signupForm");
var loginButton = document.querySelectorAll(".button")[0];
var signupButton = document.querySelectorAll(".button")[1];

function toggleLogin() {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    loginButton.style.display = "none";
    signupButton.style.display = "none";
}

function toggleSignup() {
    signupForm.style.display = "block";
    loginForm.style.display = "none";
    signupButton.style.display = "none";
    loginButton.style.display = "none";
}

function goBack() {
    loginForm.style.display = "none";
    signupForm.style.display = "none";
    loginButton.style.display = "block";
    signupButton.style.display = "block";
}

loginButton.addEventListener("click", toggleLogin);
signupButton.addEventListener("click", toggleSignup);




