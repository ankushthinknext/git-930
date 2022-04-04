import { isStrong, isArmstrong, isPrime } from "./loops.js";

const getRandomNumber = digit => parseInt(Math.random() * 10 ** digit);

let numbers = [];

for (let i = 0; i < 100; i++) {
  let random = getRandomNumber(4);
  numbers.push(random);
}

// let size = numbers.length;

// for (let i = 0; i < size; i++) {
//   console.log(numbers[i]);
// }
//For of loop

// for (let a of numbers) {
//   console.log(a);
// }

//For each

//function in js first class citizen

// numbers.forEach((el, i) => {
//   if (isPrime(el)) {
//     console.log(el);
//   }
// });

// let filtered = numbers.filter(el => isPrime(el));

let mapped = numbers.map(el => el ** 3);

let sum = numbers.reduce((acc, el) => el + acc, 0);

console.log(numbers);
console.log(sum);
