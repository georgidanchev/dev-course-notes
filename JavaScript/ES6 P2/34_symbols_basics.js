// The 6 exisitng primitive types: number, string, object, 
// boolean, null, undefined. There is a 7th new one. Symbol.

const wes = Symbol('wes');
const person = Symbol('wes');

//console.log(wes === person);
//console.log(wes == person);

// Symbols are obsolute unique and you will never get a 
// colision of symbols with same data compared to varaibles.


/**
 * Object containing array of symbols
 */

const classRoom = {
  [Symbol('mark')]: {
    grade: 50,
    gender: 'male'
  },
  [Symbol('Olivia')]: {
    grade: 80,
    gender: 'female'
  },
  [Symbol('Olivia')]: {
    grade: 65,
    gender: 'female'
  }
}

// Even if the data is exactly the same as nother object
// there will never by a conflict between the two in the
// program, as both of the entries are totally unqiue.
//console.log(classRoom);


// You cannot directly loop over symbols!
for (person in classRoom) {
  //console.log(person);
}


/**
 * How to loop over object array of symbols.
 */

// Get array of all the classRoom symbols.
const syms = Object.getOwnPropertySymbols(classRoom);

// The way to allow for looping over object
//  is to have mapped out onto new variable.
const data2 = syms.map(sym => classRoom[sym])

// now you get a normal array with the data.
console.log(data2);