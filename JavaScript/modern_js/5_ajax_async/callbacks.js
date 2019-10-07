// Sample data.
const posts = [{ title: 'Post One', body: 'This is post one' }, { title: 'Post Two', body: 'This is post two' }];

// const createPost = (post) => {
//   setTimeout(() => {
//     posts.push(post);
//   }, 2000);
// };

// const getPosts = () => {
//   setTimeout(() => {
//     let output = '';

//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`;
//     });

//     document.body.innerHTML = output;
//   }, 1000);
// };

// createPost({ title: 'Post Three', body: 'This is post three' });

// getPosts();

/*
// Mimic REST API
*/

const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
};

const getPosts = () => {
  setTimeout(() => {
    let output = '';

    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
};

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
