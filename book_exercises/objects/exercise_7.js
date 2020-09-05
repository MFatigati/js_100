function copyObj (toCopy, arrKeys) {
  if (!arrKeys) {
    return Object.assign({}, objToCopy)}
  else {
    let newObj = {}
    for (let x in toCopy) {
      if (arrKeys.includes(x))
      {newObj[x] = toCopy[x]}
    return newObj  
  }
}}

let objToCopy = {
  foo: 1,
  bar: 2,
};

let newObj = copyObj(objToCopy);
console.log(newObj.foo);
console.log(newObj.bar);

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);
console.log(newObj2.bar);

/* LS solution just used a .forEach() on the arrKeys, using each iteration of a key to define a
new property on the new object that accords with that key/value on the original object */