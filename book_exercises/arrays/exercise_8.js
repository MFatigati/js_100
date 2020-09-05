let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function reduceToOdd(array){

const arrOdd = array.reduce((x, current) => {
  if (current.length % 2 !== 0) {
    x.push("odd")} return x;}, []);

console.log(arrOdd)}

reduceToOdd(arr);
