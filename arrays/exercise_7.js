let numbers = [3, 5, 7];

let sumOfSquares = numbers.reduce((x, y) => x += (y * y), 0)

console.log(sumOfSquares)

// if leave off initial value, does not iterate over first value in array, but uses that as initial value