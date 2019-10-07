const posts = [{
    title: 'I love JavaScript',
    author: 'Wes Bos',
    id: 1
  },
  {
    title: 'CSS!',
    author: 'Chris Coyier',
    id: 2
  },
  {
    title: 'Dev tools tricks',
    author: 'Addy Osmani',
    id: 3
  },
];

const authors = [{
    name: 'Wes Bos',
    twitter: '@wesbos',
    bio: 'Canadian Developer'
  },
  {
    name: 'Chris Coyier',
    twitter: '@chriscoyier',
    bio: 'CSS Tricks and CodePen'
  },
  {
    name: 'Addy Osmani',
    twitter: '@addyosmani',
    bio: 'Googler'
  },
];

// The above code will simulate access
// to two databases.

function getPostById(id) {
  // create a new promise.
  return new Promise((resolve, reject) => {
    // uising a timeout to mimick a database.
    setTimeout(() => {
      // find the post we want.
      const post = posts.find(post => post.id === id);
      // reponse.
      if (post) {
        // we have our post.
        resolve(post);
      } else {
        // we haev an error!
        reject(Error('No post was found!'));
      }
    }, 1000);
  });
}

function hydrateAuthor(post) {
  // creating a new promise. 
  return new Promise((resolve, reject) => {
    const authorDetails = authors.find(person => person.name === post.author);
    if (authorDetails) {
      // if true, hydrate the author details in the post 
      // object with the details from the author object 
      post.author = authorDetails;
      // resolve the request.
      resolve(post);
    } else {
      // or pass an error.
      reject(Error('Cannot find the author! :('));
    }
  });
}

// Get the first post by id.
getPostById(1)
  // Once we get the response.
  .then(post => {
    console.log(post);
    // Pass it to our secondary function.
    return hydrateAuthor(post);
  })
  // We await response form
  // the hydration fucnton.
  .then(post => {
    // we print out the response.
    console.log(post);
  })
  // catch any error throught.
  .catch(err => {
    // console log the error.
    console.error(err);
  })