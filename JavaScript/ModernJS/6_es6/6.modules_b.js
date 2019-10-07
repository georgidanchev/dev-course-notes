/* eslint-disable */

/**
 * ES2015 module syntax.
 */

// Export single object.
export const person = {
  name: 'John',
  age: 30
};

// Export single function.
export function someFunc() {
  return `Hello! ${person.name}`;
}

// Normal const variable.
const greeting = 'Hello world';

// Export single variable.
export default greeting;

// Export single console as cConsole
export const cConsole = new Console();

/**
 * CommonJS module syntax.
 */

// Export a whole module.
module.exports = {
  name: 'Brad',
  email: 'test@test.com'
};
