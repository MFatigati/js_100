let rlSync = require('readline-sync');

let age = Number(rlSync.question(`What is your age? `));
console.log(`You are ${age} years old.
In 10 years, you will be ${age+10} years old.
In 20 years, you will be ${age+20} years old.
In 30 years, you will be ${age+30} years old.
In 40 years, you will be ${age+40} years old.`)