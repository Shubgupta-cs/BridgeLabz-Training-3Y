"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumericData = [];
const invalidData = [];

function isValidNumber(val) {
  if (val === null || val === undefined) {
    return false;
  }
  if (typeof val === "string" && val.trim() === "") {
    return false;
  }
  const num = Number(val);
  return !Number.isNaN(num);
}

console.log("=== DATA CONVERSION REPORT ===");

for (let i = 0; i < apiData.length; i++) {
  const raw = apiData[i];
  const numForm = Number(raw);
  const boolForm = Boolean(raw);
  const strForm = String(raw);

  console.log(`Index ${i}:`);
  console.log(`  Raw Value: ${JSON.stringify(raw)} (${typeof raw})`);
  console.log(`  Number Form: ${numForm}`);
  console.log(`  Boolean Form: ${boolForm}`);
  console.log(`  String Form: "${strForm}"`);

  if (isValidNumber(raw)) {
    validNumericData.push(Number(raw));
    console.log(`  Status: VALID numeric value -> Added to valid list`);
  } else {
    invalidData.push(raw);
    console.log(`  Status: INVALID numeric value -> Skipped & logged separately`);
  }
  console.log("-----------------------------------------");
}

console.log("\n=== FINAL PARSING SUMMARY ===");
console.log(`Total items processed: ${apiData.length}`);
console.log(`Valid numeric count: ${validNumericData.length}`);
console.log(`Invalid entries count: ${invalidData.length}`);

console.log("\nValid Numeric Data:");
for (let i = 0; i < validNumericData.length; i++) {
  console.log(`  [${i + 1}] ${validNumericData[i]} (Type: ${typeof validNumericData[i]})`);
}

console.log("\nInvalid Data (Skipped):");
for (let i = 0; i < invalidData.length; i++) {
  console.log(`  [${i + 1}] ${JSON.stringify(invalidData[i])} (Reason: cannot be safely parsed as a finite number)`);
}

