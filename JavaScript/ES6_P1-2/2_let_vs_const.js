/*
// Let vs const variables.
*/

const key = 'abc123';
let points = 50;
let winner = false;

if (points > 40) {
  console.log('click');
  let winner = true;
  console.log(winner);
  // The output of this will be true.
  // even tho this variable is the same.
  // it's scoped to this block.
}
// Once we get out of the block. 
// the winner variable will be 
// like it was never changed.
console.log(winner);
// In a way these are two totally 
// different varaibles, even tho 
// they have the same name.