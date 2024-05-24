const form = document.getElementById("form");
const button = document.getElementById("button");
const firstName = document.querySelector(".firstName");
const firstNameErrMsg = document.getElementById("error-msg-firstname");
const lastName = document.querySelector(".lastName");
const lastNameErrMsg = document.getElementById("error-msg-lastname");
const email = document.querySelector(".email");
const emailErrMsg = document.getElementById("error-msg-email");
const passwordLabel = document.querySelector(".password-label");
const password = document.querySelector(".password");
const eyeIcon = document.getElementById("eye-icon");
const passwordErrMsg = document.getElementById("error-msg-password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;

  // Check first name
  if (fName === "") {
    firstName.classList.add("error", "error-bg");
    firstNameErrMsg.style.display = "block";
  } else {
    firstName.classList.remove("error", "error-bg");
    firstNameErrMsg.style.display = "none";
  }
  // Check last name

  if (lName === "") {
    lastName.classList.add("error", "error-bg");
    lastNameErrMsg.style.display = "block";
  } else {
    lastName.classList.remove("error", "error-bg");
    lastNameErrMsg.style.display = "none";
  }
  // Check email

  if (emailVal === "") {
    email.classList.add("error", "error-bg");
    emailErrMsg.textContent = "Email cannot be empty";
    emailErrMsg.style.display = "block";
  } else if (!validateEmail(emailVal)) {
    email.classList.add("error", "error-bg");
    email.style.color = "red";
    emailErrMsg.textContent = "Looks like this is not an email";
    emailErrMsg.style.display = "block";
  } else {
    email.classList.remove("error", "error-bg");
    email.style.color = "black";
    emailErrMsg.style.display = "none";
  }

  // Check password

  if (passwordVal === "") {
    passwordLabel.classList.add("error");
    passwordErrMsg.style.display = "block";
  } else {
    passwordLabel.classList.remove("error");
    passwordErrMsg.style.display = "none";
  }
});

//Validate email
function validateEmail(email) {
  var re = /^[a-z0-9]+@[a-z]+\.com$/;
  // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const togglePasswordVisibility = () => {
  if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text");
    eyeIcon.setAttribute("src", "images/eye-open.svg");
  } else {
    password.setAttribute("type", "password");
    eyeIcon.setAttribute("src", "images/eye-slash.svg");
  }
};

eyeIcon.onclick = togglePasswordVisibility;
