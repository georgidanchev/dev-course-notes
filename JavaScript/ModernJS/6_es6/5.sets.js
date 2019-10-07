// SETS - Store unique values of any type

const set1 = new Set();

// Add values to set.
set1.add(100);
set1.add('a string');
set1.add({ name: 'John' });
set1.add(true);
set1.add(100);

const set2 = new Set([1, true, 'string']);

// Logout the set.
console.log(set1);
console.log(set2);

// Get the length of a set
console.log(set1.size);

// Check if set has a value.
console.log(set1.has(100));

// Check by expression -> still true.
console.log(set1.has(50 + 50));

// Check by objects - doesn't work.
// as objects are stored in the sack
// and not the heap.
console.log(set1.has({ name: 'John' }));

// Objects are not primitive values. output: false.
console.log({ name: 'John' } === { name: 'John' });

// Delete a set value.
set1.delete(100);

// Verify.
console.log(set1);

// Console space.
console.log('--------------');

// Iterating through the set - for of.
for (const item of set1) {
  console.log(item);
}

// Console space.
console.log('--------------');

// ForEach loop.
set1.forEach((value) => {
  console.log(value);
});

// Convert sets into an array.
const setArray = Array.from(set1);
console.log(setArray);
