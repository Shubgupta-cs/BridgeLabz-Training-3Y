"use strict";

class FormBuilder {
  constructor(fields, formId = "dynamicForm") {
    this.fields = fields;
    this.formId = formId;
    this.formData = {};
  }

  generateHTML() {
    let html = `<form id="${this.formId}">\n`;
    for (const field of this.fields) {
      const fieldName = field.name || field.label.toLowerCase().replace(/\s+/g, "_");
      html += `  <div class="form-group">\n`;
      html += `    <label for="${fieldName}">${field.label}:</label>\n`;
      html += `    <input type="${field.type}" id="${fieldName}" name="${fieldName}" placeholder="Enter ${field.label}" />\n`;
      html += `  </div>\n`;
    }
    html += `  <button type="submit">Submit</button>\n`;
    html += `</form>`;
    return html;
  }

  render(containerElement) {
    if (containerElement) {
      containerElement.innerHTML = this.generateHTML();
      this.bindSubmit(containerElement);
    }
    return this.generateHTML();
  }

  bindSubmit(containerElement) {
    const form = containerElement.querySelector(`#${this.formId}`);
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = this.getFormData(form);
        console.log("Form Submitted Successfully:", data);
      });
    }
  }

  getFormData(formElement) {
    const result = {};
    if (formElement) {
      const inputs = formElement.querySelectorAll("input");
      inputs.forEach(input => {
        result[input.name] = input.value;
      });
    } else {
      for (const field of this.fields) {
        const fieldName = field.name || field.label.toLowerCase().replace(/\s+/g, "_");
        result[fieldName] = field.value || "";
      }
    }
    this.formData = result;
    return result;
  }
}

const formFields = [
  { type: "text", label: "Username", name: "username", value: "alex99" },
  { type: "email", label: "Email Address", name: "email", value: "alex@example.com" },
  { type: "password", label: "Password", name: "password", value: "Secret@123" }
];

const builder = new FormBuilder(formFields);
console.log("=== Generated Dynamic Form HTML ===");
console.log(builder.generateHTML());

console.log("\n=== Form Data Collected via getFormData() ===");
console.log(builder.getFormData());
