// 1

false || (true && false); // false
true || (1 + 2); // true
(1 + 2) || true; // 3
true && (1 + 2); // 3
false && (1 + 2); // false
(1 + 2) && true; // true
(32 * 4) >= 129; // false
false !== !true; // false
true === 4; // false
false === (847 === '847'); // true
false === (847 == '847'); // false

(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
(!true || (false === 20) || ((328 / 4) === 82)) || false;
(!true || false || (82 === 82)) || false;
(!true || false || true) || false;
(false || false || true) || false; // true; all exercises correct!


// 2 and 3
function evenOrOdd(number){
  if (Number.isInteger(number) === false){
    console.log('not an integer')
  }
  else if (number % 2 === 0) {
    console.log('even')
  }
  else {
    console.log('odd')
  }
} // no hints needed!

// 4
Product2
Product3
Product not found! // no breaks lead to fall through behaviour

// 5
if (foo()) {
  return 'bar';
} else {
  return qux();
}

// 6 'Not Empty', because an empty array is truthy, so the first branch of the if statement is activated.

// 7
function toCaps10 (string){
  if (string.length > 10){
    return string.toUpperCase();
  } else {
    return string
  }
}

function toCaps10 (string){
return string.length > 10 ? string.toUpperCase() : string;
};

// 8
function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 50 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}