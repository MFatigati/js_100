let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let arrOdd = arr.map(x => {
  if (x.length % 2 === 0) {
    return "even"} else {
      return "odd"}}).filter(y => y === "odd")

console.log(arrOdd)

// LS solution used .map() to find lengths, then filtered out odd lengths.