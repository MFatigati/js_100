/* 1

console.log(greeting);
var greeting = 'Hello world!';

logs undefined since the declaration is hoisted */

/* 2

console.log(greeting);
let greeting = 'Hello world!';

throws an error because variables declared with let are NOT hoisted, so we
are attempting to log an undeclared variable. */

/* 3

if (true) {
  let myValue = 20;
}

console.log(myValue);

throws an error because myValue is outside of the scope of the log */

/* 4

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

logs 1 because the variable a is accessible to the if statement */

/* 5

function myFunction() {
  let a = 1;
  if (true) {
    console.log(a);
    let a = 2;
 }
}

myFunction();

I originally thought the first a would log 1, picking up the first declaration, and then the second a
would log 2, overridding the first declaration within local scope. But it turns out that the scope of variables
declared with let is the entire block, even what precedes, even though that are not given an undefined
value like with var. */

/* 6

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
  console.log(b)
}

console.log(b);

The final console log logs false, because it refers to the initial declaration of b,
not the one in the if statement scope.

*/

/* 7

let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();

Logs 1, because the variable in the function body scope has access to the outer scope.

*/

/* 8

let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);

//Code logs 2, because the parameter a is just that--a parameter--which happens to
have the same name as a variable declared earlier. But the value of the function
will still depend on the value passed into the parameter */

/* 9

const a = 1;

function myFunction() {
  let b = 2;
}

myFunction(a);

Prints and error because you cannot reassign a variable declared with const */

/* 10

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

logs the updated object, because you can mutate objects declared with const */
