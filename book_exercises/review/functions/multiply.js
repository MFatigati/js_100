let rlSync = require('readline-sync');

function multiply(left, right) {
  let result = left * right;
  return result;
}

function getNumber(prompt) {
  let number = Number(rlSync.question(prompt));
  return number;
}

let firstNum = getNumber(`Enter the first number: `);
let secondNum = getNumber(`Enter the second number: `);

console.log(
  multiply(firstNum, secondNum)
)