/* eslint-disable no-unreachable */

/**
 * Example 1
 */

// async function myFunc() {
//   return 'hello';
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = true;

//   if (!error) {
//     // wait until promise is resolved.
//     const res = await promise;
//     return res;
//   }
//   await Promise.reject(new Error('Something went wrong!'));
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

/**
 * Example 2
 */

async function getUsers() {
  // Await the response of the fetch.
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // only proceed ony it's resolved.
  const data = await response.json();

  // only return once we get the second promise.
  return data;
}

getUsers().then(users => console.log(users));
