/* First Element

function first(arr) {
  return arr[0]
}

console.log(first(['Earth', 'Moon', 'Mars']));
console.log(first([]));

// returns undefined if arr is empty */

/* Last Element

function last(arr) {
  return arr[arr.length - 1]
}

console.log(last(['Earth', 'Moon', 'Mars'])); */

/* Add + Delete

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.shift();
energy.push('geothermal');

console.log(energy); */

/* Alphabet

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let arr = [];
for (let i = 0; i < alphabet.length; i += 1) {
  arr.push(alphabet[i]);
}
console.log(arr);

// alternative solution

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
console.log(alphabet.split('')); */

/* Filter

let scores = [96, 47, 113, 89, 100, 102];
let newArray = scores.filter(x => x >= 100)
console.log(newArray.length) */

/* Vocabulary

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

vocabulary.forEach(x => x.forEach(y => console.log(y))); */

/* Equality: the arrays are not equal, because they are objects, and objects are only strictly
equal if they occupy the same spot in memory */

/* Type

function filter(input) {
  return Array.isArray(input);
}

console.log(filter([1, 2])) */

/* Travel

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(location, arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === location) {
      return true;
    }
  }
  return false;
}

console.log(contains('Barcelona', destinations),
contains('Nashville', destinations)
)

// alternative solution

console.log(destinations.some(x => x === "Barcelona")) */

/* Passcode

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

let string = passcode.join("-");
console.log(string);

let noSeparator = passcode.join('');
console.log(noSeparator); */

/* Checking items off the grocery list

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

let count = groceryList.length;

for (let i = 0; i < count; i += 1) {
  console.log(groceryList.shift())
}
console.log(groceryList); */