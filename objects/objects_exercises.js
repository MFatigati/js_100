// 1

person.name;

// 2 As keys, all are valid

// 3 see ./exercise_3.js

// 4 see ./exercise_4.js

// 5

let myObj = Object.create(myProtoObj);

// 6

myObj.qux = 3;

/* Different code, because the for/in loop iterates over the own properties of myObj,
and its inheritated properties, whereas Object.keys() only iterates over own properties. */

// 7 see ./exercise_7.js, and ./exercise_7a.js for different solution modeled on LS

/* 8 foo.a logs "hi" because object properties are mutable.
qux still logs "hello" because the variable being reassigned is argument2, not qux.
The function call originally gives argument2 the value from qux, but  then reassigns are not mutable
*/