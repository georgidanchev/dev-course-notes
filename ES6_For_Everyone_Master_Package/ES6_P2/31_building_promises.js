/**
 *  Example 1 - Bulding your own promise.
 */

// Here we imitate response form an api with
// a timeout function which is wrapped in a 
// promise. After which we listen for reponse.
const errorGate = false;

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (!errorGate) {
      resolve('Wes is cool');
    } else {
      // we wrap the error in object, so we  
      // can get more info e.g. error origin.
      reject(Error('Err wes isn\'t cool'));
    }
  }, 1000);
});

// Reponse handaling.
p.then(data => {
    // We succesfully get the data.
    console.log(data);
  })
  // WE get an error. 
  .catch(err => {
    console.error(err);
  })