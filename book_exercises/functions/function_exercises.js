/* 1 executing foo does NOT affect the final log,
because the function only affects a variable declared locally
(despite having the same name as a global variable),
while the log is called with respect to a global variable. */

// 2 see ./greeter_updated.js

// 3 see ./multiply.js

// 4

function factorial(number1, number2, number3, number4, number5) {
  let result1 = number1;
  let result2 = number1 * number2;
  let result3 = number1 * number2 * number3;
  let result4 = number1 * number2 * number3 * number4;
  let result5 = number1 * number2 * number3 * number4 * number5;
  console.log(result1);
  console.log(result2);
  console.log(result3);
  console.log(result4);
  console.log(result5);
}

factorial(1, 2, 3, 4, 5);

/* Ah, I see in the solutions that they wanted us to write a program,
literally making use of the previously written times function. I thought
they just wanted us to draw inspiration from it.
I've stored a better solution in ./factorial.js 
Still somewhat puzzled why just assigning the variable to the function results in the log*/

// 5 Nothing, because the return exits the function before the log

// 6 Again, nothing, beacuse there is not console.log(), just a return statement