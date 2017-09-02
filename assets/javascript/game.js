//Letter choices available
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Default variables for each new and reset game instance
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;



//Selects a letter at random
var alphabet = alphabet[Math.floor(Math.random() * alphabet.length)];

//Sets User available guesses
var updateGuessesLeft = function() {
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
};

// Displays User Guesses for Game Instance
var updateGuessesSoFar = function() {
  document.querySelector('#remainingGuess').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

// Reset after running an instance
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


//Function to register user guess
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

//Wins and Loss Conditions
        // Win Condition, Adds 1 to Wins Tracker
        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("A Winner is You.");
                reset();
            }
        // Loss Condition, Adds 1 to Loss Tracker
        } else if(guessesLeft == 0){
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("What is a man? A miserable little pile of WRONG GUESSES.");
            reset();
        }
};