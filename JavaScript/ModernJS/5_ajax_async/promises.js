// Sample data.
const posts = [{ title: 'Post One', body: 'This is post one' }, { title: 'Post Two', body: 'This is post two' }];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      // Mimic an error.
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong!');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three' })
  .then(getPosts)
  .catch((err) => {
    console.error(err);
  });
