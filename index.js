// Register form validation and submission
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
  jsstart();
});

var emailvar = '';
var passvar = '';

function jsstart() {

  const registerForm = document.getElementById("registerForm");
  //document.getElementById("registerform").style.backgroundColor = "lightblue";
  registerForm.style.background = "lightblue";
  registerForm.addEventListener("submit", function(event){
    event.preventDefault();
    if (validEmail() && isPasswordValid()) {
      // If both email and password are valid and match, submit the form to the server
      registerFormSubmit();
    }
  });

  const loginForm = document.getElementById("loginForm");
  loginForm.style.background = "lightgreen";
  loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting
  const loginEmail = document.getElementById("login-email").value;
  const loginPass = document.getElementById("login-password").value;
  const loginemailError = document.getElementById("login-email-error").value;
  const loginpassError = document.getElementById("login-password-error").value;
  console.log(loginEmail)
  console.log(loginPass)
  console.log(emailvar)
  console.log(passvar)


  if (validEmail(loginEmail) && isPasswordValid(loginPass)) {
    if (loginEmail === emailvar && loginPass === passvar) {

      loginFormSubmit();

    } else if (loginEmail != emailvar){
      //alert("Invalid email or password");
      emailError.innerHTML = "Please enter a valid email address";
      emailError.style.color = "red";
      emailError.style.backgroundColor = "pink";
   
    } else if (loginPass = passvar) {
      passwordError.innerHTML = "Passwords do not match";
      passwordError.style.color = "red";
      passwordError.style.backgroundColor = "pink";
    } else if (loginPass === "") {
      passwordError.innerHTML = "Please enter password";
      passwordError.style.color = "red";
      passwordError.style.backgroundColor = "pink";
    }
  } 
});
}



function validEmail() {
  let email = document.getElementById("inputemail").value;
  let emailError = document.getElementById("email-error");
  emailvar = email

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.innerHTML = "Please enter a valid email address";
      emailError.style.color = "red";
      emailError.style.backgroundColor = "pink";
      return false;
  }

  emailError.innerHTML = "";
  return true;
}



function isPasswordValid() {
  const password = document.getElementById("pass").value;
  const rePassword = document.getElementById("re-password").value;
  const passwordError = document.getElementById("password-error");
  passvar = password;

  // Check if password and re-enter password match
  if (password !== rePassword) {
    passwordError.innerHTML = "Passwords do not match";
    passwordError.style.color = "red";
    passwordError.style.backgroundColor = "pink";
    return false;
  }

  // Check if password meets length and character requirements
  if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/.test(password)) {
    passwordError.innerHTML = "Password must be 8-12 characters long and contain at least one lowercase letter, one uppercase letter, and one number";
    passwordError.style.color = "red";
    passwordError.style.backgroundColor = "pink";
    return false;
  }

  passwordError.innerHTML = "";
  return true;
}




/*

function checkEmail() {
  let email = document.getElementById("login-email").value;
  let emailError = document.getElementById("login-email-error");

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.innerHTML = "Please enter a valid email address";
      return false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.innerHTML = "Please enter a valid email address";
      emailError.style.color = "red";
      emailError.style.backgroundColor = "pink";
      return false;
  }

  emailError.innerHTML = "";
  return true;
}


function checkPassword() {
  let password = document.getElementById("password").value;
  let passwordError = document.getElementById("password-error");

  if (password.length < 8) {
      passwordError.innerHTML = "Password must be at least 8 characters long";
      return false;
  }
  if (!/[a-z]/.test(password)) {
      passwordError.innerHTML = "Password must contain at least one lowercase letter";
      return false;
  }
  if (!/[A-Z]/.test(password)) {
      passwordError.innerHTML = "Password must contain at least one uppercase letter";
      return false;
  }
  if (!/\d/.test(password)) {
      passwordError.innerHTML = "Password must contain at least one number";
      return false;
  }
  if (!/[!@#$%^&*]/.test(password)) {
      passwordError.innerHTML = "Password must contain at least one special character";
      return false;
  }
  if (password == null || password == "") {
      passwordError.innerHTML = "Please enter a password";
      passwordError.style.color = "red";
      passwordError.style.backgroundColor = "pink";
      return false;
  }

  passwordError.innerHTML = "";
  return true;
}
*/

function registerFormSubmit() {
  // Handle registration form submission here
  window.location.href = "about-me.html";
  console.log("Registration form submitted");
  
}

function loginFormSubmit() {
  // Handle login form submission here
  window.location.href = "about-me.html";
  console.log("Login Form submitted");
  
}