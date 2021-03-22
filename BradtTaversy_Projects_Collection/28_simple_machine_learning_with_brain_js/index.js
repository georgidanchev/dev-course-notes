const brain = require('brain.js');

const network = new brain.NeuralNetwork();

// network.train([
//   { input: [0,0,0], output: [0] },
//   { input: [0,0,1], output: [0] },
//   { input: [0,1,1], output: [0] },
//   { input: [1,0,1], output: [1] },
//   { input: [1,1,1], output: [1] }
// ]);

// const output = network.run([1,0,1]);
// result 90% chance.

// different team play against each other
network.train([
  { input: [1,2], output: [1] }, // Team 2 wins
  { input: [1,3], output: [0] }, // team 3 wins
  { input: [2,3], output: [0] }, // team 2 wins
  { input: [2,4], output: [1] } // team 4 wins
]);

// team 1 plays against team 4
const output = network.run([1, 4]);
//

console.log(`Prob: ${output}`);