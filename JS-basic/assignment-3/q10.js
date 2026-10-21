"use strict";

console.log("=== ORIGINAL CODE EXECUTION ===");

function originalOuter() {
  console.log("outer() start - count:", count);
  var count = 5;
  function inner() {
    console.log("inner() start - count:", count);
    var count = 10;
  }
  inner();
}

originalOuter();

console.log("\n=== TASK 1: PREDICT AND EXPLAIN OUTPUT ===");
console.log("Predicted Output:");
console.log("  Line 1 (outer): undefined");
console.log("  Line 2 (inner): undefined");
console.log("Explanation:");
console.log("  1. In outer(): 'var count' is hoisted to the top of outer's scope and initialized to undefined.");
console.log("  2. In inner(): 'var count' is hoisted to the top of inner's scope and initialized to undefined, shadowing the outer 'count'.");
console.log("  3. Both console.log calls execute before the variable assignments, printing undefined.");

console.log("\n=== TASK 2: HOW HOISTING CREATES SEPARATE MEMORY CONTEXTS ===");
console.log("Memory Context 1 (Global Context): Holds reference to outer().");
console.log("Memory Context 2 (outer Execution Context): Holds outer's count = 5 and inner function reference.");
console.log("Memory Context 3 (inner Execution Context): Created upon calling inner(). Holds local count = 10 in its own lexical environment.");

console.log("\n=== TASK 3: CONVERT INNER FUNCTION TO ARROW FUNCTION ===");

function outerWithArrowLexical() {
  var count = 5;
  const innerArrow = () => {
    console.log("innerArrow lexical access to outer count:", count);
  };
  innerArrow();
}

outerWithArrowLexical();

console.log("Behavior change with Arrow Function:");
console.log("  When the arrow function does not re-declare 'count', it does not create its own shadowed variable.");
console.log("  Instead, it lexically binds to outer's 'count' and correctly accesses the value 5.");

console.log("\n=== TASK 4: DEBUG SESSION AND CALL STACK FLOW ===");

function debugOuter() {
  debugger;
  var count = 5;

  function debugInner() {
    debugger;
    var count = 10;
    return count;
  }

  debugInner();
}

debugOuter();

console.log("Call Stack Flow Explanation:");
console.log("  Step 1: Global context executes debugOuter() -> Call Stack: [Global, debugOuter]");
console.log("  Step 2: Inside debugOuter, local variable 'count' is initialized to 5.");
console.log("  Step 3: debugOuter calls debugInner() -> Call Stack: [Global, debugOuter, debugInner]");
console.log("  Step 4: debugInner finishes and pops off the stack -> Call Stack: [Global, debugOuter]");
console.log("  Step 5: debugOuter finishes and pops off the stack -> Call Stack: [Global]");

