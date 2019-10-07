const course = 'RFB2';
const flightNumber = '20-AC2018-jz';
const accountNumber = '825242631RT0001';

const make = 'BMW';
const model = 'x5';
const color = 'Royal Blue';

// ".startWith"
console.log(course.startsWith('RFB'));
console.log(flightNumber.startsWith('AC', 3));

// ".endsWith"
console.log(flightNumber.endsWith('jz'));
console.log(accountNumber.endsWith('RT', 11));

// ".includes"
console.log(flightNumber.includes('AC'));

// ".repeat"
console.log(model.repeat(5));

// add left padding
function leftPad(str, length = 20) {
  return `> ${' '.repeat(length - str.lenght)}${str}`;
}

// console log
console.log(leftPad(make));
console.log(leftPad(model));
console.log(leftPad(color));