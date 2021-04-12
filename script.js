// Assignment Code
var generateBtn = document.querySelector("#generate");

//varibales to make mj082021
var pwCaps = ["A", "B", "C", "D", "E", "F", "G","H" ,"I" ,"J", "K", "L","M", "N", "O","P","Q","R", "S" ,"T" ,"U" ,"V","W","X","Y","Z"];
var pwLwer =[ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var pwNumbers="0123456789";
var pwSPC="!#$%&()*+,-./:;<=>?@[]^_{|}~";
var pwLEN = 0;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var options = getOptions()
  console.log(options)
}
// Add event listener to generate button
function getOptions() {
 var length = parseInt(prompt("how many charcaters would we like the password to be ? "));

 if (isNaN(length)) {
 alert("password lenght must be a number")  
  return

 }

 if (length < 8 || length > 128) {
   alert("password length must be greater than 8 and 128 characters")
   return
 }
var hasSpecialCase = confirm("click okay to use special characters")
var hasnmbersCase = confirm("click okay to use numbers")
var hasUpperCase = confirm('click okay to use uppercase letters')
var hasLowerCase = confirm("click okay to use lowercase letter")

if (
hasSpecialCase === false &&
hasnmbersCase === false &&
hasUpperCase === false &&
hasLowerCase === false  
) {
 alert("you must pick at least one character") 
}

var passwordOptions = {
  length: length , 
  hasSpecialCase: hasSpecialCase,
  hasnmbersCase: hasnmbersCase,
  hasUpperCase: hasUpperCase,
  hasLowerCase: hasUpperCase,



}
return passwordOptions
}



//  if(useChars) {
//         randomStringToSearch = randomChars;
//       }
//       if(useNums) {
//         randomStringToSearch += randomNums;
//       }
//       if(useCaps) {
//         randomStringToSearch += randomCaps;
//       }
//       if(useLower) {
//         randomStringToSearch += randomLower;
//       }




// submit.addEventListener("click",function(e){
//     var characters = char;
//     (numBox.checked) ? characters += num : '';
//     (symBox.checked) ? characters += sym : '';
//     yourPw.value = password(charNum.value, characters);
// });

function password(l,characters){
		var pwd = '';
    for(var i = 0; i<l; i++){
    		pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}
generateBtn.addEventListener("click", writePassword);