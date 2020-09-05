// 1
let array1 = [1, 2, undefined, 4]; // length 4

let array2 = [1];
array2.length = 5; // length 5

let array3 = [];
array3[-1] = [1]; length 0

let array4 = [1, 2, 3, 4, 5];
array4.length = 3; // length 3

let array5 = [];
array5[100] = 3; // length 101

// 2
let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

myArray.forEach(function(x) {
  if (x % 2 === 0) {console.log(x)}
})

// 3

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (let x = 0; x < myArray.length; x++){
  for (let y = 0; y < myArray[x].length; y++){
    if (myArray[x][y] % 2 === 0) {console.log(myArray[x][y])}
  }
}

// 4 see ./exercise_4.js

// 5 see ./exercise_5.js

// 6 see ./exercise_6.js

// 7 see ./exercise_7.js

// 8 see ./exercise_8.js

// 9 see ./exercise_9.js

// 10
arr[1][2]