//define variables - lowercase, uppercase, special characters and numbers

var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special = '!@#$^&%*()+=-[]{}|:<>?,.';
var numbers = '1234567890';

//generate random password

/*function to generate a random password
*/

/*prompt user to input desired character length - between 8 and 128
*/
window.alert("What length would you like the password to be? (Between 8 to 128 characters)");

/*inform the user that a series of prompts are coming
*/
window.alert("Please answer the next 4 questions to personalize your password");


/*character type prompts: lowercase, uppercase, special characters, numbers
*/
window.confirm("Question 1/4: Would you like your password to include lower case letters?");
window.confirm("Question 2/4: Would you like your password to include upper case letters?");
window.confirm("Question 3/4: Would you like your password to include special characters?");
window.confirm("Question 4/4: Would you like your password to include numbers?");

/*remind user to select at least one character type from the prompts
*/
window.alert("Please select at least one character type from the prompts)");

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
