
function getinput() {
    var name = document.forms["register"]["name"];
    var email = document.forms["register"]["email"];
    var password = document.forms["register"]["password"];
    var comfirm = document.forms["register"]["comfirm"];
    var phone = document.forms["register"]["phone"];

    if (name.value == "") {
        setErrorFor(name, "Please enter your name."); 
        name.focus();
        return false;
    }
    else if (!Namecheck(name.value)){
        setErrorFor(name, "Invalid name."); 
        name.focus();
        return false;
    }
    else {
        setSuccessFor(name);
    }

    if (email.value == "") {
        setErrorFor(email, "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    else if (!Emailcheck(email.value)){
        setErrorFor(email, "Not a valid email.");
        email.focus();
        return false;
    }
    else {
      setSuccessFor(email);
    }

    if (password.value == "") {
        setErrorFor(password, "Please enter your password");
        password.focus();
        return false;
    }
    else if (!Passwordcheck(password.value)){
        setErrorFor(password, "Password not strong.");   /*\n*At least 8 characters—the more characters, the better.\n*Uses uppercase and lowercase letters, numbers and special symbols.\n*Inclusion of at least one special character, e.g., ! @ # ? ]");*/
        password.focus();
        return false;
    }
    else {
      setSuccessFor(password);
    }

    if (comfirm.value == "") {
        setErrorFor(comfirm, "Please enter your password comfirm");
        comfirm.focus();
        return false;
    }

    if (comfirm.value != password.value) {
        setErrorFor(comfirm, "Passwords must match.");
        comfirm.focus();
        return false;
    }
    else {
      setSuccessFor(comfirm);
    }

    if (phone.value == "") {
        setErrorFor(phone, "Please enter your telephone number.");
        phone.focus();
        return false;
    }
    else if (!Phonecheck(phone.value)){
        setErrorFor(phone, "Not a valid Phone.");
        phone.focus();
        return false;
    }
    else {
      setSuccessFor(phone);
    }
    return  window.alert("Register Complete."); 
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "data success";
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector(".message");

  small.innerText = message;
  formControl.className = "data error";
}

function Emailcheck(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
function Namecheck(name) {
    return /^[A-Za-z]{1,20}$/.test(name);
}
function Passwordcheck(password){
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9!@#$%^&*()_]{8,30}$/.test(password);
}
function Phonecheck(phone){
    return /^[\+]?[0-9]{7,15}$/.test(phone)
}