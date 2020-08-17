let rlSync = require('readline-sync');

function multiply() {
  let firstNumber = Number(rlSync.question('Enter first number: '));
  let secondNumber = Number(rlSync.question('Enter second number: '))
  console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`)
}

multiply();