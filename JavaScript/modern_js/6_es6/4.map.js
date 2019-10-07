// Maps are key value pairs and we can
// use any type as a key or a value.

const map1 = new Map();

// Set some keys.
const key1 = 'some string';
const key2 = {};
const key3 = () => {};

// Set map values by key.
map1.set(key1, 'value of key1');
map1.set(key2, 'value of key2');
map1.set(key3, 'value of key3');

// Get values by key.
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count the values inside a map.
console.log(map1.size);

// Iterating maps - loop using for...of
for (const [key, value] of map1) {
  console.log(`${key} = ${value}`);
}

console.log('------------');
// Iterating and get just they keys
for (const key of map1.keys()) {
  console.log(key);
}

console.log('------------');
// Iterating values only
for (const value of map1.values()) {
  console.log(value);
}

// Loop with forEach
map1.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});

// Convert sets to arrays
// Create an array of key value paris.
const keyValArr = Array.from(map1);
console.log(keyValArr);

// Create array of just values
const valArray = Array.from(map1.values());
console.log(valArray);

// Create an array of the keys
const keyArray = Array.from(map1.keys());
console.log(keyArray);
