/**
 * Example 1 - simulate 2 simultaneous api 
 */

const weather = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      temp: 29,
      conditions: 'Sunny with Clouds'
    });
  }, 2000);
});

const tweets = new Promise((resolve) => {
  setTimeout(() => {
    resolve(['I like cake', 'BBQ is good too!']);
  }, 500);
});

// ^ in the above example we simulate 2 simultaneous api 
// request which we want back for example use case.

Promise
  // ".all" gets an array of promises.
  .all([weather, tweets])
  // We wait reponse against those.
  .then(responses => {
    // destruct the responses into varaibles.
    const [weatherInfo, tweetsData] = responses;
    // console log both variables.
    //console.log(weatherInfo, tweetsData);
  });


/**
 * Example 2 - 2 simultaneous real api requets.
 */

const postsPromise = fetch('https://wesbos.com/wp-json/wp/v2/posts');
const streetCarsPromise = fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');

Promise
  // we listen for an array of promises. 
  .all([postsPromise, streetCarsPromise])
  // we get the responses as raw data.
  .then(responses => {
    console.log(responses);
    // we conert the responses to json.
    return Promise.all(responses.map(res => res.json()));
  })
  .then(responses => {
    // we console log the json data.
    console.log(responses);
  })
  .catch(err => {
    // we console log any errors.
    console.error(err);
  })