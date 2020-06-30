// Declare Variables/user input variables
var enter;


// array of password special characters
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// array of numeric characters
var number = ["0","1","2","3","4","5","6","7","8","9"];
// Array of alphabetical characters
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var options;

//  Function to make letters uppercase
var toUpper = function(z) {
    return z.toUpperCase();
};
// alpha2 = what do I do with this variable statement?
function passwordOptions() {
 var length = prompt("How many characters would you like to use?");
 if (length == "") {
     alert("Provide a number");
     return;
 }
 if (length < 8 || length > 128) {
    alert("Print a number thats between 8 and 128");
        return; 
 }
 var confirmNumber = confirm("Press okay if you want a number!");
 var confirmCharacter = confirm("Press okay if you want special character!");
 var confirmUppercase = confirm("Press okay if you want uppercase!");
 var confirmLowercase = confirm("Press okay if you want lowercase!");
if (confirmNumber === false && confirmCharacter === false && confirmUppercase === false && confirmLowercase === false) {
        alert("Please choose an input!");
}
  var userInput = {
  length: length,
  confirmNumber: confirmNumber,
  confirmCharacter: confirmCharacter,
  confirmUppercase: confirmUppercase,
  confirmLowercase: confirmLowercase,
  }
  return userInput;
}

function randomNumber(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomElement = arr[randomIndex]
     return randomElement;
} 

randomNumber(upperCase);




// you declare a variable as n empty array, and you .push() the random elements from the arrays into this empty array. then you use array.join(","), your array is going to be one string instead of a bunch of elements in an array. and that's your solution.




passwordOptions()
// Begin function to generate a password/prompt messages
function generatePassword() {
    var pass = ''; 
    var strng = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
            'abcdefghijklmnopqrstuvwxyz0123456789@#$' + '0, 1, 2, 3, 4, 5, 6, 7, 8, 9'; 
    //   created a for loop to ensure when button is clicked, it generates a new password.
    for (i = 1; i <= 8; i++) { 
        var char = Math.floor(Math.random() 
                    * strng.length + 1); 
          
        pass += strng.charAt(char) 
    } 
      
    return pass + ""; 
};


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

 
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);