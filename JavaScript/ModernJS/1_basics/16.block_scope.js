/* eslint-disable */

var a = 1;
let b = 2;
const c = 3;

function test(){
  // func scope
  var a = 4;
  let b = 5;
  const c = 6;
  console.log(`func scope ${a} ${b} ${c}`)
}

//test()

// if(true) {
//   // block scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log(`block scope ${a} ${b} ${c}`)
// }

for(var a = 0; a < 10; a++) {
  console.log(`loop: ${a}`)
}

console.log(`global scope: ${a} ${b} ${c}`)