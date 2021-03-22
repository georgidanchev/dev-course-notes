
// assigning
const id = 100;
const gate = 5;

// comparing - euqal to value & type
// comparing - not euqal to value & type
if (gate === 1) {
  if (id === 110) {
    console.log('correct');
  } else {
    console.log('incorrect');
  }
  if (id !== 100) {
    console.log('correct');
  } else {
    console.log('incorrect');
  }
}

// test if undefiend
if (gate === 2) {
  if (typeof id !== 'undefined') {
    console.log(`The ID is ${id}`);
  } else {
    console.log('no ID');
  }
}

// greater or equal to.
if (gate === 3) {
  if (id >= 200) {
    console.log('correct');
  } else {
    console.log('incorrect');
  }
}

// else if statement
if (gate === 4) {
  const color = 'pink';
  if (color === 'red') {
    console.log('color is red');
  } else if (color === 'blue') {
    console.log('color is blue');
  } else {
    console.log('color is not red or blue');
  }
}


/**
 * logical operators
 */

const age = 20;
const name = 'Steve';

// AND &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// shorthand operator - ternary opreator
console.log(id === 100 ? 'correct' : 'incorrect');
