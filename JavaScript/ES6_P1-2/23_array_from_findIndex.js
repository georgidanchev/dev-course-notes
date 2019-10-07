const code = 'mxKQoQcQh'

/**
 * Example 1 - Find a post in an array by code.
 */

// Find the spesicifc post in an array by code
const post = posts.find(post => {
  if (post.code === 'VBgtGQcSf') {
    return true;
  }
  return;
});
console.log(post);

// Find the array index of our post.
const postIndex = posts.findIndex((post) => {
  if (post.code === code) {
    return true;
  }
  return;
});
console.log(postIndex);

/**
 * Example 2 - short hand way of doing the above.
 */

// shorthand of finding post by code.
const post2 = posts.find(post => post.code === code);
console.log(post2);

// shorthand of finding post index.
const postIndex2 = posts.findIndex(post => post.code === code);
console.log(postIndex);