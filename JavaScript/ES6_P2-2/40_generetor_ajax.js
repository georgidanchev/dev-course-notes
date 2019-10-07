/**
 * Water fall like ajax requests.
 */

// When we need to execute one function after another
// or in our case. One ajax after another then we can
// use a generator which strinngers next request once
// the one before it was recived.

// The AJAX function which does the requests.
function ajax(url) {
  fetch(url)
    .then(data => data.json())
    .then(data => datagen.next(data))
    .catch(err => console.log(err))
}

// Our Generetor function for the ajax rquest.
function* steps() {
  console.log('fetching beers')
  const beers = yield ajax('http://api.react.beer/v2/search?q=hops&type=beer')
  console.log(beers)

  console.log('fetching wes')
  const wes = yield ajax('https://api.github.com/users/wesbos')
  console.log(wes)

  console.log('fetching fat joe')
  const fatJoe = yield ajax('https://api.discogs.com/artists/51988')
  console.log(fatJoe)
}

// When we recived the data, call teh generator
// which will then call the next ajax request.
const datagen = steps()

// We can the first request to start things.
datagen.next()