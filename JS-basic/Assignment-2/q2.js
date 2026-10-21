"use strict";

const rawProductName = "   wireless headphones PRO   ";

const cleanedTitle = rawProductName
    .trim()
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace("Pro", "Pro Edition");

console.log("=== Q2: String Manipulation Report ===");
console.log(`Cleaned Title: "${cleanedTitle}"`);
console.log(`Title Length: ${cleanedTitle.length}`);