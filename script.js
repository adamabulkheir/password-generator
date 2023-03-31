// Assignment Code
var generateBtn = document.querySelector("#generate");
// TO DO create global array
var lowerCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers=["1","2","3","4","5","6","7","8","9"]
var specialChar=["!","@","#","$","%","&","*","?"]


function userInfo() {
// TO DO look up convert string to number JS //
  var length = prompt("What length will your password be?")
  if (length < 8 || length > 128) {
    alert("must be between 8 and 128 characters")
    return null;
  }
  var isLowercase= confirm("Include lowercase characters?")
  console.log(isLowercase)
  var isUppercase= confirm("Include uppercase characters?")
  var hasnumbers= confirm("Include numerical characters?")
  var hasSpecialchar= confirm("Include special characters?")
  if (isLowercase===false&&hasnumbers===false&&hasSpecialchar===false&&isUppercase===false) {
    alert("must include 1 of 4 types")
    return null;
  }
  var options={
    length:length,
    isLowercase:isLowercase,
    isUppercase:isUppercase,
    hasnumbers:hasnumbers,
    hasSpecialchar:hasSpecialchar
  }
  return options;
}

function generatePassword() {
var choices= userInfo()
for (var i=0; i=userInfo; i++);
Math.floor(math.random()* length);

return password;




// console.log("Password Generating...");


// return "Generated password here"
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", userInfo);