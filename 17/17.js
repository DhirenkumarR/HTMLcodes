var pwd = document.getElementById("pwd");
var lower = document.getElementById("lower");
var capital = document.getElementById("capital");
var num = document.getElementById("num");
var length = document.getElementById("length");

pwd.onfocus = function(){
    document.getElementById("validate").style.display = "block";
}

pwd.onblur = function(){
    document.getElementById("validate").style.display = "none";    
}

pwd.onkeyup = function(){
    var lowerCase = /[a-z]/g;
    if(pwd.value.match(lowerCase)) {  
        lower.classList.remove("invalid");
        lower.classList.add("valid");
    } else {
        lower.classList.remove("valid");
        lower.classList.add("invalid");
    }

    var upperCase = /[A-Z]/g;
    if(pwd.value.match(upperCase)) {  
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    var number = /[0-9]/g;
    if(pwd.value.match(number)) {  
        num.classList.remove("invalid");
        num.classList.add("valid");
    } else {
        num.classList.remove("valid");
        num.classList.add("invalid");
    }

    if(pwd.value.length >= 6){
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

var uname = document.getElementById("uname");
var starting = document.getElementById("starting");
uname.onfocus = function(){
    document.getElementById("validate_uname").style.display = "block";
}

uname.onblur = function(){
    document.getElementById("validate_uname").style.display = "none";    
}

var sign1 = "_";
var sign2 = "@";
var number = /[0-9]/g;

uname.onkeyup = function(){
    if(uname.value.charAt(0) === sign1 | uname.value.charAt(0) === (sign2) | uname.value.charAt(0).match(number)){
        starting.classList.remove("valid_uname");
        starting.classList.add("invalid_uname");
    }
    else {
        starting.classList.remove("invalid_uname");
        starting.classList.add("valid_uname");
    }
}