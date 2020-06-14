// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChars = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
                      "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
                      "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["1","2","3","4","5","6","7","8","9"]
var specChars = ["!","@","#","$","%","&","*",]


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    // THEN I am presented with a series of prompts for password criteria
    // WHEN prompted for password criteria
    // THEN I select which criteria to include in the password
    // WHEN prompted for the length of the password
    // THEN I choose a length of at least 8 characters and no more than 128 characters
    var length = prompt("Please enter password length", "8-128");

    if (isNaN(length)) {
        alert("Password length must be a number 8-128")
        generatePassword();
    } else if (length < 8 || length > 128) {
        alert("Password length must be a number 8-128")
        generatePassword();
    }
    // THEN I choose lowercase, uppercase, numeric, and/or special characters
    // WHEN I answer each prompt 
    // THEN my input should be validated and at least one character type should be selected
    var containsLowercase = confirm("Do you want password to include lowercase letters")

    var containsUppercase = confirm("Do you want password to include uppercase letters")

    var containsNumbers = confirm("Do you want password to include numbers")

    var containsSpecialCharacters = confirm("Do you want password to include special characters")

    //if all are false alert you must choose one 

    if (containsLowercase === false &&
        containsUppercase === false &&
        containsNumbers === false &&
        containsSpecialCharacters === false) {
        alert("You must select at least 1 character type")
        generatePassword();
    }

    // now that we have all of their options
    // generate a password using each one that is true

  generateBtn.addEventListener('click', () => {
      const length = +length.value

  });


    // create a funciton for gettring a random element from an array
    // create a function that generates the password, uses the length 





}





// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
