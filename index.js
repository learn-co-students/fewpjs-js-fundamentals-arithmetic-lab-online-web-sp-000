
// Write your code here

const num1 = 2;

const num2 = 31;

const multiply = multiplyNums(num1, num2)

function multiplyNums(num1, num2) {
  return num1 * num2
}

let random = generateRandomNumber();

function generateRandomNumber() {
  return Math.floor((Math.random() + 0.1) * 10)
}

const mod = remainderOfFour()

function remainderOfFour() {
  const num1 = 16;
  const num2 = 6;
  return num1 % num2
}

const max = setMaxOfTwenty()

function setMaxOfTwenty() {
  const array = [1, 5, 10, 15, 20];
  return Math.max(...array)
}
