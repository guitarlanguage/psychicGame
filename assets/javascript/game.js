<script type="text/javascript">
  // Creates an array that lists out all of the options that the  computer could use.
  var computerChoices = ["a", "b", "c", "d", "e","f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // Creating global variables to hold the number of wins, losses. They start at 0. also a downward counter for guesses left
      var wins = 0;
      var losses = 0;
      var guessesLeft = 9;
      var guesses = 9;
      var guessedLetters = [];
      var lettersToGuess = null;


  // Randomly chooses a choice from the computerChoice array. This is the Computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  // --------------------need to allow user 9 guesses------------------------------------
//   function guess {
//     for(var i = 0; i < 9; i++){
//     console.log([i]);
//   }
// }
// guess();
  var updateChancesLeft = function(){
    document.querySelector("#guessesLeft").innerText = "Guesses Left: " + guessesLeft;
  };


    var updateLettersToGuess = function() {
        this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
    };

  var updateGuessesSoFar = function() {
    //display the letters that the user has tried
    document.querySelector("#sofar").innerText = "Your Guesses so far: " + guessedLetters.join(', ');
  };



  var reset = function(){

    // wins = 0;
    // losses = 0;
    guessesLeft = 9;
    totalGuesses = 9;
    guessedLetters = [];
  }
  //----------------------onkeyup section----------------------------------
  // This function is run whenever the user presses a key.
  document.onkeyup = function(event) {

    guessesLeft--;
    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    var usersGuessHolder = function() {

    for(var i = 0; i < 9; i++) {
    guessedLetters.push(userGuess);
    console.log(userGuess);
    }
  }
    // Determines which key was pressed.


    //   var multiGuess = function l() {
    //    for(var i = 0; i < 9; i++) {
    //    userGuessArray.push(userGuess);
    //   }]
    // }
    //    return userGuess;



    // Reworked our code from last step to use "else if" instead of lots of if statements.


    if(userGuess === computerGuess) {
        wins++;
        // guessesLeft--;
      } else if (userGuess !== computerGuess) {
        losses++;

      }


    if(guessesLeft === 0) {
      document.write("Game Over");

    }




      // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
      var html =
        "<h1>Genie Psychic game" + "</h1>" +
        "<p>You chose: " + userGuess + "</p>" +
        "<p>The computer chose: " + computerGuess + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Your guesses so far: " + userGuess + "</p>";



      // Set the inner HTML contents of the #game div to our html string
      document.querySelector("#game").innerHTML = html;

  };
