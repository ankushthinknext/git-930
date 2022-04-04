//functions are first class citize in js

// const sum = function (a, b) {
//   return a + b;
// };

let sum = (a, b) => {
  return a + b;
};

let isEven = number => {
  return number % 2 === 0;
};

let isDivisible = (divident, divisor) => divident % divisor === 0;

let square = number => number ** 2;
