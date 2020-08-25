function copyObj(original, keys){
  let destinationObject = {};
  if (keys)
  {keys.forEach(x => destinationObject[x] = original[x])}
  else Object.assign(destinationObject, original)
  return destinationObject
}

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