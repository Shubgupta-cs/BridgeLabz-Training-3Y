console.log("=== TASK 1 & 2: RUNNING WITH AND WITHOUT STRICT MODE ===");

function runNonStrict() {
  function demo(a, a) {
    total = 10;
    const deleted = delete total;
    return { lastArgValue: a, deleteSuccess: deleted };
  }
  const result = demo(5, 10);
  console.log("Non-strict execution outcome:");
  console.log(`  Function executed without throwing any errors.`);
  console.log(`  Second parameter shadowed first: a = ${result.lastArgValue}`);
  console.log(`  Undeclared 'total' was implicitly created on global object and deleted: ${result.deleteSuccess}`);
}

runNonStrict();

console.log("\nStrict mode execution tests:");

try {
  new Function('"use strict"; function demo(a, a) {}');
} catch (err) {
  console.log(`1. Duplicate parameter check:`);
  console.log(`   Caught: ${err.name} - ${err.message}`);
}

try {
  new Function('"use strict"; total = 10;')();
} catch (err) {
  console.log(`2. Undeclared variable assignment check:`);
  console.log(`   Caught: ${err.name} - ${err.message}`);
}

try {
  new Function('"use strict"; var x = 10; delete x;')();
} catch (err) {
  console.log(`3. Deleting unqualified identifier check:`);
  console.log(`   Caught: ${err.name} - ${err.message}`);
}

console.log("\n=== TASK 3: WHY STRICT MODE MAKES THESE OPERATIONS ILLEGAL ===");
console.log("1. Duplicate parameter names ('a', 'a'): Silently hides the first argument, leading to subtle logic bugs.");
console.log("2. Implicit global variables ('total = 10'): Pollutes global scope and masks spelling errors in variable names.");
console.log("3. Deleting plain variables ('delete total'): Plain identifiers and variables are non-configurable; delete is meant only for object properties.");

console.log("\n=== TASK 4: CORRECT VERSION USING MODERN ES6 RULES ===");

function demoCorrect(firstParam, secondParam) {
  "use strict";
  const total = firstParam + secondParam;
  return {
    firstParam,
    secondParam,
    total
  };
}

const cleanResult = demoCorrect(5, 10);
console.log("Clean ES6 Function Result:");
console.log(`  First Parameter: ${cleanResult.firstParam}`);
console.log(`  Second Parameter: ${cleanResult.secondParam}`);
console.log(`  Total: ${cleanResult.total}`);

