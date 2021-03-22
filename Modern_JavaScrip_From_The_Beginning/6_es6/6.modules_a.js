/* eslint-disable */

/**
 * ES2015 module syntax.
 */

// Named imports.
import {object1, func1} from './scripts/testModule1';

// Import everything.
import * as modules from './scripts/testModule2';

// Import the default export.
import someFunc from './scripts/testModule3';

/**
 * CommonJS module syntax.
 */

// Import everything.
const testModules = require('./scripts/testModule');

// Example usage.
console.log(object1);
console.log(func1.sayHello());
console.log(testModules.name);

console.log(modules.name);
console.log(someFunc());
