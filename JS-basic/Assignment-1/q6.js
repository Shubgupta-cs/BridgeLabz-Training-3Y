
const originalTotal = 7500;
let discountPercentage = 0;

if (originalTotal >= 10000) {
  discountPercentage = 25;
} else if (originalTotal >= 5000) {
  discountPercentage = 15;
} else if (originalTotal >= 2000) {
  discountPercentage = 5;
} else {
  discountPercentage = 0;
}

const discountAmount = (originalTotal * discountPercentage) / 100;
const finalPrice = originalTotal - discountAmount;

console.log(`Original Total: ₹${Math.round(originalTotal)}`);
console.log(`Discount Applied: ${discountPercentage}%`);
console.log(`Final Price After Discount: ₹${Math.round(finalPrice)}`);