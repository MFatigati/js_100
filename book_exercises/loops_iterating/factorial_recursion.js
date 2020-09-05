function factorial2(number){
  
  if (number === 0) {
    return 1;
  }
  else {
    let result = number * factorial2(number -1);
    return result;
}}

console.log(
factorial2(0),
factorial2(1),
factorial2(2),
factorial2(3))