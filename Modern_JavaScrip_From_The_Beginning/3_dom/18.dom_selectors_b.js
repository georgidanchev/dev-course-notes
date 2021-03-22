
// document -> get element by class

const items = document.getElementsByClassName('collection-item');

// verify selection.
console.log(items);
console.log(items[0]);

// modify array nodes.
items[0].style.color = 'red';
items[3].textContent = 'Hello';

// you can chain selectors.
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);

// document -> getElementsByTagName

let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);

lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

lis = Array.from(lis);
lis.reverse();

lis.forEach((li, index) => {
  const thisLI = li;
  console.log(thisLI.className);
  thisLI.textContent = `Hello : ${index}`;
});

console.log(lis);
