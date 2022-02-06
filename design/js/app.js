const fNameF = document.querySelector("#fName");
const lNameF = document.querySelector("#lName");
const emailF = document.querySelector("#email");
const passwordF = document.querySelector("#password");
const form = document.querySelector("#form");

var nameFormat = /^[a-zA-Z\s, ]+$/;
var passFormat = /^[A-Za-z]\w{7,14}$/;

//returns true if the input is empty, false if not
const isEmpty = value => value === "" ? true : false;

//form validation
const isEmailValid = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

//check validations
const checkFirstName = () => {
  const fName = fNameF.value.trim();

  if (isEmpty(fName)) {
    showError(fNameF, "First name cannot be empty");
    fNameF.setAttribute("placeholder", '');
  } else if (!fName.match(nameFormat)) {
    showError(fNameF, "Looks like it's not a first name");
  } else {
    showSuccess(fNameF);
  }
  return fName;
};



const checkLastName = () => {
  const lName = lNameF.value.trim();

  if (isEmpty(lName)) {
    showError(lNameF, "Last name cannot be empty");
    lNameF.setAttribute('placeholder', '');
  } else if (!lName.match(nameFormat)) {
    showError(lNameF, "Looks like it's not a last name");
  } else {
    showSuccess(lNameF);
  }
};

const checkEmail = () => {
  const email = emailF.value.trim();

  if (isEmpty(email)) {
    showError(emailF, "Email cannot be empty");
    emailF.setAttribute('placeholder', '');
  } else if (!isEmailValid(email)) {
    showError(emailF, "Looks like it's not an email")
    emailF.setAttribute('placeholder', 'email@example.com');
  } else {
    showSuccess(emailF);
  }
};

const checkPassword = () => {
  const password = passwordF.value.trim();

  if (isEmpty(password)) {
    showError(passwordF, "Password cannot be empty");
    passwordF.setAttribute('placeholder', '');
  } else if (!password.match(passFormat)) {
    showError(passwordF, "This password is not safe, please try again");
  } else {
    showSuccess(passwordF);
  }
};


const showError = (input, message) => {
  const form = input.parentElement;
  const error = form.querySelector("label");
  const image = form.querySelector("img");

  //add "error" class and css that goes along with it
  input.classList.add("error");
  image.classList.remove("errorIcon");
  input.classList.remove("success");

  //show the error message
  error.textContent = message;
}

const showSuccess = (input) => {
  const form = input.parentElement;
  const success = form.querySelector("label");
  const image = form.querySelector("img");

  //add "error" class and css that goes along with it
  input.classList.add("success");
  image.classList.add("errorIcon");
  input.classList.remove("error");

  //Show the error message in the "small" selector
  success.textContent = "";
}

//prevent form from submitting when there's an error
form.addEventListener("submit", function(e) {
  e.preventDefault();

  checkEmail(),
  checkPassword(),
  checkFirstName(),
  checkLastName();

  fNameF.addEventListener("blur", function(){
    checkFirstName();
  });

  lNameF.addEventListener("blur", function(){
    checkLastName();
  });

  passwordF.addEventListener("blur", function(){
    checkPassword();
  });

  emailF.addEventListener("blur", function(){
    checkEmail();
  });
});
