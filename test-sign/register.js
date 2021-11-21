
function getinput() {
    var name = document.forms["register"]["name"];
    var email = document.forms["register"]["email"];
    var password = document.forms["register"]["password"];
    var comfirm = document.forms["register"]["comfirm"];
    var phone = document.forms["register"]["phone"];

    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }
    else if (!Namecheck(name.value)){
        window.alert("Invalid name.");
        name.focus();
        return false;
    }

    if (email.value == "") {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    else if (!Emailcheck(email.value)){
        window.alert("Not a valid email.");
        email.focus();
        return false;
    }
    if (password.value == "") {
        window.alert("Please enter your password");
        password.focus();
        return false;
    }
    else if (!Passwordcheck(password.value)){
        window.alert("Password not strong.\n*At least 8 characters—the more characters, the better.\n*Uses uppercase and lowercase letters, numbers and special symbols.\n*Inclusion of at least one special character, e.g., ! @ # ? ]");
        password.focus();
        return false;
    }

    if (comfirm.value == "") {
        window.alert("Please enter your password comfirm");
        comfirm.focus();
        return false;
    }

    if (comfirm.value != password.value) {
        window.alert("Passwords must match.");
        comfirm.focus();
        return false;
    }

    if (phone.value == "") {
        window.alert("Please enter your telephone number.");puu
        phone.focus();
        return false;
    }
    else if (!Phonecheck(phone.value)){
        window.alert("Not a valid Phone.");
        phone.focus();
        return false;
    }
    return true; 
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