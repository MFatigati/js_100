/* take two

for (let count = 1; count <= 100; count += 1) {
  let multiplied = count * 2;
  console.log(multiplied)
}

the below is wrong because it mutates the count each iteration,
rather than just printing a multiplied version of the count

for (let count = 1; count <= 100; count += 1) {
  console.log(count *= 2)
} */

/* looping over array elements

let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index])
  index += 1;
} */

/* continue

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];
for (let i = 0; i < cities.length; i += 1) {
  if (cities[i] === null) continue;
  else {console.log(cities[i].length)}
} */

/* And on and on and on

initial code does not stop because their is no terminal condition

for (let i = 0; i < 1; i += 1) {
  console.log("and on");
} */

/* That's odd

let count = 1;
while (count < 40) {
  console.log(count)
  count += 2;
}

Alternate solution using remainder operator

let count = 1;
while (count < 40) {
  if (count % 2 !== 0){
  console.log(count)}
  count += 1; 
} */

/* finding nemo

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let i = 0; i < fish.length; i += 1) {
  if (fish[i] === "Nemo") {
    console.log(fish[i]);
    break;
  }
  console.log(fish[i])
} */

/* Do...While

The first snippet will never log the text, because counter is never greater
than zero. In the second snippet, the counter is also never greater than
zero, but in a do/while loop, the code is run once prior to the first loop */