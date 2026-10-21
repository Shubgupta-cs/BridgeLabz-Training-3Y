"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}',
  '{"user":"Leo","age":15}'
];

const cleanArray = [];
const errorLog = [];

for (let i = 0; i < rawData.length; i++) {
  const lineNumber = i + 1;
  const rawString = rawData[i];

  debugger;

  try {
    const parsed = JSON.parse(rawString);

    if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
      throw new Error("Parsed JSON is not a valid object structure");
    }

    const missingKeys = [];
    if (!("user" in parsed)) {
      missingKeys.push("user");
    }
    if (!("age" in parsed)) {
      missingKeys.push("age");
    }

    if (missingKeys.length > 0) {
      throw new Error(`Missing required key(s): ${missingKeys.join(", ")}`);
    }

    const ageAsNumber = Number(parsed.age);
    if (Number.isNaN(ageAsNumber)) {
      throw new Error(`Invalid age value: cannot convert "${parsed.age}" to a number`);
    }

    parsed.age = ageAsNumber;
    cleanArray.push(parsed);
    console.log(`[PASS] Line ${lineNumber}: Successfully parsed and validated user "${parsed.user}"`);
  } catch (error) {
    errorLog.push({
      line: lineNumber,
      raw: rawString,
      reason: error.message
    });
    console.log(`[FAIL] Line ${lineNumber}: ${error.message} (Raw: ${rawString})`);
  }
}

console.log("\n=== VALID ENTRIES (CLEAN ARRAY) ===");
console.log(JSON.stringify(cleanArray, null, 2));

console.log("\n=== ERROR AUDIT LOG ===");
for (let i = 0; i < errorLog.length; i++) {
  const err = errorLog[i];
  console.log(`Line ${err.line}: [${err.reason}] -> Input: ${err.raw}`);
}

console.log("\n=== BONUS: FILTER UNDER-18 USERS ===");
const adults = cleanArray.filter(person => person.age >= 18);
const under18 = cleanArray.filter(person => person.age < 18);

console.log("Eligible Adults (Age >= 18):");
for (let i = 0; i < adults.length; i++) {
  console.log(`  - ${adults[i].user} (Age: ${adults[i].age})`);
}

console.log("Filtered Under-18 Users:");
for (let i = 0; i < under18.length; i++) {
  console.log(`  - ${under18[i].user} (Age: ${under18[i].age})`);
}

