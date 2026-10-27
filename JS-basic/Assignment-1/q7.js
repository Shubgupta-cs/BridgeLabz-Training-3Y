
const secretNum = Math.floor(Math.random() * 50) + 1;
const userGuess = 24; // Test value

console.log(`Secret Number (for testing): ${secretNum}`);
console.log(`User Guess: ${userGuess}`);

if (userGuess === secretNum) {
  console.log("Correct guess!");
} else {
  const difference = userGuess - secretNum;
  if (difference >= -3 && difference <= 3) {
    console.log("Very close!");
  } else if (userGuess > secretNum) {
    console.log("Too high");
  } else {
    console.log("Too low");
  }
}