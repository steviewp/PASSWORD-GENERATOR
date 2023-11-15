// Assignment code here
function generatePassword() {

  // present a series of prompts

  // ask for the desired length of password
  var passLength = prompt("What is the length of the password?")

  // check their answer if its within 8 - 128
  if (passLength < 8) {
    alert("You cannot have less than 8 characters!")
    return ""
  }

  if (passLength > 128) {
    alert("You cannot have greater than 128 characters!")
    return ""
  }


  // what character types to include
  // include lowercase
  var includeLowercase = confirm("Do you want to include lower case?")
  // include uppercase
  var includeUppercase = confirm("Do you want to include upper case?")

  // // include numbers
  var includeNumbers = confirm("Do you want to include numbers?")
  // var numbers =[Math.floor(math.random)() * number.length];
  // // include special characters
  var includeSpecial = confirm("Do you want to include special characters?");

  // check their answer to make sure atleast 1 character type is included
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
    alert("Must have atleast 1 character type is required!");
    return ""
  }


  // generate password!!

  // define character sets
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // //  var numbers
  var numbers = "0123456789";
  // // var special
  var special = "!@#$%^&*()_+{}:\"<>?\|[];\',./`~';"

  var basket = "";

  if (includeLowercase) {
    basket += lowercase;
  }

  if (includeUppercase) {
    basket += uppercase;
  }

  if(includeNumbers) {
    basket += numbers;
  }

  if(includeSpecial) {
    basket += special;
  }

  console.log(basket)
  var password = ""

  for(i = 0; i < passLength; i++) {
    var randomChar = basket[Math.floor(Math.random() * basket.length)]
    password += randomChar
  }

  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
