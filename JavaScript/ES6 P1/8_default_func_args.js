function calculateBill(total, tax = 0.13, tip = 0.15) {
  // if we don't pass any arguments to tax and tip
  // we can use and set es6 default arguments above.

  // otherwise in es5 we have to check and
  // set the arguments if they are empty.

  // fancier way of doing this way of doing this
  tex = tax || 0.13;

  // otherwise you have to check if text = null 
  if (tax == null) {
    tax = 0.13;
  }

  // both of those are messasy ways and in our 
  // current example they will nver run as we
  // have already set the default arguments.
  return total + (total * tax) + (total * tip);
}

// set new variable directly with calucalted data.
const totalBill = calculateBill(100);

// console log the variable data. output: 128.
console.log(totalBill);

// if we want to leave some of the arguments
// blank we used the keyword undefined as this
// is what the function will be looking for
// before assigning the default values. 
console.log(calculateBill(100, undefined, 0.25));