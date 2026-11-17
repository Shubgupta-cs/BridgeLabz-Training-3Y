"use strict";

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
    try {
        if (tx === null || tx === undefined) {
            throw new Error("NullEntryError");
        }
        if (tx.id === undefined || tx.amount === undefined) {
            throw new Error("MissingPropertyError");
        }
        if (tx.amount < 0) {
            throw new Error("NegativeAmountError");
        }

        validTransactions.push(tx);
    } catch (err) {
        invalidTransactions.push({ transaction: tx, error: err.message });
    }
}

console.log("Valid Transactions Count:", validTransactions.length);
console.log("Invalid Transactions Count:", invalidTransactions.length);
console.log("Invalid Details:", invalidTransactions);