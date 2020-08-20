function factorial(number) {

if (number === 0) {
  console.log(1);
}
else {
  let counter = number;
  for (let x = 1; x < number; x++){   
    counter *= (number - x)
  }
  console.log(counter)
}}

factorial(0);
factorial(1);
factorial(2);
factorial(3);

// LS solution certainly better. Here is my attempt to mimic their solution without looking back...

function factorial2(number){
  let result = 1;
  for (counter = number; counter > 0; counter--)
  {result *= counter}
  console.log(result);

}

factorial2(0);
factorial2(1);
factorial2(2);
factorial2(3);