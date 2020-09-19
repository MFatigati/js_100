// this function takes a string prompt, and turns it into an input question
function greeter(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name;
}

// these variable declarations set the variables equal to whatever is input
// as a result of running greeter() each time.
let firstName = greeter(`What is your first name? `);
let lastName = greeter(`What is your last name? `);


console.log(`Hello, ${firstName} ${lastName}!`);