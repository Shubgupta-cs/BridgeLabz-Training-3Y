"use strict";

const apiData = ["25", "true", "false", "NaN", "", "100px", "3.14", null, undefined];
const validNumericData = [];
const invalidData = [];

for (let i = 0; i < apiData.length; i++) {
    const rawVal = apiData[i];
    const numVal = Number(rawVal);
    const boolVal = Boolean(rawVal);
    const strVal = String(rawVal);

    console.log(`Original: ${rawVal} | Number: ${numVal} | Boolean: ${boolVal} | String: ${strVal}`);

    const isInvalid = 
        rawVal === null || 
        rawVal === undefined || 
        rawVal === "" || 
        Number.isNaN(numVal) || 
        (typeof rawVal === "string" && rawVal.trim() === "") ||
        (typeof rawVal === "string" && rawVal.endsWith("px"));

    if (isInvalid) {
        invalidData.push(rawVal);
    } else {
        validNumericData.push(numVal);
    }
}

console.log("\n--- VALID NUMERIC DATA ---");
console.log(validNumericData);

console.log("\n--- INVALID DATA ---");
console.log(invalidData);