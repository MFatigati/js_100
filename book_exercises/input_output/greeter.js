let rlSync = require('readline-sync');

let name = rlSync.question(`What is your name?`);
console.log(`Hello, ${name}!`)

// My first attempt at question 2

let fName
let lName

function firstName() {
  fName = rlSync.question(`What is your first name?`);
  return fName;
}

function lastName() {
  lName = rlSync.question(`What is your last name?`);
  return lName;
}

firstName();
lastName();

console.log(`Hello, ${fName} ${lName}!`)

// Mirroring the proposed solution

function getName(prompt) {
  let name = rlSync.question(prompt);
  return name;
}

let name1 = getName('What\'s your first name?');
let name2 = getName('What\'s your last name?');
console.log(`Hello, ${name1} ${name2}!`)