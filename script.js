<<<<<<< HEAD
/*define variables - lowercase, uppercase, special characters and numbers
*/

var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special = '!@#$^&%*()+=-[]{}|:<>?,.';
var numbers = '1234567890';

console.log(lower, upper, special, numbers);

/*function to generate a random password
*/

/*prompt user to input desired character length - between 8 and 128
*/

/*character type prompts: lowercase, uppercase, special characters, numbers
*/

/*remind user to select at least one character type from the prompts
*/

/*generate random password
*/

/*function to copy the new password to the clipboard
*/


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
=======
/*define variables - lowercase, uppercase, special characters and numbers
*/

/*function to generate a random password
*/

/*prompt user to input desired character length - between 8 and 128
*/

/*character type prompts: lowercase, uppercase, special characters, numbers
*/

/*remind user to select at least one character type from the prompts
*/

/*generate random password
*/

/*function to copy the new password to the clipboard
*/


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
>>>>>>> 3e1334fa3a6a3ee638b600be1288e9862e7bef7e
