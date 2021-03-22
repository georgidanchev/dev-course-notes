/**
 * Example 1
 */

const person = {
  name: 'Wes',
  job: 'Web Developer',
  city: 'Hamilton',
  bio: 'Wes is a really cool guy that loves to teach web development!'
}

// the old way of bulding mutli 
// line text/html fragment.
var text1 = "hello there, \
  how are you \
  ";

// building a string html fragment
// using template litral.
const markup = `
  <div class="person">
    <h2>
      ${person.name}
      <span class="job">${person.job}</span>
    </h2>
    <p class="location">${person.city}</p>
    <p class="bio">${person.bio}</p>
  </div>
`;

// console log both strings.
console.log(markup);

// inject the markup string.
document.body.innerHTML += markup;

/**
 * Example 2
 */

// seprate the example with a line.
document.body.innerHTML += "<hr>";

// arry of dog objects.
const dogs = [{
    name: 'Snickers',
    age: 2
  },
  {
    name: 'Hugo',
    age: 8
  },
  {
    name: 'Sunny',
    age: 1
  }
];

// Looping over each element object and bulding
// a list. Which we then remove the comman by 
// joining ".join('')" each item with nothing.
const markup2 = `
  <ul class="dogs">
    ${dogs.map(dog => `<li>${dog.name} is ${dog.age * 7}</li>`).join('')}
  </ul>
`;

// inject the markup string.
document.body.innerHTML += markup2;

/**
 * Example 3
 */

// seprate the example with a line.
document.body.innerHTML += "<hr>";

const song = {
  name: 'Dying to live',
  artist: 'Tupac',
  featuring: 'Biggie Smalls'
};

const markup3 = `
  <div class="song">
    <p>
      ${song.name} - ${song.artist}
      <!-- ternary operator. if we have featuring 
      artist add the name, if not add nothing.-->
      ${song.featuring ? `(Featuring ${song.featuring})` : ''}
    </p>
  </div>
`;

// inject the markup string.
document.body.innerHTML += markup3;

/**
 * Example 4
 */

// seprate the example with a line.
document.body.innerHTML += "<hr>";

// beer object with bunch of data.
const beer = {
  name: 'Belgian wit',
  brewery: 'Steam Whistle Brewery',
  keywords: ['pale', 'cloudy', 'spiced', 'crisp']
}

// function which loops throught keywords and
// creates ul list with all of them.
function renderKeywords(keywords) {
  return `
    <ul>
      ${keywords.map(keyword => `<li>${keyword}</li>`).join('')}
    </ul>
  `;
}

// template litral string bulding that also
// uses external function to create a list. 
const markup4 = `
  <div class="beer">
    <h2>${beer.name}</h2>
    <p class="brewery">${beer.brewery}</p>
    ${renderKeywords(beer.keywords)}
  </div>
`;

// inject the markup string.
document.body.innerHTML += markup4;