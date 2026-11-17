"use strict";

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

for (let i = 0; i < operations.length; i++) {
    const op = operations[i];
    try {
        let result;
        switch (op) {
            case "add":
                result = num1 + num2;
                break;
            case "divide":
                if (num2 === 0) throw new Error("DivisionByZeroError");
                result = num1 / num2;
                break;
            case "power":
                result = Math.pow(num1, num2);
                break;
            case "root":
                if (num1 < 0) throw new Error("NegativeRootError");
                result = Math.sqrt(num1);
                break;
            case "subtract":
                result = num1 - num2;
                break;
            default:
                throw new InvalidOperationError(`Unknown operation: ${op}`);
        }
        console.log(`Operation [${op}] result: ${result}`);
    } catch (err) {
        console.error(`Operation [${op}] failed with error: ${err.message}`);
    }
}