/**
 * Example 1 - fetch is build right into the browser.
 */

// Javascript is entrily asynchronous which means 
// which means one peace of code doesn't have to
// wait another peace of code to run before it 
// can run itself. If you set timeout, the whole
// code will not pouse for this single timeout.

const postsPromise = fetch('https://wesbos.com/wp-json/wp/v2/posts');

postsPromise
  //once we get the data process it as json
  .then(data => data.json())

  // then console log the data
  .then(data => {
    console.log(data);
  })

  // In case of error log it
  .catch((err) => {
    console.error(err);
  });

/**
 * Example 2 - Example of gettin error.
 */

const postsPromise2 = fetch('https://wesbos.com/wp-jsan/wp/v2/posts');

// same funtion as above however our
// link is not correct, so we get error
postsPromise2
  .then(data => data.json())
  .then(data => {
    console.log(data);
  })
  .catch((err) => {
    //We get -> TypeError: Failed to fetch
    console.log(err);
  });

// Once you run this page you will notice that 
// most of the times we get the error before 
// we get the acutal response. 
// This is async in action. :)