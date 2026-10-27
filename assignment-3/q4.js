"use strict";

try {
  function faultyShowMessage() {
    greeting = "Welcome";
    console.log(greeting);
  }
  faultyShowMessage();
} catch (error) {
  console.log("=== TASK 1: IDENTIFY WHY STRICT MODE THROWS AN ERROR ===");
  console.log(`Error Name: ${error.name}`);
  console.log(`Error Message: ${error.message}`);
  console.log("Reason: In strict mode ('use strict'), assigning a value to an undeclared variable is prohibited to prevent accidental creation of implicit global variables.");
}

console.log("\n=== TASK 2 & 3: FIXED VERSION AND DEBUG WATCH POINT ===");

function showMessage() {
  let greeting = "Welcome";
  debugger;
  console.log(`Fixed Output: ${greeting}`);
  return greeting;
}

const result = showMessage();

console.log("\n=== EXPLANATION: SCOPE DECLARATION RULES ===");
console.log("1. Using 'let' or 'const' confines the variable to the local block/function scope of showMessage.");
console.log("2. The variable 'greeting' is no longer attached to the global scope or global object.");
console.log("3. The 'debugger' statement pauses execution so developers can inspect the call stack (showMessage -> global) and watch variable 'greeting' holding value: " + result);

