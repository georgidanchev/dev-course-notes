
/**
 * Switches - use when you have
 * a lot of different cases.
 */

const color = 'red';

switch (color) {
  case 'red': console.log('red');
  break;
  case 'blue': console.log('blue');
  break;
  default:
  console.log('color is not found');
}

// Example 2.

let day;

switch (new Date().getDay()) {
  case 0: day = 'Sunday';
  break;
  case 1: day = 'Monday';
  break;
  case 2: day = 'Tuesday';
  break;
  case 3: day = 'Wednesday';
  break;
  case 4: day = 'Thursday';
  break;
  case 5: day = 'Friday';
  break;
  case 6: day = 'Saturday';
  break;
  default: console.log('not a day');
}

console.log(`today is ${day}`);