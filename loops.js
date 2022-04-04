//loop or iterative statements
//for loop, do while, while loop using recursion
const isDivisible = (divident, divisor) => divident % divisor === 0;

const isLeap = year =>
  isDivisible(year, 4) && (!isDivisible(year, 100) || isDivisible(year, 400));

function leapYears(limit) {
  for (let i = 0; i <= limit; i++) {
    if (isLeap(i)) console.log(i);
  }
}

function isPrime(number) {
  for (let i = 2; i < Math.ceil(number / 2); i++) {
    if (isDivisible(number, i)) {
      return false;
    }
  }
  return true;
}

function primeSeries(limit) {
  for (let i = 1; i <= limit; i++) {
    if (isPrime(i)) console.log(i);
  }
}

const trimLastDigit = number => parseInt(number / 10);

function totalDigits(number) {
  let digits = 0;
  for (; number > 0; digits++) {
    number = trimLastDigit(number);
  }
  return digits;
}

const extractLastDigit = number => number % 10;

function sumOfDigitsPower(number) {
  let power = totalDigits(number); //calculte total Digits
  let sum = 0;
  for (let i = 0; i < power; i++) {
    sum += extractLastDigit(number) ** power;
    number = trimLastDigit(number);
  }
  return sum;
}

function isArmstrong(number) {
  return number === sumOfDigitsPower(number);
}

function armstrongSeries(limit) {
  for (let i = 10; i < limit; i++) {
    if (isArmstrong(i)) console.log(i);
  }
}

function factorial(number) {
  let result = 1;
  for (let i = number; i > 0; i--) {
    result = result * i;
  }
  return result;
}

function sumOfDigitsFactorial(number) {
  let sum = 0;
  let digits = totalDigits(number);
  for (let i = 0; i < digits; i++) {
    sum += factorial(extractLastDigit(number));
    number = trimLastDigit(number);
  }
  return sum;
}

function isStrong(number) {
  return number === sumOfDigitsFactorial(number);
}

function strongNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    if (isStrong(i)) console.log(i);
  }
}

function isEligible(age, hasPassport) {
  return age >= 18 && hasPassport;
}

function fibonacci(number) {
  if (number <= 1) {
    return number;
  }

  return fibonacci(number - 2) + fibonacci(number - 1);
}

function fibonacciSeries(limit) {
  for (let i = 0; i <= limit; i++) {
    console.log(fibonacci(i));
  }
}

const getRandomNumber = digit => parseInt(Math.random() * 10 ** digit);

const cube = number => number ** 3;

export { getRandomNumber, totalDigits, isPrime, isStrong, isArmstrong };
