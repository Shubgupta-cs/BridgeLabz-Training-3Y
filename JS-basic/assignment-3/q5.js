"use strict";

console.log("=== ORIGINAL CODE EXECUTION ===");

console.log("Initial console.log(score):");
console.log(score);

announce();

var score = 50;

function announce() {
  console.log("Game started");
}

let status = "ready";

startGame();

function startGame() {
  console.log(status);
}

console.log("\n=== TASK 1: MEMORY STATE EXPLANATIONS ===");
console.log("1. 'var score': Hoisted during creation phase and initialized to undefined in memory. Accessing before line of assignment returns undefined.");
console.log("2. 'function announce': Function declaration is hoisted with both its name and implementation. Can be safely invoked before declaration.");
console.log("3. 'let status': Hoisted but uninitialized, placed in Temporal Dead Zone (TDZ). Cannot be accessed before its declaration line.");
console.log("4. 'function startGame': Fully hoisted with implementation. Accessed status after status was initialized.");

console.log("\n=== TASK 2: FIXED CODE IN PROPER SEQUENTIAL ORDER ===");

const fixedScore = 50;
const fixedStatus = "ready";

function fixedAnnounce() {
  console.log("Game started (Fixed)");
}

function fixedStartGame() {
  console.log(`Status: ${fixedStatus}`);
}

console.log(`Score: ${fixedScore}`);
fixedAnnounce();
fixedStartGame();

console.log("\n=== TASK 3: REWRITE USING ARROW FUNCTIONS (HOISTING COMPARISON) ===");

try {
  arrowAnnounce();
} catch (error) {
  console.log(`Calling arrow function before declaration throws: ${error.name} - ${error.message}`);
}

const arrowAnnounce = () => {
  console.log("Game started (Arrow Function)");
};

const arrowStartGame = () => {
  console.log(`Status: ${fixedStatus} (Arrow Function)`);
};

console.log("Calling arrow functions after assignment:");
arrowAnnounce();
arrowStartGame();
console.log("Comparison: Function declarations are hoisted with definition. Arrow functions assigned to let/const remain in TDZ and cannot be invoked before initialization.");
