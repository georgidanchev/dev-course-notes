// Variables.
const name = 'Snickers';
const age = 2;

// old ways of bulindg a string.
const sentence1 = 'my dog ' + name +
  ' is ' + age * 7 + ' years old.';

// bulding string with back tick AKA template string.
const sentence2 = `my dog ${name} is ${age * 7} years old.`;

console.log(sentence1);
console.log(sentence2);
// results are the same. But the way you 
// get to it is compeletly difffernt.