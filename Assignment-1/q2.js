
const expenses = [6500, 3000, 15000, 4500, 2500];
const numberOfCategories = expenses.length;

let totalExpense = 0;
for (let i = 0; i < expenses.length; i++) {
  totalExpense += expenses[i];
}
const averageExpense = totalExpense / numberOfCategories;

let finalAmount = totalExpense;
finalAmount += finalAmount * 0.10;

console.log(`Base Total Expenses: ₹${totalExpense.toFixed(2)}`);
console.log(`Average Expense per Category: ₹${averageExpense.toFixed(2)}`);
console.log(`Final Amount (Including 10% Tax): ₹${finalAmount.toFixed(2)}`);