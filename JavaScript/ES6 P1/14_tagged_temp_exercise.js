// Dictionary object
const dict = {
  HTML: 'Hyper Text Markup Language',
  CSS: 'Cascading Style Sheets',
  JS: 'JavaScript'
}

// Variables
const first = 'Wes';
const last = 'bos';
const bio = document.querySelector('.bio');
const p = document.createElement('p');

// Template string handling strings 
function addAbbreviations(strings, ...values) {
  // Abrivation creating tool that looks for 
  // values taht match our dictionary object.
  const abbreviated = values.map(value => {
    if (dict[value]) {
      // If we have a match, warp in html tag and return.
      return `<abbr title="${dict[value]}">${value}</abbr>`
    }
    // If we don't get a match simply return the value.
    return value;
  });

  // String handaling function which  will loop over each
  // string value and build the string starting with nothing.
  return strings.reduce((sentance, string, i) => {
    return `${sentance}${string}${abbreviated[i] || ''}`;
  }, '');
}

// Template litreal string with a abbreviation bulding function
const sentance = addAbbreviations `Hello my name is ${first} ${last} and I love to code ${'HTML'}, ${'CSS'} and ${'JS'}`;

// Put the setence string into the newley create P element.
p.innerHTML = sentance;

// Appand the paragrap the the bio div.
bio.appendChild(p);