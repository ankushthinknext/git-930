//Function definition

// DRY - DON'T REPEAT YOURSELF
// SOC SRP -  Saperation of concerns and single responsibilty pricipal
// KIS - KEEP IT SIMPLE
function sum(a, b) {
  return a + b;
}

function isEven(number) {
  return number % 2 === 0;
}

function isDivisible(divident, divisor) {
  return divident % divisor === 0;
}

// IN build function is js
let age = prompt("Enter your age"); //to take input from dialog
let isRaning = confirm("Rain Status");
