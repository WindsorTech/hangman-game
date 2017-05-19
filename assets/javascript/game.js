// Global Variables

var cities = ["beijing", "london", "moscow", "orlando", "paris", "rome", "sydney", "tokyo"];

var cityInPlay = null;

var letterGuessed = null;

var cityLetters = [];

var matchedLetters = [];

var guessedLetters = [];

var guessesLeft = 10;

var totalGuesses = 0;

var wins = 0;

var losses = 0;


// Register keyboard input from user

document.onkeyup = function(event) {
	letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(letterGuessed);

	updateGuesses();

	updateMatchedLetters();

	//guessedLetters.push(letterGuessed);
	//console.log(guessedLetters);

	//updatePage(hangmanGame.letterGuessed);
}

// Set Up game- randomly choose city and split the word letters

function setupGame() {

	cityInPlay = cities[Math.floor(Math.random() * cities.length)];

	console.log(cityInPlay);

	cityLetters = cityInPlay.split('');

	console.log(cityLetters);

	displayCity();

	document.querySelector('#guesses').innerHTML = guessesLeft;

}

// Display random city on page

function displayCity () {

	var wordView = "";

	for (var i=0; i < cityLetters.length; i++){
			if (matchedLetters.indexOf(cityLetters[i]) != -1){
				wordView += cityLetters[i];				
			}else{
				wordView += '&nbsp;_&nbsp;';
			}
	}

	document.querySelector('#city').innerHTML = wordView
}

// Update Wrong Guesses

function updateGuesses () {

	if ((guessedLetters.indexOf(letterGuessed) == -1) && (cityLetters.indexOf(letterGuessed) == -1)){

		guessesLeft--;

		guessedLetters.push(letterGuessed);

		document.querySelector('#guesses').innerHTML = guessesLeft;

		document.querySelector("#letters-guessed").innerHTML = guessedLetters.join(' - ').toUpperCase();
	}
}

// Update correct guesses

function updateMatchedLetters (letter) {

	for (var i = 0; i < cityLetters.length; i++) {

			if ((letter === cityLetters[i]) && (matchedLetters.indexOf(letter) == -1)){
				matchedLetters.push(letter);

				document.querySelector('#city').innerHTML = letter;
		};

	};

		console.log(matchedLetters);
}

// Start game

setupGame();