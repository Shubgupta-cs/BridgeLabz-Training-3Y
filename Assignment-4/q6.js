"use strict";

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = Number(salary);
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    if (percent > 0) {
      this.salary += this.salary * (percent / 100);
    }
    return this.salary;
  }

  getDetails() {
    return `ID: ${this.id} | Name: ${this.name.padEnd(8)} | Dept: ${this.department.padEnd(11)} | Monthly: ₹${this.salary.toFixed(2)} | Annual: ₹${this.getAnnualSalary().toFixed(2)}`;
  }
}

const employees = [
  new Employee(1, "Ananya", "Engineering", 75000),
  new Employee(2, "Vikram", "Marketing", 48000),
  new Employee(3, "Sneha", "HR", 42000),
  new Employee(4, "Karan", "Finance", 60000),
  new Employee(5, "Rhea", "Engineering", 80000)
];

console.log("=== Employee Records & Initial Annual Salaries ===");
employees.forEach(emp => console.log(emp.getDetails()));

console.log("\n=== Applying 10% Performance Bonus to Engineering Employees ===");
employees.forEach(emp => {
  if (emp.department === "Engineering") {
    emp.applyBonus(10);
  }
});
employees.forEach(emp => console.log(emp.getDetails()));

const totalAnnualPayout = employees.reduce((total, emp) => {
  return total + emp.getAnnualSalary();
}, 0);

console.log("\n=== Total Annual Payout of Company ===");
console.log(`Total Company Annual Payout: ₹${totalAnnualPayout.toFixed(2)}`);
