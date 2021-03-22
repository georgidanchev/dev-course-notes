/*
// scenario 1 - IIFE
*/

// how we used to keep keep variable scope to.
// blocks. you enclose them in IIFE functions.
(function () {
  var name = 'wes';
  console.log(name);
  // output: wes.
})();

//console.log(name);
// output: not defined error.

/*
// scenario 2 - with ES6
*/

const name2 = 'wes2';
console.log(name2);
// output: wes2 

{
  const name3 = 'wes3';
  console.log(name3);
  // output: wes3.
}

//console.log(name3);
// output: not defined error.

/*
// scenario 3 - loops with vars
*/

// var even tho it's wraped in a block
// it leaks to the global porject scope
for (var i = 0; i < 10; i++) {
  // prints each loop immediately.
  console.log(i);
  // the below function should run after a second
  // each time, but what happen is that it runs
  // 10 times after the loop ends.
  setTimeout(function () {
    console.log('THe number is ' + i);
  }, 1000);
}
// still prints out our 
console.log(i, i, i, i);

// the problem is that the variable is being
// overwritten every single time and there is 
// no reference as to what the I was when it 
// run at the time the timeout was invoked. 

/*
// scenario 4 - loops with let
*/

for (let b = 0; b < 10; b++) {
  // prints each loop immediately.
  console.log(b);
  // we invoke the timeout function
  // and pass our current loop count.
  setTimeout(function () {
    // the output still gets called 1 second 
    // after the loop calls it. But insted of 
    // getting the 10 every time we get the 
    // for loop index as it was. Very usful!
    console.log('The number was ' + b);
  }, 1000);
}