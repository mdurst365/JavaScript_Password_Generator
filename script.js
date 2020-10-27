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
if (charLength) {
        if (confirm("Question 1/4: Would you like to use lowercase characters?") == true) {
            lowerSelection = true
        } 

        if (confirm("Question 2/4: Would you like to use uppercase characters?") == true) {
            upperSelection = true
        }

        if (confirm("Question 3/4: Would you like to use special characters?") == true) {
            specialSelection = true
        }

        if (confirm("Question 4/4: Would you like to use numerical characters?") == true) {
            numberSelection = true
        }

/*remind user to select at least one character type from the prompts
*/
  if (lowerSelection === false && upperSelection === false && specialSelection === false && numberSelection === false) {
            alert("At least one character type must be selected")
        }
    }

/*function to generate a random password
*/

