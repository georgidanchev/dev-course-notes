const search = document.getElementById('search');
const matchList = document.getElementById('match-list');
let states;

// Get json data with fetch await/async
const getData = async () => {
  const res = await fetch('../data/states.json');
  states = await res.json();
};

const injectHTML = (data) => {
  matchList.innerHTML = data;
};

const filterMatches = (matches) => {
  // If we have matches to filter.
  if (matches.length > 0) {
    // Create html by mapping over the results.
    const html = matches
      .map(
        match => `
      <div class="card card-body mb-1">
        <h4>${match.name} (${match.abbr}) <span class="text-primary">${match.capital}</span></h4>
        <small>Lat: ${match.lat} / Long: ${match.long}</small>
      </div>
    `,
      )
      // Convert result array into a string.
      .join('');

    // Inject filtered result
    injectHTML(html);
  }
};

// Search states.json and filter it
const searchStates = (searchText) => {
  // Get matches to current text input
  let matches = states.filter((state) => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return state.name.match(regex) || state.abbr.match(regex);
  });

  // If we clear input, clear matches array
  if (searchText.length === 0) {
    matchList.innerHTML = '';
    matches = [];
  }

  // call output and pass matches
  filterMatches(matches);
};

// Event listener
search.addEventListener('input', () => searchStates(search.value));
// Once dom is loaded get data
window.addEventListener('DOMContentLoaded', getData);
