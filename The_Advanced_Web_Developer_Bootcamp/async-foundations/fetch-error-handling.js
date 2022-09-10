// The api URL
const url = "http://some-url.com/amazing-api"

const apiErrorHandler = (request) => {
  // Surprise error! We have an error code
  if (!request.ok) {
    throw Error(request.status)
  }
  // Success! All good bruv!
  return request
}

fetch(url)
  .then(apiErrorHandler)
  .then((res) => {
    // We have a response data
    console.log("it's okay!")
  })
  .catch((err) => {
    // We have an error that has to do with the internet or the request it self and nothing with the response codes.
    console.error("it's not okay! ERR: " + err)
  })
