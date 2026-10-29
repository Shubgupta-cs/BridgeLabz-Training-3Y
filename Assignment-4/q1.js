"use strict";

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = Number(price);
    this.category = category;
  }

  applyDiscount(percent) {
    if (percent > 0 && percent <= 100) {
      this.price = this.price - (this.price * (percent / 100));
    }
    return this.price;
  }

  displayDetails() {
    return `ID: ${this.id} | Name: ${this.name} | Category: ${this.category} | Price: ₹${this.price.toFixed(2)}`;
  }
}

const products = [
  new Product(101, "Laptop", 55000, "Electronics"),
  new Product(102, "Mouse", 800, "Electronics"),
  new Product(103, "Desk Chair", 4500, "Furniture"),
  new Product(104, "Notebook", 150, "Stationery"),
  new Product(105, "Smart Watch", 3500, "Electronics")
];

console.log("=== All Products (Before Discount) ===");
products.forEach(product => console.log(product.displayDetails()));

console.log("\n=== Applying 10% Discount to Laptop and Smart Watch ===");
products[0].applyDiscount(10);
products[4].applyDiscount(10);
console.log(products[0].displayDetails());
console.log(products[4].displayDetails());

console.log("\n=== Products with Price > 1000 (Filtered) ===");
const expensiveProducts = products.filter(product => product.price > 1000);
expensiveProducts.forEach(product => console.log(product.displayDetails()));
