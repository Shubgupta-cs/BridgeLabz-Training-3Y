"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" },
  { name: "Rohan", salary: "invalid", years: "4" },
  { name: "Pooja", years: "1" }
];

for (let i = 0; i < employees.length; i++) {
  try {
    const emp = employees[i];

    if (!emp || typeof emp !== "object") {
      throw new Error(`Invalid record at index ${i}`);
    }

    if (!emp.name) {
      throw new Error(`Missing employee name at index ${i}`);
    }

    if (emp.salary === undefined || emp.salary === null) {
      throw new Error(`Missing salary for employee ${emp.name}`);
    }

    if (emp.years === undefined || emp.years === null) {
      throw new Error(`Missing experience years for employee ${emp.name}`);
    }

    const salary = Number(emp.salary);
    const years = Number(emp.years);

    if (Number.isNaN(salary) || Number.isNaN(years)) {
      throw new Error(`Conversion error: salary or years is not a valid number for ${emp.name}`);
    }

    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
    const totalCompensation = salary + bonus;

    console.log(`Employee: ${emp.name} | Salary: $${salary.toFixed(2)} | Service: ${years} yrs | Bonus Rate: ${years > 3 ? "10%" : "5%"} | Bonus: $${bonus.toFixed(2)} | Total Compensation: $${totalCompensation.toFixed(2)}`);
  } catch (err) {
    console.log(`[ERROR] Processing failed: ${err.message}`);
  }
}

