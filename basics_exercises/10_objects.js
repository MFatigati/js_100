/* Retrieve a Value (Part 1)

let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

console.log(student.courses);
student.locker;
console.log(student);
student.locker = undefined;
console.log(student); */

/* Retrieve a Value (Part 2)

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};

console.log(jane.location.country); */

/* Add a Property

let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

fido['favorite food'] = undefined;
fido.age = undefined;

console.log(fido); */

/* Greetings From Jane

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet(name) {console.log(`Hej, ${name}!`)}
};

jane.greet('Bobby'); */

/* Dot Notation vs Bracket Notation

First snippet will log {prefix: 'Pacific'}, because prefix is interpreted as a
string, effectively ignoring the prior variable declaration.

Second snippet will log {Indian: 'Pacific'}, because prefix is interpreted as a
variable, populated by 'Indian' */

/* Is it true?

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

for (let prop in obj) {
  console.log(prop, typeof prop)
}

// "It's true!" is never output because the true in the equality comparison is a boolean
// value, whereas the true in obj is a string. */

/* Car Keys

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let keys = Object.keys(vehicle);
console.log(keys);

// Alt solution:

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let keys = [];

for (let prop in vehicle) {
  keys.push(prop);
} */

/* Convert an object to a nested array

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let nestedPerson = [];

for (let prop in person) {
  nestedPerson.push([prop, person[prop]]);
}

console.log(nestedPerson);

// alt solution:

let newNestedPerson = Object.entries(person);
console.log(newNestedPerson);

*/

/* ...and vice versa

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let newObject = {};

for (let i = 0; i < nestedArray.length; i++) {
  let newKey = nestedArray[i][0];
  newObject[newKey] = nestedArray[i][1];
}

console.log(newObject);

// Alt solution:

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let newObject = {};

nestedArray.forEach(
  function(x) {
    newObject[x][0] = x[1];
  }
)

console.log(newObject); */

/* Cloning a Person

function clone(obj) {
  let newObj = {};
  Object.assign(newObj, obj);
  return newObj;
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33
console.log(clonedPerson);
console.log(person); */