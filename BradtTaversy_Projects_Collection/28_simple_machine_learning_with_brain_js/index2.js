const brain = require('brain.js');
const data = require('./data.json');

const testString1 = 'I fixed the power supply';
const testString2 = 'The code has some bugs'

// recurring brain network with long and short term memory
const network = new brain.recurrent.LSTM();

// reformat training data
const trainingData = data.map(item => ({
  input: item.text,
  output: item.category
}));

// go over the training 2k times
network.train(trainingData, {
  iterations: 2000
});

// test a string against the network
const output1 = network.run(testString1);
const output2 = network.run(testString2);

console.log(`Category: ${output1}`);
// result: hardware
console.log(`Category: ${output2}`);
// result: software