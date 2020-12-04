// Assignment Code
var generateBtn = document.querySelector("#generate");

//Add Event Listener to Generate Password Button
generateBtn.addEventListener("click",wantLowercase);

//Stores user assigned password criteria
var passWordCriteria = {
  choice1: undefined,
  choice2: undefined,
  choice3: undefined,
  choice4: undefined,
  howLong: undefined,
};

//Asks if user wants lowercase letters in password. Saves result to choice1
function wantLowercase() {
  var lowercaseLetter = prompt("Please answer yes if you want your password to include lowercase letters. Answer no if not.");
  if (lowercaseLetter.toLowerCase() == "yes") {
    passWordCriteria.choice1 = true;
    wantUppercase();
  }
  if (lowercaseLetter.toLowerCase() == "no") {
    passWordCriteria.choice1 = false;
    wantUppercase();
  }
  if (lowercaseLetter.toLowerCase() != "yes" && lowercaseLetter.toLowerCase() != "no"){
    alert("Please type yes or no.");
  }
}

//Asks if user wants uppercase letters in password. Saves result to choice2
function wantUppercase() {
  var uppercaseLetter = prompt("Please answer yes if you want your password to include uppercase letters. Answer no if not.");
  if (uppercaseLetter.toLowerCase() == "yes") {
    passWordCriteria.choice2 = true;
    wantNum();
}
  if (uppercaseLetter.toLowerCase() == "no") {
    passWordCriteria.choice2 = false;
    wantNum();
  }
  if (uppercaseLetter.toLowerCase() != "yes" && uppercaseLetter.toLowerCase() != "no"){
    alert("Please type yes or no.");
  }
}

//Asks if user wants numbers in password. Saves result to choice3
function wantNum() {
  var number = prompt("Please answer yes if you want your password to include numbers. Answer no if not.");
if (number.toLowerCase() == "yes") {
  passWordCriteria.choice3 = true;
  charPicker();
}
if (number.toLowerCase() == "no") {
  passWordCriteria.choice3 = false;
  charPicker();
}
if (number.toLowerCase() != "yes" && number.toLowerCase() != "no"){
  alert("Please type yes or no.");
}
}

//Asks if user wants special characters in password. Saves result to choice4
function charPicker() {
  var test = prompt("Please answer yes if you want your password to include special characters. Answer no if not.");
if (test.toLowerCase() == "yes") {
  passWordCriteria.choice4 = true;
  askLength();
}
if (test.toLowerCase() == "no") {
  passWordCriteria.choice4 = false;
  askLength();
}
if (test.toLowerCase() != "yes" && test.toLowerCase() != "no"){
  alert("Please type yes or no.");
}
}

//Prompts user to input desired password length
function askLength() {
  //Rejects no criteria
  if (passWordCriteria.choice1 == false && passWordCriteria.choice2 == false && passWordCriteria.choice3 == false && passWordCriteria.choice4 == false) {
    alert ("You must say yes at least once.");
    wantLowercase();
  }
  //sets password length to number between 8 & 128
  var passLength = prompt("How long should your password be? (8-128 characters).");
  if (passLength>=8 && passLength<=128) {
    passWordCriteria.howLong = passLength;
    createPassword();
  }
  else {
    alert("Enter a number between 8 and 128")
  }
}

//Randomly generates password characters
function createPassword() {
  //password starts as empty string
  var passcode="";
  //run this code while password length is less than desired
  do {
  //get random lowercase
  var littleLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var pickLowercase = Math.floor(Math.random()*26);
  var randomLittle = littleLetters[pickLowercase];
  //get random uppercase
  var bigLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var pickUppercase = Math.floor(Math.random()*26);
  var randomBig = bigLetters[pickUppercase];
  //get random number
  var zeroToNine = ["0","1","2","3","4","5","6","7","8","9"];
  var pickNum = Math.floor(Math.random()*10);
  var randomNum = zeroToNine[pickNum];
  //get random character
  var specChar = ["!","?","#","$","%","&","+","@","*","^"];
  var pickspecChar = Math.floor(Math.random()*10);
  var randomChar = specChar[pickspecChar];
  //ensures password is completely randomized. Prevents patterns.
  var picktype = Math.floor(Math.random()*4);
  //only runs if both conditions are true
  if (passWordCriteria.choice1 == true && picktype==0) {
    passcode = passcode.concat(randomLittle);
  }
  if (passWordCriteria.choice2 == true && picktype==1) {
    passcode = passcode.concat(randomBig);
  }
  if (passWordCriteria.choice3 == true && picktype==2) {
    passcode = passcode.concat(randomNum);
  }
  if (passWordCriteria.choice4 == true && picktype==3) {
    passcode = passcode.concat(randomChar);
  }
}
while(passcode.length<passWordCriteria.howLong);
//display password on screen.
document.getElementById("password").innerHTML = passcode;
}

