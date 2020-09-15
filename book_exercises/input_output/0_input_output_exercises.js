// 1

let rlSync = require('readline-sync');

let name = rlSync.question(`What is your name? `);
console.log(`Hello, ${name}!`)

// 2

let firstName = prompt('What is your first name? ');
let lastName = prompt('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}`);

// 3

let rlSync = require('readline-sync');

let age = Number(rlSync.question(`What is your age? `));
console.log(`You are ${age} years old.
In 10 years, you will be ${age+10} years old.
In 20 years, you will be ${age+20} years old.
In 30 years, you will be ${age+30} years old.
In 40 years, you will be ${age+40} years old.`)