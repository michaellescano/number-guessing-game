const readlineSync = require('readline-sync');

function getMaxFromUser() {
  var number = Number(readlineSync.question('Please enter a number: '));
  return number;
}

function generateRandomNumber(max) {
  // generate a random integer between 1 and max
  return Math.floor(Math.random() * (max - 1) + 1);
}

function getGuessFromUser(max) {
  // takes care of prompting the user for a guess and converting it to a number
  var guessNumber = Number(
    readlineSync.question('Guess the number between 1 and ' + max + ': ')
  );
  return guessNumber;
}

function startGame() {
  // code that houses the while loop for our game. call this function once to begin
  console.log("Great. Let's Play!");
  const name = readlineSync.question('What is your name? ');
  console.log('Welcome ' + name);
  var number = getMaxFromUser();
  var randomNum = generateRandomNumber(number);
  var turns = 0;
  var isPlaying = true;
  while (turns < 10 && isPlaying) {
    var guess = getGuessFromUser(number);
    if (randomNum > guess) {
      turns++;
      console.log('Too Low!');
      console.log('Turn(s) Remaining: ' + (10 - turns));
    } else if (randomNum < guess) {
      turns++;
      console.log('Too High!');
      console.log('Turn(s) Remaining: ' + (10 - turns));
    } else if (randomNum === guess) {
      turns++;
      isPlaying = false;
      console.log('Winner!!');
      console.log('Attempt(s): ' + turns);
    }
  }
  if (turns === 10) {
    isPlaying = true;
    console.log('Too many tries!  Game Over!');
  }
}
startGame();
