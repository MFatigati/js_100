function findMatch(words, regex) {
  let newArray = words.filter(x =>
    regex.test(x))
  console.log(newArray)
}

let someWords = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

findMatch(someWords, /lab/)

/* The below also works (non-arrow function):

function findMatch(words, regex) {
  let newArray = words.filter(function(x) {
    return regex.test(x)})
  console.log(newArray)
}

let someWords = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

findMatch(someWords, /lab/) */