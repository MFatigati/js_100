let rlSync = require('readline-sync');
let age = Number(rlSync.question(`How old are you? `))

console.log(`You are ${age} years old.`);

for (let count = 10; count <=40; count += 10) {
  console.log(`In ${count} years, you will be ${age + count} years old.`);
}