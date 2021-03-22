/*
 *  Iterator Example
 */

function nameIterator(names) {
  let nextIndex = 0;

  return {
    next() {
      return nextIndex < names.length
        ? {
            value: names[nextIndex++],
            done: false,
          }
        : {
            done: true,
          };
    },
  };
}

// Create an arry of names.
const nameArr = ['Jack', 'Jill', 'John'];

// Init the iterator and pass the names array.
const names = nameIterator(nameArr);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);

/*
 * Generator Example 1
 */

function* sayNames() {
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

const name = sayNames();

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next());

/*
 * Generator Example 2 - create IDs
 */

function* createIds() {
  let index = 1;

  while (true) {
    yield index++;
  }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
