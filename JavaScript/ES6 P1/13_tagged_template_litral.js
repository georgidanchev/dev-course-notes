// The variables
const name = 'Snickers';
const age = 100;

// function which process the template string.
// we get the strings and the ${values}.
// ...values <- this is the rest operator. 
function highlight(strings, ...values) {
  // inside this function we get an array of the two stirngs 
  // are the peaces of text before value interuption
  // and values are the variables we pass.
  //
  // also strings array lenght is one bigger then values.
  let str = '';

  strings.forEach((string, i) => {
    // at the end if there is no value add nothing.
    str += `${string} <span contenteditable class="h1">${(values[i] || '')}</span>`;
  });

  return str;
}

// template string.
const sentence = highlight `My dog's name is
${name} and he is ${age} years old.`;

// Console log.
console.log(sentence);