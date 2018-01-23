//Declaring Global variables and resources

var alphabetArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];  

var wins = -1;
var losses = -1;
var remainderIndex;
var lettersGuessed=[];
var stringGuesses="";
var userInput;
var computerLetter;

//Functions to be used in the game

//Adds to the win counter and posts it 
function updateWins() {
	wins = (wins+1);
	document.querySelector("#wins").innerHTML = wins;
}
//Adds to the loss counter and posts it
function updateLosses() {
	losses= (losses+1);
	document.querySelector("#losses").innerHTML = losses;
}
//Decreases the guesses remaining
function updateRemainder() {
	remainderIndex = (remainderIndex-1);
	document.querySelector("#guesses-left").innerHTML = remainderIndex;
}
// generates a random letter
function generateLetter() {
	computerLetter = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
	console.log(computerLetter);
}	
//resets the letters guessed reference array
function resetGuesses() {
	lettersGuessed=[];
}
//lists the letters already guessed
function listGuesses() {
	stringGuesses = stringGuesses + ", " + userInput 
	document.querySelector("#guessedAlready").innerHTML = stringGuesses;
}
//resets the guesses left
function resetIndex() {
	remainderIndex=10;
}
//resets the string of guessed letters
function resetString() {
	stringGuesses="";
}

//Initialize gameplay

updateLosses();

updateWins();

resetIndex();

updateRemainder ();

generateLetter ();

//User input and game play

document.onkeyup = function(event) {
	if (remainderIndex >0) {
		userInput = event.key;
		userInput = userInput.toLowerCase();
		if (lettersGuessed.indexOf(userInput)== -1)  {
			lettersGuessed.push(userInput);
			listGuesses();
			updateRemainder();
				if(userInput === computerLetter) {
					updateWins();
					resetIndex();
					generateLetter();
					resetGuesses();
					resetString();
				}
		}

	}	else {
			updateLosses();
			resetIndex();
			generateLetter();
			resetGuesses();
			resetString();

		}
}