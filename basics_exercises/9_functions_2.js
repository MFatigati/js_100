/* Greet 1

function greet(greeting = "Hello") {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();  
greet(undefined); */

/* Greet 2

function greet(greeting = "Hello", greeted = "world") {
  console.log(greeting + ', ' + greeted + "!");
}

greet();  
greet('Salutations');
greet('Good morning', 'Launch School'); */

/* Greet 3

function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet() {
  console.log(greeting() + ", " + recipient() + "!");
}

greet(); */

/* BMI

function calculateBMI(heightInCentimeters, weightInKilograms) {
  let heightInMeters = heightInCentimeters/100;
  console.log(heightInMeters);
  let unrounded = weightInKilograms / (heightInMeters**2);
  return unrounded.toFixed(2);
}

console.log(calculateBMI(180, 80)); */

/* Calculate Cat Age

function catAge(humanYears) {
  switch (humanYears) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (humanYears - 2) * 4;
  }
}

console.log(catAge(0), catAge(1), catAge(2), catAge(3), catAge(4)) */

/* Remove Last Char

function removeLastChar(string) {
  return string.substring(0, string.length - 1);
}

console.log(removeLastChar('ciao!'), removeLastChar('hello')); */

/* Arrow Functions (Part 1)

const template = 'I VERB NOUN.';

let sentence = (verb, noun) => template
    .replace('VERB', verb)
    .replace('NOUN', noun);


console.log(sentence('like', 'birds')); */

/* Arrow Functions (Part 2)

let initGame = () => ({
    level: 1,
    score: 0
  });

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score); */