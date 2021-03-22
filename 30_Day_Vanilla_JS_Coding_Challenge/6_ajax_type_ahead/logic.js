const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const cities = []
// fetch api request.
fetch(endpoint)
  .then(data => data.json())
  .then(data => cities.push(...data))
  .catch(err => console.error(err))

// Function that adds commans to big numbers
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function findMatches(wordToMatch) {
  return cities.filter((place) => {
    // here we need to figure out if the city
    // or state matches what awas searched
    const regex = new RegExp(wordToMatch, 'gi')
    return place.city.match(regex) || place.state.match(regex)
  })
}

function displayMatches() {
  // array that stores the search result
  const matchArray = findMatches(this.value, cities)
  // loop over the matches array
  const html = matchArray.map((place) => {
    // ragex string matcing
    const regex = new RegExp(this.value, 'gi')

    // build the text with highlighted bits
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)

    // build html with template literals
    return `<li>
    <span class="name">${cityName}, ${stateName}</span>
    <span class="population">${numberWithCommas(place.population)}</span>
  </li>`
    // ".join('')" turns the array into single string
  }).join('')

  // inject the search suggestion/result
  suggestions.innerHTML = html
}


// Event listeners
searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)