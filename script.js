// JavaScript Document

//define variables - lowercase, uppercase, special characters and numbers

var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special = '!@#$^&%*()+=-[]{}|:<>?,.';
var numbers = '1234567890';

var pwd = '';

var lowerSelection = false;
var upperSelection = false;
var specialSelection = false;
var numberSelection = false;

/*prompt user to input desired character length - between 8 and 128
*/
var charLength = prompt("What length would you like the password to be? (Between 8 to 128 characters)");

//Run program if a character range is choosen between 8 and 128;		
		if ((charLength >= 8) && (charLength <= 128)) {
   window.alert("Great! That is a valid length");
}  else {
  window.alert("Sorry that won't work - Please refresh this page and enter a valid length");
}

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

/*function to generate a random password
*/

