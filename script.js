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

//onclick call this function
function generate() {

//declaring variable but not populating yet
	var charLength = ""
	
//verify that password length is between 8 and 128 before allowing the user to continue		
		while ((charLength < 8 || charLength > 128)) {
   var charLength = prompt("Please enter a length in between 8 and 128 for your password");
}  

/*inform the user that a series of prompts are coming
*/
window.alert("Please answer the next 4 questions to personalize your password");


/*character type prompts: lowercase, uppercase, special characters, numbers
*/
if (charLength) {
        if (confirm("Question 1/4: Would you like to use lowercase characters? Click Okay for Yes or Cancel for No.") == true) {
            lowerSelection = true
        } 

        if (confirm("Question 2/4: Would you like to use uppercase characters? Click Okay for Yes or Cancel for No.") == true) {
            upperSelection = true
        }

        if (confirm("Question 3/4: Would you like to use special characters? Click Okay for Yes or Cancel for No.") == true) {
            specialSelection = true
        }

        if (confirm("Question 4/4: Would you like to use numerical characters? Click Okay for Yes or Cancel for No.") == true) {
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

var characters = '';
    characters += (lowerSelection ? lower : '');
    characters += (upperSelection ? upper : '');
    characters += (specialSelection ? special : '');
    characters += (numberSelection ? numbers : '');

    pwd = password(charLength, characters);

    document.getElementById("password").innerHTML = pwd;

function password(l, characters) {
    var pwd = '';
    for (var i = 0; i < l; ++i) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}

}