/* 1

console.log("Michael" + " Fatigati") */

/* 2

function getFourDigits(num) {
  let number = num;
  console.log(number);

  let ones = number % 10;
  number = number - ones;
  console.log(number);

  let tens = number / 10 % 10;
  number = number - (tens * 10);
  console.log(number);

  let hundreds = number / 100 % 10;
  number = number - (hundreds * 100);
  console.log(number);

  let thousands = number / 1000 % 10;
  console.log(
    `Ones: ${ones}
Tens: ${tens}
Hundreds: ${hundreds}
Thousands: ${thousands}`
  )
}
getFourDigits(4936) */

// 3