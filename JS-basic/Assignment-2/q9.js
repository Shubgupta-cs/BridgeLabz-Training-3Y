"use strict";

const results = [];

console.log("=== Q9: Odd-Even Number Analyzer ===");

for (let i = 1; i <= 30; i++) {
    let status = "";
    if (i % 3 === 0 && i % 5 === 0) {
        status = "FizzBuzz";
    } else if (i % 2 === 0) {
        status = "Even";
    } else {
        status = "Odd";
    }
    results.push({ number: i, classification: status });
}

console.log(results);