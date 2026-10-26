
const tabs = document.querySelectorAll(".tabs button");

const loginform = document.querySelector(".login-form");
const signupform = document.querySelector(".signup-form");

const successMessage = document.getElementById("success-message");

tabs[0].addEventListener("click", function() {
    tabs[0].classList.add("active");
    tabs[1].classList.remove("active");

    loginform.style.display = "block";
    signupform.style.display = "none";

    successMessage.style.display = "none";
});

tabs[1].addEventListener("click", function() {
    tabs[1].classList.add("active");
    tabs[0].classList.remove("active");

    loginform.style.display = "none";
    signupform.style.display = "block";

    successMessage.style.display = "none";
});

const password = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");

togglePassword.addEventListener("click", function() {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
});

const passwordBtn = document.getElementById("password-btn");
const otpBtn = document.getElementById("otp-btn");

const passwordField = document.getElementById("password-field");
const otpField = document.getElementById("otp-field");

const passwordInput = document.getElementById("password");
const otpInput = document.getElementById("otp");
const forgotPassword = document.getElementById("forgot-password");

otpBtn.addEventListener("click", function() {
    passwordField.style.display = "none";
    otpField.style.display = "block";
    forgotPassword.style.display = "none";

    passwordInput.required = false;
    passwordInput.disabled = true;

    otpInput.disabled = false;
    otpInput.required = true;

    otpBtn.classList.add("active");
    passwordBtn.classList.remove("active");
});

passwordBtn.addEventListener("click", function() {
    passwordField.style.display = "block";
    otpField.style.display = "none";
    forgotPassword.style.display = "block";

    passwordInput.disabled = false;
    passwordInput.required = true;

    otpInput.disabled = true;
    otpInput.required = false;

    passwordBtn.classList.add("active");
    otpBtn.classList.remove("active");
});

const signupOtpBtn = document.getElementById("signup-otp-btn");
const signupPasswordBtn = document.getElementById("signup-password-btn");

const signupOtpField = document.getElementById("signup-otp-field");
const signupPasswordField = document.getElementById("signup-password-field");

const signupOtp = document.getElementById("signup-otp");
const signupPassword = document.getElementById("signup-password");

signupOtpBtn.addEventListener("click", function() {
    signupOtpField.style.display = "block";
    signupPasswordField.style.display = "none";

    signupOtp.disabled = false;
    signupOtp.required = true;

    signupPassword.disabled = true;
    signupPassword.required = false;

    signupOtpBtn.classList.add("active");
    signupPasswordBtn.classList.remove("active");
});

signupPasswordBtn.addEventListener("click", function() {
    signupOtpField.style.display = "none";
    signupPasswordField.style.display = "block";

    signupOtp.disabled = true;
    signupOtp.required = false;

    signupPassword.disabled = false;
    signupPassword.required = true;

    signupPasswordBtn.classList.add("active");
    signupOtpBtn.classList.remove("active");
});


const loginFormElement = document.querySelector(".login-form form");
const signupFormElement = document.querySelector(".signup-form form");

const loginMessage = document.getElementById("login-message");
const signupMessage = document.getElementById("signup-message");

loginFormElement.addEventListener("submit", function(event) {
    event.preventDefault();

    signupMessage.style.display = "none";
    loginMessage.textContent = "Login successful!";
    loginMessage.style.display = "block";
});

signupFormElement.addEventListener("submit", function(event) {
    event.preventDefault();

    loginMessage.style.display = "none";

    const recaptcha = document.getElementById("recaptcha");

    if (!recaptcha.checked) {
        signupMessage.textContent = "Please confirm that you're not a robot.";
        signupMessage.style.display = "block";
        return;
    }

    signupMessage.textContent = "Registration successful!";
    signupMessage.style.display = "block";
});
