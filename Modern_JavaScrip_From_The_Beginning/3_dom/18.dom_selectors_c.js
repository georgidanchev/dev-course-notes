
// document -> querySelectorAll

// you can use css selectors in the query selector.
const items = document.querySelectorAll('ul.collection li.collection-item');

// queryselector all gives you a proper array. huh.

items.forEach((item, index) => {
  const thisItem = item;
  thisItem.textContent = `${index}:  hello`;
});

const liEven = document.querySelectorAll('li:nth-child(even)');
const liOdd = document.querySelectorAll('li:nth-child(odd)');

liOdd.forEach((li) => {
  const thisLi = li;
  thisLi.style.background = '#ccc';
});

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = '#f4f4f4';
}

console.log(items);