
// string, integer, boolean
console.log('hello');
console.log(123);
console.log(true);

// variable
const greeting = 'Hello';
console.log(greeting);

// array and object
console.log([1, 2, 3, 4]);
console.log({ a: 1, b: 2 });

// object as table
console.table({ a: 1, b: 2 });

// console error, warning and info.
console.error('this is a error!');
console.warn('this is a warning!');
console.info('this is an info!');

// timed function
console.time('timed');
// looping 1 million times
for (let i = 0; i < 1000000; i++) {
  i++;
}
console.timeEnd('timed');
