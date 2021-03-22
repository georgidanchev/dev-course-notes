const request = require('request');

function getPosts() {
  const options = {
    uri: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    headers: { 'user-agent': 'node.js' },
  };
  request(options, (err, res, bdy) => {
    if (err) throw err;
    console.log(JSON.parse(bdy));
  });
}

getPosts();
