"use strict";

const nameRegex = /^[A-Za-z\s]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const seatsRegex = /^([1-9]|10)$/;

function validateAndBookTicket(name, email, seats) {
  const errors = [];

  if (!name || !nameRegex.test(name.trim())) {
    errors.push("Invalid Name: Name must contain alphabets only.");
  }

  if (!email || !emailRegex.test(email.trim())) {
    errors.push("Invalid Email: Email format is invalid.");
  }

  const seatStr = String(seats).trim();
  if (!seatsRegex.test(seatStr)) {
    errors.push("Invalid Seats: Seats must be an integer between 1 and 10.");
  }

  if (errors.length > 0) {
    return {
      success: false,
      errors: errors
    };
  }

  const booking = {
    name: name.trim(),
    email: email.trim(),
    seats: Number(seatStr)
  };

  return {
    success: true,
    booking: booking
  };
}

function displayTicket(booking) {
  const pricePerSeat = 250;
  const totalPrice = booking.seats * pricePerSeat;
  console.log("-----------------------------------------");
  console.log("           MOVIE TICKET CONFIRMATION     ");
  console.log("-----------------------------------------");
  console.log(`Customer Name : ${booking.name}`);
  console.log(`Email Address : ${booking.email}`);
  console.log(`Seats Booked  : ${booking.seats}`);
  console.log(`Price / Seat  : ₹${pricePerSeat}`);
  console.log(`Total Payable : ₹${totalPrice}`);
  console.log("Status        : CONFIRMED");
  console.log("-----------------------------------------");
}

const testCases = [
  { name: "Priya Sharma", email: "priya@gmail.com", seats: 4 },
  { name: "Rahul123", email: "rahul@com", seats: 15 },
  { name: "Amit Verma", email: "amit.verma@domain.org", seats: "8" }
];

testCases.forEach((test, idx) => {
  console.log(`\n=== Booking Attempt ${idx + 1} ===`);
  const result = validateAndBookTicket(test.name, test.email, test.seats);
  if (result.success) {
    displayTicket(result.booking);
  } else {
    console.log("Booking Failed:");
    result.errors.forEach(err => console.log(`  - ${err}`));
  }
});
