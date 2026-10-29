"use strict";

class Book {
  constructor(title, author, ISBN, isIssued = false) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (this.isIssued) {
      return `Book "${this.title}" is already issued.`;
    }
    this.isIssued = true;
    return `Book "${this.title}" has been successfully issued.`;
  }

  returnBook() {
    if (!this.isIssued) {
      return `Book "${this.title}" is not currently issued.`;
    }
    this.isIssued = false;
    return `Book "${this.title}" has been successfully returned.`;
  }

  getDetails() {
    return `ISBN: ${this.ISBN} | Title: "${this.title}" | Author: ${this.author} | Status: ${this.isIssued ? "Issued" : "Available"}`;
  }
}

const library = [
  new Book("Clean Code", "Robert C. Martin", "978-0132350884"),
  new Book("You Don't Know JS", "Kyle Simpson", "978-1491904244"),
  new Book("JavaScript: The Good Parts", "Douglas Crockford", "978-0596517748"),
  new Book("Design Patterns", "Erich Gamma et al.", "978-0201633610", true)
];

function displayAvailableBooks(books) {
  console.log("=== Available Books in Library ===");
  const available = books.filter(book => !book.isIssued);
  if (available.length === 0) {
    console.log("No books currently available.");
  } else {
    available.forEach(book => console.log(book.getDetails()));
  }
}

function issueBookByISBN(books, searchISBN) {
  console.log(`\nAttempting to issue book with ISBN: ${searchISBN}`);
  const book = books.find(b => b.ISBN === searchISBN);
  if (!book) {
    console.log(`Error: Book with ISBN "${searchISBN}" not found.`);
  } else {
    console.log(book.issueBook());
  }
}

displayAvailableBooks(library);

issueBookByISBN(library, "978-0132350884");
issueBookByISBN(library, "978-0132350884");
issueBookByISBN(library, "000-0000000000");

console.log("\n=== Available Books After Transactions ===");
displayAvailableBooks(library);
