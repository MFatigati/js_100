// 1

let name = "Victor";
console.log(`Good Morning, ${name}.\nGood Afternoon, ${name}.\nGood Evening, ${name}.`)

// 2
let age = 20;
console.log(
`You are ${age} years old.
In 10 years, you will be ${age + 10} years old.
In 20 years, you will be ${age + 20} years old.
In 30 years, you will be ${age + 30} years old.
In 40 years, you will be ${age + 40} years old.`
)

// 3
> {
  ...   let foo = 'bar';
  ... }
  undefined
  > console.log(foo);
  Uncaught ReferenceError: foo is not defined // This happens because foo is not in the same scope as the log command

// 4
/* The second set of logs will still print with the name Victor, because variables declared with const cannot be reassigned
In other words, the line ```NAME = 'Joe';``` results in an error. */

// 5 Program will log bar, because ```let foo = 'qux';``` is declared in a local scope, whereas the log is called in global scope.

// 6 No error occurs, even though the same variable name is redeclared with const, because they are in different scopes