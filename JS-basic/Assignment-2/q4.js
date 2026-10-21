"use strict";

const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

const highest = Math.max(...scores);
const lowest = Math.min(...scores);
const totalSum = scores.reduce((acc, curr) => acc + curr, 0);
const average = totalSum / scores.length;
const passedCount = scores.filter(score => score >= 50).length;

console.log("=== Q4: Array Performance Analyzer ===");
console.log("Scores Array:", scores);
console.log(`Highest Score: ${highest}`);
console.log(`Lowest Score: ${lowest}`);
console.log(`Average Score: ${average.toFixed(2)}`);
console.log(`Students Passed (≥ 50): ${passedCount} out of ${scores.length}`);