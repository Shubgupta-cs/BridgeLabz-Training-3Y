"use strict";

function generatePyramid(limit = 5) {
  console.log(`Generating Pyramid with limit = ${limit}:`);
  for (let i = 1; i <= limit; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += (j === 1 ? "*" : " *");
    }
    console.log(row);
  }
}

console.log("=== TASK: BASE PATTERN (LIMIT = 4) ===");
generatePyramid(4);

console.log("\n=== TASK 3: USER INPUT CONTROLLED LIMIT (DEFAULT = 5) ===");
const userInputLimit = process.argv[2] ? Number(process.argv[2]) : undefined;
generatePyramid(userInputLimit || 5);

console.log("\n=== TASK 1 & 2: REPLACE LET WITH VAR & VARIABLE RE-USE ISSUE ===");

function demonstrateVarIssue() {
  console.log("Demonstrating variable re-use when using same 'var i' in nested loops:");
  let iterations = 0;
  for (var i = 1; i <= 3; i++) {
    for (var i = 1; i <= 2; i++) {
      iterations++;
      debugger;
      console.log(`  Inner loop: i = ${i}`);
    }
    console.log(`  Outer loop after inner loop executed: i = ${i}`);
  }
  console.log(`Total iterations before loop terminated: ${iterations} (Expected 6 with block-scoped let, but terminated early because inner loop overwrote outer loop 'i')`);
}

demonstrateVarIssue();

console.log("\nDemonstrating proper loop behavior with 'let' (block-scoped):");
for (let i = 1; i <= 3; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += (j === 1 ? "*" : " *");
  }
  console.log(`  Row ${i}: ${line}`);
}

console.log("\n=== TASK 4: USE STRICT CATCHING UNDECLARED LOOP VARIABLE ===");
try {
  eval('"use strict"; for (undeclaredVar = 0; undeclaredVar < 2; undeclaredVar++) {}');
} catch (error) {
  console.log(`Strict mode error caught: ${error.name} - ${error.message}`);
}

