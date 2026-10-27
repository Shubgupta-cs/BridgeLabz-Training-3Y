"use strict";

const bonus = 5000;

function calculateSalary(isPermanent) {

    let salary = 40000;

    if (isPermanent) {
        salary += bonus;
        console.log(`[Status: Permanent] Total Salary (including bonus ₹${bonus}): ₹${salary}`);
    } else {
        console.log(`[Status: Contract] Total Salary (no bonus): ₹${salary}`);
    }
}

calculateSalary(true); 
calculateSalary(false); 