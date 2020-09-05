function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

let solution = times(times(times(times(times(1, 1), 2), 3), 4), 5);

// Is this actually loging anything to the console, or am I just seeing the return value there?