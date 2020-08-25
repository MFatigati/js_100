let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keysArray = Object.keys(obj)

console.log(keysArray)

let keysUpper = []

keysArray.forEach(x => keysUpper.push(x.toUpperCase()));

console.log(keysUpper)

/* LS code used .map(), because this returns a new array directly,
rather than needing to push. My attempt to replicate: */

let keys = Object.keys(obj).map(key => key.toUpperCase())
console.log(keys)