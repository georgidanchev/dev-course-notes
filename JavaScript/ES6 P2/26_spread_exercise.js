// First we get the heading
const heading = document.querySelector('.jump');
// Then we process the heading text
const spans = spanWrap(heading.innerText);
// Inject the convereted heading into the html
heading.innerHTML = spans;

// covert the heading word.
function spanWrap(word) {
  // we get the word the we spread it into an 
  // array. Then we map over it and for each 
  // letter we return span with that letter.
  return [...word].map(letter => `<span>${letter}</span>`).join('');
}