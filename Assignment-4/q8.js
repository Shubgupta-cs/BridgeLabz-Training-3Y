"use strict";

const user = {
  name: "John",
  email: "john@mail.com",
  age: 21
};

function generateUserFormHTML(userObj) {
  return `
<form id="userEditForm">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" value="${userObj.name}" />
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" value="${userObj.email}" />
  
  <label for="age">Age:</label>
  <input type="number" id="age" name="age" value="${userObj.age}" />
  
  <button type="submit">Update User</button>
</form>
<div id="userDisplay">
  <h3>Updated User Details:</h3>
  <p id="detailsText">Name: ${userObj.name}, Email: ${userObj.email}, Age: ${userObj.age}</p>
</div>
`;
}

function updateUser(userObj, newValues) {
  if (newValues.name !== undefined) userObj.name = newValues.name;
  if (newValues.email !== undefined) userObj.email = newValues.email;
  if (newValues.age !== undefined) userObj.age = Number(newValues.age);
  return userObj;
}

function handleFormSubmit(userObj, formValues) {
  updateUser(userObj, formValues);
  const displayString = `Name: ${userObj.name} | Email: ${userObj.email} | Age: ${userObj.age}`;
  if (typeof document !== "undefined") {
    const details = document.getElementById("detailsText");
    if (details) details.textContent = displayString;
  }
  return displayString;
}

console.log("=== Initial User Object ===");
console.log(user);

console.log("\n=== Dynamic Form HTML ===");
console.log(generateUserFormHTML(user).trim());

console.log("\n=== Simulating Form Submission 1 ===");
const update1 = { name: "Johnathan", email: "johnathan@mail.com", age: 22 };
const output1 = handleFormSubmit(user, update1);
console.log("Live Updated DOM Content ->", output1);
console.log("Updated User Object ->", user);

console.log("\n=== Simulating Form Submission 2 ===");
const update2 = { age: 25 };
const output2 = handleFormSubmit(user, update2);
console.log("Live Updated DOM Content ->", output2);
console.log("Updated User Object ->", user);
