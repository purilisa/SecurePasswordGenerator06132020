// Assignment Code
var generateBtn = document.querySelector("#generate");
var slider = document.getElementById("myPasswordRange");
var textBoxForRange = document.getElementById("numberRange");
var lowercaseEl = document.getElementById("lowerCase");
var uppercaseEl = document.getElementById("upperCase");
var numberEl = document.getElementById("numerics");
var specialCharEl = document.getElementById("specialCharacters");
var password = document.getElementById("password"); //where password will display
//making each criteria upto max limit=128, if user clicks only one criteria, password will not correctly generate
var stringLower = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
var stringUpper = stringLower.toUpperCase();
var randomnumber = "123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789";
var specialChars = "!@#$%^&*()_+!@#$%^&*()_+!@#$%^&*()_+!@#$%^&*()_+!@#$%^&*()_+!@#$%^&*()_+!@#$%^&*()_+!@#$%^&*()_+!@#$%^&*()_+!@#$%^&*()_+!@#$%^&*()_+!@#$%^&*()_+!@#$%^&*()_+!@#$%^&*()_+!@#$%^&*()_+!@#$%^&*()_+";
var passwordString = " ";


//update the slider value and enter into textbox to get password lenght
var passwordLenght = pickPasswordLenght();

function pickPasswordLenght() {
    var value = slider.value;
    textBoxForRange.value = value;
    return value;
}

//build character string for building secure password based on user criteria
function generatePassword() {

    if (lowercaseEl.checked === true) {
        if (lowercaseEl.checked === true) {
            passwordString += stringLower;
        }
    }

    if (uppercaseEl.checked === true) {
        if (uppercaseEl.checked === true) {
            passwordString += stringUpper;
        }
    }
    if (numberEl.checked === true) {
        if (numberEl.checked === true) {
            passwordString += randomnumber;
        }
    }
    if (specialCharEl.checked === true) {
        if (specialCharEl.checked === true) {
            passwordString += specialChars;
        }
    }
}

//render secure password with random lc, up, sp chars and numbers to display on screen
function displayPassword() {
    var newPassword = "";
    generatePassword();
    if (passwordString === " " || passwordString === undefined) {
        alert("please select a criteria");
    } else {
        var lenght = pickPasswordLenght();
        for (var i = 0; i < lenght; i++) {
            newPassword += passwordString.charAt(Math.floor(Math.random() * passwordString.length));
        }
        password.textContent = newPassword;

    }

}

// Add event listener to generate button
generateBtn.addEventListener("click", displayPassword);