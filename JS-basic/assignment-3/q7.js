"use strict";

class DivisionByZeroError extends Error {
  constructor(message) {
    super(message);
    this.name = "DivisionByZeroError";
  }
}

class NegativeRootError extends Error {
  constructor(message) {
    super(message);
    this.name = "NegativeRootError";
  }
}

class InvalidOperationError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidOperationError";
  }
}

function calculate(operation, a, b) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      if (b === 0) {
        throw new DivisionByZeroError("Division by zero is undefined.");
      }
      return a / b;
    case "power":
      return Math.pow(a, b);
    case "root":
      if (a < 0) {
        throw new NegativeRootError(`Cannot calculate square root of a negative number (${a}).`);
      }
      return b === 0 ? Math.sqrt(a) : Math.pow(a, 1 / b);
    default:
      throw new InvalidOperationError(`Operation '${operation}' is not recognized.`);
  }
}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

const testCases = [
  ...operations.map(op => ({ op, a: num1, b: num2 })),
  { op: "root", a: -16, b: 2 },
  { op: "modulus", a: 25, b: 4 }
];

const results = [];

for (let i = 0; i < testCases.length; i++) {
  const { op, a, b } = testCases[i];
  try {
    const outcome = calculate(op, a, b);
    results.push({
      operation: op,
      operands: `${a}, ${b}`,
      status: "SUCCESS",
      result: outcome,
      error: "None"
    });
  } catch (error) {
    results.push({
      operation: op,
      operands: `${a}, ${b}`,
      status: "FAILED",
      result: "N/A",
      error: `${error.name}: ${error.message}`
    });
  }
}

console.log("=== SMART CALCULATOR EXECUTION SUMMARY ===");
for (let i = 0; i < results.length; i++) {
  const r = results[i];
  console.log(`[${r.status}] Op: ${r.operation.padEnd(9)} | Inputs: (${r.operands}) | Result: ${r.result} | Error: ${r.error}`);
}

