"use strict";

class NegativeAmountError extends Error {
  constructor(message) {
    super(message);
    this.name = "NegativeAmountError";
  }
}

class MissingPropertyError extends Error {
  constructor(message) {
    super(message);
    this.name = "MissingPropertyError";
  }
}

class NullTransactionError extends Error {
  constructor(message) {
    super(message);
    this.name = "NullTransactionError";
  }
}

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const validTransactions = [];
const invalidTransactions = [];

for (let i = 0; i < transactions.length; i++) {
  const tx = transactions[i];

  debugger;

  try {
    if (tx === null || tx === undefined) {
      throw new NullTransactionError(`Transaction at index ${i} is null or undefined`);
    }

    if (tx.id === undefined || tx.amount === undefined) {
      throw new MissingPropertyError(`Transaction at index ${i} (ID: ${tx.id ?? "N/A"}) is missing id or amount`);
    }

    if (typeof tx.amount !== "number" || tx.amount < 0) {
      throw new NegativeAmountError(`Transaction ID ${tx.id} has negative amount (${tx.amount})`);
    }

    validTransactions.push(tx);
  } catch (error) {
    invalidTransactions.push({
      item: tx,
      errorType: error.name,
      message: error.message
    });
  }
}

console.log("=== TRANSACTION VALIDATION REPORT ===");
console.log(`Total Transactions Evaluated: ${transactions.length}`);
console.log(`Successful (Valid) Transactions: ${validTransactions.length}`);
console.log(`Failed (Invalid) Transactions: ${invalidTransactions.length}`);

console.log("\n--- Successful Transactions ---");
for (let i = 0; i < validTransactions.length; i++) {
  console.log(`[PASS] ID: ${validTransactions[i].id}, Amount: $${validTransactions[i].amount}`);
}

console.log("\n--- Categorized Failed Transactions ---");
for (let i = 0; i < invalidTransactions.length; i++) {
  const failure = invalidTransactions[i];
  console.log(`[FAIL] Type: ${failure.errorType} | Error: ${failure.message} | Payload: ${JSON.stringify(failure.item)}`);
}

