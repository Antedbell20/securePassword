//assign variables and arrays
var Length;
var confirmUppercase;
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special= ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ","_", "`", "{", "|", "}", "~"] ;
var UserChoices;
var confirmLowercase;
var confirmNumbers;
var confirmSpecial
var lowerCase = ["a", "b", 'c', 'd', 'e', 'f', 'g','h' ,'i' ,'j', 'k' ,'l' ,'m' ,'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var blankUpper = [];
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);
// var upperCase = ["A", 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function generatePassword() {
 
    passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
    console.log("Password length " + Length);
    
    if(!passwordLength) {
      alert("Required value");
  
    } else if (Length < 8 || Length > 128) {
      Length = prompt("You must choose between 8 and 128");
      console.log("Password length " + Length);
    
    } else { 
      confirmLowercase = confirm("Will this contain lower case letters?");
      console.log("Lower case " + confirmLowercase);
      confirmUppercase = confirm("Will this contain upper case letters?");
      console.log("Upper case " + confirmUppercase);
      confirmNumber = confirm("Will this contain numbers?");
      console.log("Number " + confirmNumber);
      confirmSpecial = confirm("Will this contain special characters?");
      console.log("Special Character " + confirmSpecial);
  
    };
  
   
    if (!confirmLowercase && !confirmUppercase && !confirmNumber && !confirmSpecial) {
      userChoices = alert("You must choose a criteria");
   
    } else if (confirmLowercase && confirmUppercase && confirmNumber && confirmSpecial) {
      userChoices = lowerCase.concat(upperCase, numbers, special);
      console.log(userChoices);
    }
 
    else if (confirmLowercase && confirmUppercase && confirmNumber) {
      userChoices = lowerCase.concat(upperCase, numbers);
      console.log(userChoices);
    }
    else if (confirmLowercase && confirmUppercase && confirmSpecial) {
      userChoices = lowerCase.concat(upperCase, special);
      console.log(userChoices);
    }
    else if (confirmLowercase && confirmNumbercase && confirmSpecial) {
      userChoices = lowerCase.concat(numbers, special);
      console.log(userChoices);
    }
    else if (confirmUppercase && confirmNumbercase && confirmSpecial) {
      userChoices = upperCase.concat(numbers, special);
      console.log(userChoices);
    }

    else if (confirmLowercase && confirmUppercase) {
      userChoices = lowerCase.concat(upperCase);
      console.log(userChoices);
    }
    else if (confirmLowercase && confirmNumber) {
      userChoices = lowerCase.concat(numbers);
      console.log(userChoices);
    }
    else if (confirmLowercase && confirmSpecial) {
      userChoices = lowerCase.concat(special);
      console.log(userChoices);
    }
    else if (confirmUppercase && confirmNumber) {
      userChoices = upperCase.concat(numbers);
      console.log(userChoices);
    }
    else if (confirmUppercase && confirmSpecial) {
      userChoices = upperCase.concat(special);
      console.log(userChoices);
    }
    else if (confirmNumber && confirmSpecial) {
      userChoices = numbers.concat(special);
      console.log(userChoices);
    }
 
    else if (confirmLowercase) {
      userChoices = lowerCase;
      console.log(userChoices);
    }
    else if (confirmUppercase) {
      userChoices = blankUpper.concat(upperCase);
      console.log(userChoices);
    }
    else if (confirmNumber) {
      userChoices = numbers;
      console.log(userChoices);
    }
    else if (confirmSpecial) {
      userChoices = special;
      console.log(userChoices);
    };

 
    var passwordBlank = [];
  
 
    for (var i = 0; i < Length; i++) {
      var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
      passwordBlank.push(allChoices);
      console.log(allChoices);
    }

 
    var password = passwordBlank.join("");
    console.log("Your Pasword is: " + password);
    return password;
}



var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);