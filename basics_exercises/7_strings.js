/* Length

"These aren't the droids you're looking for.".length */

/* ALL CAPS

console.log('confetti floating everywhere'.toUpperCase()) */

/* Repeat

function repeat(string, num) {
  let newstring = "";
  for (let count = 1; count <= num; count += 1) {
    newstring = newstring + string;
  }
  return(newstring);
}

console.log(repeat("ha", 3)); 

LS solution used a while loop, which was more concise */

/* Multiline String

let multiLineString = `A pirate I was meant to be!
Trim the sails and roam the sea!`;

console.log(multiLineString);

let multiLineString2 = "A pirate I was meant to be!\nTrim the sails and roam the sea!";

console.log(multiLineString2); */

/* Case-insensitive Equality

Just convert they all to either upper or lower case before testing equality */

/* Contains Character

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
console.log(/x/.test(byteSequence)); */

/* Blank? Version 1

function isBlank(string) {
  return string === "";
}

console.log(
isBlank('mars'),
isBlank('  '),
isBlank('')
)

Yes! I had intially written this as an if/else statement, but recognized that it could
be more concise by just returning the comparison, since that returns a boolean value */

/* Blank? Version 2

function isBlank(string) {
  let newstring = string.trim();
  return newstring.length === 0;
}

console.log(
  isBlank('mars'),
  isBlank('  '),
  isBlank('')
  ) */

  //

/* Capitalize Words

First, split the string into an array. Then create a new array, with each element
of the new array consisting of the first character of each element of the old array,
capitalized, plus any remaining characters. Finally, join the new array elements
into a new string.


let string = 'launch school tech & talk';
let splitString = string.split(" ");
let newArray = splitString.map(word => word[0].toUpperCase() + word.substring(1));
let capString = newArray.join(" ");

console.log(splitString, newArray, capString); */