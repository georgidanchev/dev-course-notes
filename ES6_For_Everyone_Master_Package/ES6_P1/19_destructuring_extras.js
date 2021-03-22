/**
 * Example - swapping varaibles.
 */

// Sample let varaibles.
let inRing = 'Hulk Hogan';
let onSide = 'The Rock';

// console log the varaibles.
console.log(inRing, onSide);

// This is the old way of doing this, we
// would have extra varaible to hold 
// th data we swap so it wont get lost.
var temp = inRing;
inRing = onSide;
onSide = temp;

// console log the varaibles.
console.log(inRing, onSide);

// With destructuring we can simply put them in arrays
// and spaw them arround, it does exactly the same 
// thing as the example above but in a simpler way.
[inRing, onSide] = [onSide, inRing];

// console log the varaibles.
console.log(inRing, onSide);