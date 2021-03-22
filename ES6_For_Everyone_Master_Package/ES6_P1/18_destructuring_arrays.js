/**
 * Example 1
 */

// Sample array of data. 
const details = ['Wes Bos', 123, 'wesbos.com'];

// Old ways of getting data and 
// setting data to varaibles
const name1 = details[0];
const id1 = details[0];

// Destructing array and getting setting 
// data to new variables which have the
// same names as the once in the source.
const [name, id, website] = details;

// console logging the new variables.
console.log(name, id, website);


/**
 * Example 2
 */

// We get his uesless looking data and we
// needs to be destructed it into varaibles
// for our fancy function to deal with it.
const data = 'Basketball,Sports,90210,23,wes,bos';

// Here we are setting the varibles, but at the end 
// insted of just setting the source we give it
// infomration on where the data should be split.
const [itemName, category, sku, inventory] = data.split(',');

// console logging to confirm.
console.log(itemName, category, sku, inventory);

// An intresting fact, how the lenght of the data
// has more stuff then we are pulling from it,
// and still the function doesn't break, it just
// ingnores the data that is being picked up.


/**
 * Example 3
 */

// In this example we have a team of football 
// players. We want to get the first two but
// Also the rest, but in one array variable.
const team = ['Wes', 'Harry', 'Sarah', 'Keegan', 'Riker'];

// So, firt tow variables are peace of cake
// then we use the rest operator "..." to 
// get the next player and every other player. 
const [captain, assistant, ...players] = team;

// Console log the players array.
console.log(players);