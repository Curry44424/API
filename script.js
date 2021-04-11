// Assignment Code
var generateBtn = document.querySelector("#generate");

//varibales to make mj082021
var pwCaps="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var pwLwer="abcdefghijklmnopqrstuvwxyz";
var pwNumbers="0123456789";
var pwSPC="!#$%&()*+,-./:;<=>?@[]^_{|}~";
var pwLEN = 0;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var randomChars = "!#$%&()*+-/:;<=>?@[]~_`^";
var randomNums = "0123456789";
var randomCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var randomLower = "abcdefghijklmnopqrstuvwxyz";
 if(useChars) {
        randomStringToSearch = randomChars;
      }
      if(useNums) {
        randomStringToSearch += randomNums;
      }
      if(useCaps) {
        randomStringToSearch += randomCaps;
      }
      if(useLower) {
        randomStringToSearch += randomLower;
      }




submit.addEventListener("click",function(e){
    var characters = char;
    (numBox.checked) ? characters += num : '';
    (symBox.checked) ? characters += sym : '';
    yourPw.value = password(charNum.value, characters);
});

function password(l,characters){
		var pwd = '';
    for(var i = 0; i<l; i++){
    		pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}