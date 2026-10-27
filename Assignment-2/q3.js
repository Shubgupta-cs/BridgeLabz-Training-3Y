"use strict";

const x = 16.75;

const roundedVal = Math.round(x);
const sqrtVal = Math.sqrt(x);
const powerVal = Math.pow(x, 3);
const randomVal = Math.floor(Math.random() * 41) + 10;

console.log("=== Q3: Math Utility Dashboard ===");
console.log(`Original Number: ${x}`);
console.log(`-> Rounded Value: ${roundedVal}`);
console.log(`-> Square Root: ${sqrtVal.toFixed(2)}`);
console.log(`-> Cubed Power ($x^3$): ${powerVal.toFixed(2)}`);
console.log(`-> Random Number (10-50): ${randomVal}`);