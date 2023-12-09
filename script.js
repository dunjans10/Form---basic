//LOGIN VALDIDATION

function validateLogin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.trim() === "" || !emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (password.trim() === "") {
    alert("Please enter your password.");
    return;
  }

 
  alert("Login successful!"); 
}


//SIGN UP VALDIDATION


function validateSignUp() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var signUpEmail = document.getElementById("signUpEmail").value;
  var signUpPassword = document.getElementById("signUpPassword").value;
  var confirmPassword = document.getElementById("confirmPassword").value;


  if (firstName.trim() === "") {
    alert("Please enter your first name.");
    return;
  }

  if (lastName.trim() === "") {
    alert("Please enter your last name.");
    return;
  }

  if (signUpEmail.trim() === "") {
    alert("Please enter your email.");
    return;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    firstName.trim() === "" ||
    lastName.trim() === "" ||
    signUpEmail.trim() === "" ||
    !emailRegex.test(signUpEmail)
  ) {
    alert("Please enter valid information in all fields, including a valid email address.");
    return;
  }

  if (confirmPassword.trim() === "") {
    alert("Please confirm your password.");
    return;
  }

  if (signUpPassword !== confirmPassword) {
    alert("Passwords do not match. Please check and try again.");
    return;
  }

 
  alert("Sign Up successful!"); 
}

