function applyOperation(numbers, operation) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(operation(numbers[i]));
    }
    return result;
}

const numbers = [1, 2, 3, 4];

const doubled = applyOperation(numbers, num => num * 2);
console.log(doubled);

const squared = applyOperation(numbers, num => num * num);
console.log(squared);