const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(typeof sym2);

console.log(Symbol() === Symbol());
console.log(`Hello String ${String(sym1)}`);
console.log(`Hello String ${sym1.toString()}`);

const key1 = Symbol();
const key2 = Symbol('sym2');

const myObject = {};

myObject[key1] = 'prop1';
myObject[key2] = 'prop2';
myObject.key3 = 'prop3';
myObject.key4 = 'prop4';

console.log(myObject[key1]);
console.log(myObject[key2]);

// Symbols are not enumerable in for...in

for (const i in myObject) {
  console.log(`${i}: ${myObject[i]}`);
}

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({ key: 'prop' }));
console.log(JSON.stringify({ [Symbol('sym1')]: 'prop' }));
