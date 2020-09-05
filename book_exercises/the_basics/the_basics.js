// 1
'Michael' + ' Fatigati'

// 2
> let number = 4936
undefined
> let ones = number % 10
undefined
> ones
6
> 
> number = (number - ones) / 10
493
> number
493
> 
> let tens = number % 10
undefined
> tens
3
> 
> number = (number - tens) / 10
49
> number
49
> 
> let hundreds = number % 10
undefined
> hundreds
9
> 
> number = (number - hundreds) / 10
4
> number
4
> 
> let thousands = number % 10
undefined
> thousands
4

// 3
> typeof 'true'
'string'
> typeof false
'boolean'
> typeof 1.5
'number'
> typeof 2
'number'
> typeof undefined
'undefined'
> typeof { foo: 'bar'}
'object'

// 4
let foo; statement
foo = 5; expression
foo; expression

// 5
console.log('5' + 10); /* logs '510' instead of 15 because '5' is a string,
which results in the concatanation operator performing implicit coercion on 10, treating it as a string. */

// 6
> console.log(Number('5') + 10)
15
undefined

// 7
> console.log(`The value of 5 + 10 is ${Number('5') + 10}.`)
The value of 5 + 10 is 15.
undefined

// 8
> let foo = ['a', 'b', 'c'];
undefined
> foo[3];
undefined // undefined is not the same as an error

// 9
let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];

// 10

let pets = {
  asta:	        'dog',
  butterscotch:	'cat',
  pudding:	    'cat',
  neptune:	    'fish',
  darwin:	      'lizard'
}; // note that in the solution they aligned the values

// 11
> 'foo' === 'Foo'
false // strings are case sensitive

// 12
> parseInt('3.1415')
3 // note that it stops converting once it hits the decimal point... this is different than rounding

// 13
> '12' < '9'
true
