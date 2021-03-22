const cuts = ['Chunks', 'Briskete', 'Shank', 'Short Rib'];

/**
 * Example 1 - standart for loop
 */
for (let i = 0; i < cuts.length; i++) {
  //console.log(cuts[i]);
}


/**
 * Example 2 - for each loop
 */

// With for each loop we cannot continue or
// or break the loop as its going over each
cuts.forEach((cut) => {
  //console.log(cut);
});


/**
 * Example 3 - for in loop
 */

for (const index in cuts) {
  //console.log(cuts[index]);
}


/**
 * Example 4 - for of loop
 */

// The best kind of loop, the of loop it allows you
// to skip or even break the loop. But you can't 
// loop over objects with it it. A work around for
//  this issue can be found  at bttom of docs.

for (const cut of cuts) {
  if (cut == 'Bricket') continue;
  //console.log(cut);
}


/**
 * example 5 - looping over array of strings
 */

// ".entries()" is iterator which returns 
// an array that has both index and data.
for (const [i, cut] of cuts.entries()) {
  // we have desctructured to the two varaible
  //console.log(`${cut} is the ${i} item`);
}


/**
 * example 6 - function looping over many arugments
 */


function addUpNumberS() {
  // "arguments" is a keywords used to pass all
  // of the arugmetns that you might pass.

  // check all the arguments which are passed.
  //console.log(arguments);

  let total = 0;
  for (const num of arguments) {
    // on each loop add to the total.
    total += num;
  }

  // console log the total.
  //console.log(total);
  // return back the total.
  return total;
}

// Call the function while passing many arguments.
addUpNumberS(10, 20, 43, 33, 53, 32, 55, 44, 77, 17, 55);


/**
 * example 7 - loop over a each string character
 */

const name = 'Wes Bos';

for (const char of name) {
  // console prints out every single charecter
  //console.log(char);
}


/**
 * example 8 - loop over DOM collections
 */

// Template litirate paragraph tag with br tag
const para = `<p>this is a parahraph!</p><br/>`

// Add 10 paragraphs to the inner html.
document.body.innerHTML += para.repeat(10);

// query select all of thse paragraps
const ps = document.querySelectorAll('p');

// loop over all of thse paragraphs.
for (const parahraph of ps) {
  // add event listener to each paragraphs.
  parahraph.addEventListener('click', (e) => {
    //When clicked, console log inner text.
    //console.log(e.target.innerText);
  });
}


/**
 * Example 9 - for of loop over gameobject
 */

// Usally you cannot loop over an object with 
// for of loop. But there is a work around 
// using "Object.keys" which returns array.

const apple = {
  color: 'red',
  size: 'medium',
  weight: 50,
  sugar: 10
};

for (const prop of Object.keys(apple)) {
  //console.log(prop);
}